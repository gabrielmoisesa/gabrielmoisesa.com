import "./HeroSection.scss";
import { Fade } from "react-awesome-reveal";

function HeroSection() {
  return (
    <section className="hero">
      <Fade direction="up" delay={500}>
        <p>Front-End Developer / Full-stack student</p>
      </Fade>
      <Fade direction="up" delay={300}>
        <div className="intro-phrase-container">
          <h1>Beyond the Code:</h1>
          <p>
            <span className="purple-text">Original</span> and{" "}
            <span className="purple-text">Modern</span>
          </p>
          <p>Creative Solutions</p>
        </div>
      </Fade>
      <Fade direction="up" delay={500}>
        <p>Gabriel Moises Alves</p>
      </Fade>
    </section>
  );
}

export default HeroSection;
