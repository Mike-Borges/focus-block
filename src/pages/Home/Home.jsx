import "./Home.css";
import microfocusImg from "../../assets/microfocus.jpg";
import macrofocusImg from "../../assets/macrofocus.jpg";
import atomicfocusImg from "../../assets/atomicfocus.jpg";

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
          A focus session balances depth and sustainability. It’s long enough to
          support deep work and reduce context switching, but short enough to
          prevent mental fatigue. This makes it easier for users to commit, stay
          engaged, and work consistently.
        </p>
      </section>

      {/* Types of Focus cards */}
      <section className="home__types">
        <h2 className="home__types-title">Types of Focus</h2>
        <div className="home__cards">
          <div className="home__card">
            <div className="home__card-image">
              <img src={microfocusImg} alt="Micro Focus" />
            </div>
            <h3 className="home__card-title">Micro-Focus</h3>
            <p className="home__card-text">
              Applying intense, uninterrupted attention to one task or problem
              in the moment.
            </p>
            <p className="home__card-more">Learn more</p>
          </div>

          <div className="home__card">
            <div className="home__card-image">
              <img src={macrofocusImg} alt="Macro Focus" />
            </div>
            <h3 className="home__card-title">Macro-Focus</h3>
            <p className="home__card-text">
              Maintaining a wider perspective to ensure your micro-focus aligns
              with your overall goals.
            </p>
            <p className="home__card-more">Learn more</p>
          </div>

          <div className="home__card">
            <div className="home__card-image">
              <img src={atomicfocusImg} alt="Atomic Focus" />
            </div>
            <h3 className="home__card-title">Atomic Focus</h3>
            <p className="home__card-text">
              The highest level of mastery, where attention is laser-focused on
              a very small, specific element, such as one movement in a sport
            </p>
            <p className="home__card-more">Learn more</p>
          </div>
        </div>
      </section>

      {/* Quote section */}
      <section className="home__quote">
        <p>"Focus on one thing. Let everything else wait."</p>
      </section>
    </div>
  );
}
