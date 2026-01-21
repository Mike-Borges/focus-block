import "./About.css";

export default function About() {
  return (
    <div className="about">
      <section className="about__hero">
        <h1 className="about__title">About Us</h1>
        <p className="about__subtitle">Meet the team behind TimeKeeper</p>
      </section>

      <section className="about__team">
        <div>
          <div className="about__member">
            <h2>Michael Borges</h2>
            <p>SE Student</p>
          </div>

          <div className="about__member">
            <h2>Martin Young</h2>
            <p>SE Student</p>
          </div>
        </div>
        <div>
          <div className="about__member">
            <h2>Varsha Kulkarni</h2>
            <p>UX/UI Student</p>
          </div>

          <div className="about__member">
            <h2>Kreeti Aggarwal</h2>
            <p>UX/UI Student</p>
          </div>
        </div>
      </section>
    </div>
  );
}
