# TimeKeeper

A modern focus timer application designed to help users maintain deep work sessions without friction. Built with React and Vite.

## Features

- **Customizable Timer Sessions**: Choose from preset focus durations (15, 25, or 45 minutes)
- **Visual Progress Tracking**: Circular progress ring shows time remaining at a glance
- **Pause/Resume Functionality**: Control your focus sessions with intuitive pause and resume controls
- **Dynamic Visual Feedback**: Background opacity changes based on timer state for better focus awareness
- **Multiple Focus Types**: Learn about Micro-Focus, Macro-Focus, and Atomic Focus methodologies
- **Responsive Design**: Works seamlessly across desktop and mobile devices

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with custom properties and animations
- **Canvas Confetti** - Celebration effects on timer completion

## Project Structure

```
focus-block/
├── src/
│   ├── assets/          # Images and static files
│   ├── components/      # Reusable components
│   │   ├── Header/
│   │   └── Footer/
│   ├── pages/           # Page components
│   │   ├── Home/        # Landing page
│   │   ├── About/       # About page
│   │   ├── Timer/       # Timer views (Idle & Countdown)
│   │   └── CompletedView/
│   ├── vendor/          # Custom fonts
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
└── public/              # Public assets
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone
cd focus-block
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## Usage

1. **Select a Focus Duration**: Choose from 15, 25, or 45-minute presets on the idle screen
2. **Start Your Session**: Click the "Start" button to begin your focus session
3. **Monitor Progress**: Watch the circular progress ring fill as time passes
4. **Pause When Needed**: Use the pause button to temporarily stop the timer
5. **Reset if Required**: Click reset to return to the idle screen and select a new duration
6. **Celebrate Completion**: When the timer reaches zero, you'll see a completion screen

## Design Philosophy

TimeKeeper is built around three core focus methodologies:

- **Micro-Focus**: Intense, uninterrupted attention to one task in the moment
- **Macro-Focus**: Maintaining perspective to align micro-focus with overall goals
- **Atomic Focus**: Laser-focused mastery on very specific elements

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## Design Files

View the complete design specifications on Figma:

[Desktop/Mobile](https://www.figma.com/design/GJ6lyspcWcv0z3TYrwmGDC/Code-Jam-Team-3--Personal-Focus-Timer?node-id=963-929&t=ZBkXWeZNQgePt1Un-1)

## Acknowledgments

Built with focus and dedication by the TimeKeeper team.
