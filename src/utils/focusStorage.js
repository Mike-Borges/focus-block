// src/utils/focusStorage.js

const STORAGE_KEY = "fb_focus_sessions_v1";

/**
 * Session record shape:
 * {
 *   completedAt: string (ISO),
 *   durationMinutes: number
 * }
 */

function readSessions() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeSessions(sessions) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
}

/**
 * 1) Write: add a completed session to localStorage
 */
export function addCompletedSession(durationMinutes, completedAt = new Date()) {
  const minutes = Number(durationMinutes);

  if (!Number.isFinite(minutes) || minutes <= 0) return;

  const sessions = readSessions();

  sessions.push({
    completedAt: completedAt.toISOString(),
    durationMinutes: minutes,
  });

  // Optional safety: keep history from growing forever (MVP-friendly)
  if (sessions.length > 500) {
    sessions.splice(0, sessions.length - 500);
  }

  writeSessions(sessions);
}

/**
 * Helpers for date windows (local time)
 */
function startOfDayLocal(date = new Date()) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

// Week starts Sunday 12:00am local time
function startOfWeekSundayLocal(date = new Date()) {
  const d = startOfDayLocal(date);
  const day = d.getDay(); // 0=Sun, 1=Mon, ... 6=Sat
  d.setDate(d.getDate() - day);
  return d;
}

/**
 * 2) Read+compute: get today's completed session count
 */
export function getTodaysCompletedCount(now = new Date()) {
  const sessions = readSessions();

  const start = startOfDayLocal(now).getTime();
  const end = new Date(start);
  end.setDate(end.getDate() + 1);

  const endMs = end.getTime();

  return sessions.reduce((count, s) => {
    const t = new Date(s.completedAt).getTime();
    return t >= start && t < endMs ? count + 1 : count;
  }, 0);
}

/**
 * 3) Read+compute: get this week's completed session count + total minutes
 * Week window: Sunday 12:00am -> next Sunday 12:00am (exclusive)
 */
export function getThisWeeksStats(now = new Date()) {
  const sessions = readSessions();

  const start = startOfWeekSundayLocal(now);
  const end = new Date(start);
  end.setDate(end.getDate() + 7);

  const startMs = start.getTime();
  const endMs = end.getTime();

  return sessions.reduce(
    (acc, s) => {
      const t = new Date(s.completedAt).getTime();
      if (t >= startMs && t < endMs) {
        acc.weeklyCount += 1;
        acc.weeklyMinutes += Number(s.durationMinutes) || 0;
      }
      return acc;
    },
    { weeklyCount: 0, weeklyMinutes: 0 }
  );
}
