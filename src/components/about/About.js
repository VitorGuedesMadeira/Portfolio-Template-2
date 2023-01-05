import './About.css';
import { FaLocationArrow } from "react-icons/fa";
import vitorGuedes from '../../assets/images/vitorguedes.png'

const About = () => {
    return (
      <section id="about" className="about-section-container">
        <div className="about-flex-row">
          <div className="about-information" data-aos="fade-right">
            <div className="about-title">
              <FaLocationArrow className="arrow-icon" />
              <span>About</span>
              <p className="microverse-date">Get to know me better!</p>
            </div>
            <p>My interest in web development started back in 2021 when I was working with Hotmart online courses and I had to configure my first webpage by using WordPress. Even though I had no idea back then on how it worked, those were my first contact with HTML & CSS!</p>
            <p>Fast-forward to today, and I’ve had the privilege of working at <a href="https://www.microverse.org/" target="_blank" rel="noreferrer">Microverse</a> with several other applicants from all around the globe and very different cultures! My main focus these days is building accessible, inclusive products and digital experiences so I can improve my skills everyday.</p>
          </div>
          <img className="vitor-guedes" src={vitorGuedes} alt="developer" data-aos="fade-left" />
        </div>
      </section>
    );
  };
  
export default About;
  