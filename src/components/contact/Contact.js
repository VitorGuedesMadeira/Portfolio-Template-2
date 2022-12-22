import './Contact.css';
import { FaLocationArrow, FaMedium, FaGithub, FaLinkedin } from "react-icons/fa";
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
            <form action="https://formspree.io/f/mlekrwao" method="post" id="form">
              <input
                type="text"
                name="name"
                required
                maxLength="30"
                placeholder="Full Name"
              />
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Email address"
              />
              <textarea
                name="message"
                cols="30"
                rows="7"
                maxLength="500"
                required
                placeholder="Enter text here"
              >
              </textarea>
              <small></small>
            <button type="submit">Get in touch</button>
          </form>
          </div>
          <div className="relative">
            <img className="dark-phone" src={darkiphone1} alt="iPhone" />
            <img className="dark-phone phone-animation" src={darkiphone2} alt="iPhone" />
          </div>
        </div>
        <footer>
          <span><small>© All rights reserved</small></span>
          <ul>
            <li><a href="https://medium.com/@vitorguedesmadeira/you-teach-you-learn-6f5ac50aae65" target="_blank" rel="noreferrer"><FaMedium /></a></li>
            <li><a href="https://github.com/VitorGuedesMadeira" target="_blank" rel="noreferrer"><FaGithub /></a></li>
            <li><a href="https://www.linkedin.com/in/vitor-guedes-madeira/" target="_blank" rel="noreferrer"><FaLinkedin /></a></li>
          </ul>
        </footer>
      </section>
    );
  };
  
export default Contact;
  