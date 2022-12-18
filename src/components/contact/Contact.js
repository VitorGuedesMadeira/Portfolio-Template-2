import './Contact.css';
import { FaLocationArrow, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import darkiphone1 from '../../assets/images/darkiphone1.png'
import darkiphone2 from '../../assets/images/darkiphone2.png'

const Contact = () => {
    return (
      <section id="contact" className="contact-section-container">
        <div className="contact-column">
          <div className="contact-information">
            <div className="about-title">
              <FaLocationArrow className="arrow-icon" />
              <span>Get In Touch</span>
            </div>
            <p>If you want to work together on a project or just have a chat, please don't hesitate to contact me via email below.</p>
            <a class="email-link" href="mailto:vgm_rox@hotmail.com" target="_blank" rel="noreferrer"
>Say Hello</a>
          </div>
          <div className="relative">
            <img className="dark-phone" src={darkiphone1} alt="iPhone" />
            <img className="dark-phone phone-animation" src={darkiphone2} alt="iPhone" />
          </div>
        </div>
        <footer>
          <span><small>© All rights reserved</small></span>
          <ul>
            <li><a href="https://instagram.com/vitorguedesmadeira" target="_blank" rel="noreferrer"><FaInstagram /></a></li>
            <li><a href="https://github.com/VitorGuedesMadeira" target="_blank" rel="noreferrer"
><FaGithub /></a></li>
            <li><a href="https://www.linkedin.com/in/vitor-guedes-madeira/" target="_blank" rel="noreferrer"><FaLinkedin /></a></li>
          </ul>
        </footer>
      </section>
    );
  };
  
export default Contact;
  