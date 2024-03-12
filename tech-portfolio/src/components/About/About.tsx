import "./About.scss";
import headshot from "../../assets/headshot.jpg";
import arrow from "../../assets/bi_arrow-down-circle.png"

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__imagecontainer">
        <img
          src={headshot}
          alt="headshot-placeholder"
          className="about__image"
        />
      </div>
      <header className="about__title">
        <h1>
          Hi I'm Jess,
          <div className="about__title--highlight">
            a Junior Software Developer based in the UK.
          </div>
        </h1>
      </header>
      <p className="about__text--body">
        In pursuit of a career change, I embarked on a transformative journey at
        nology's full-stack software development bootcamp. I found a new
        direction that allows me to make a tangible impact and embrace my
        passion for creativity.
      </p>
      <div className="about__cta">
        <a href="#skills-scroll" className="about__cta--scroll">
          Scroll Down
          <img
            src={arrow}
            alt="arrow"
            className="about__cta--arrow"
          />
          </a>
      </div>
    </section>
  );
};

export default About;
