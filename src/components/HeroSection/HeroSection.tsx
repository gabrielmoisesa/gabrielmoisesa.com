import './HeroSection.scss';
import { Fade } from 'react-awesome-reveal';

function HeroSection() {
  return (
    <section className="hero">
      <Fade direction="up" delay={ 500 }>
        <p>Full-Stack Developer / Software Developer</p>
      </Fade>
      <Fade direction="up" delay={ 300 }>
        <div className="intro-phrase-container">
          <h1>Beyond the Code:</h1>
          <p>
            <span className="purple-text">Original</span>
            {' '}
            and
            {' '}
            <span className="purple-text">Modern</span>
          </p>
          <p>Creative Solutions</p>
        </div>
      </Fade>
      <Fade direction="up" delay={ 500 }>
        <p className="name-p">Gabriel Moises Alves</p>
      </Fade>
    </section>
  );
}

export default HeroSection;
