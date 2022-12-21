import { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaPaperclip, FaGithub, FaMedium } from "react-icons/fa";
import resume from '../../assets/files/Profile.pdf';
import './Headline.css';

const Headline = () => {
  const [isWrapperActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isWrapperActive);
  };

    return (
      <section id="headline" className="headline-section-container">
        <div className="headline-information">
          <ul className="headline-icons">
            <li><a href="https://medium.com/@vitorguedesmadeira/you-teach-you-learn-6f5ac50aae65" target="_blank" rel="noreferrer"><FaMedium /></a></li>
            <li><a href="https://github.com/VitorGuedesMadeira" target="_blank" rel="noreferrer"><FaGithub /></a></li>
            <li><a href="https://www.linkedin.com/in/vitor-guedes-madeira/" target="_blank" rel="noreferrer"><FaLinkedin /></a></li>
          </ul>
          <div className="headline-texts">
            <p>Hi, my name is</p>
            <p>Vitor G. Madeira</p>
            <p>I build things for the web</p>
            <p>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m looking for a full-stack position. Feel free to check my resume. <a href={resume} download="" rel="noreferrer">Download resume</a></p>
            <button onClick={toggleClass}>Contact me</button>
          </div>
        </div>

        <div onClick={toggleClass} className={isWrapperActive ? 'contact-wrapper on' : 'contact-wrapper'}>
          <div className="contact-button">
            <a href="https://www.linkedin.com/in/vitor-guedes-madeira/" target="_blank" rel="noreferrer">
            <FaLinkedin />
            Linkedin
            </a>
          </div>
          <div className="contact-button">
            <a href="mailto:vgm_rox@hotmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope />
            Email
            </a>
          </div>
          <div className="contact-button">
          <a href="https://medium.com/@vitorguedesmadeira/you-teach-you-learn-6f5ac50aae65" target="_blank" rel="noreferrer"><FaMedium />Articles</a>
          </div>
          <div className="contact-button">
            <a href="https://docs.google.com/document/d/1LbPa1ridPgLK8a7S7N86yOm4bRhlgkTKyYPqqfxeKbI/edit" target="_blank" rel="noreferrer">
            <FaPaperclip />
            Resume</a>
          </div>
        </div>
      </section>
    );
  };
  
export default Headline;
  