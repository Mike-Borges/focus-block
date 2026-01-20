import "./Home.css";

export default function Home({ onGetStarted }) {
  return (
    <div className="home">
      {/* Hero section with camera image */}
      <section className="home__hero">
        <h1 className="home__title">Focus, without Friction.</h1>
        <button className="home__cta" onClick={onGetStarted}>
          Let's Focus!
        </button>
      </section>

      {/* Description section */}
      <section className="home__description">
        <p>
          A focus session balances depth and sustainability. It's long enough to
          support deep work and reduce context switching, but short enough to
          prevent mental fatigue.
        </p>
        <p>
          This makes it easier for users to commit, stay engaged, and work
          consistently.
        </p>
      </section>

      {/* Types of Focus cards */}
      <section className="home__types">
        <h2 className="home__types-title">Types of Focus</h2>
        <div className="home__cards">
          {/* You'll add the three cards here */}
        </div>
      </section>

      {/* Quote section */}
      <section className="home__quote">
        <p>"Focus on one thing. Let everything else wait."</p>
      </section>
    </div>
  );
}
