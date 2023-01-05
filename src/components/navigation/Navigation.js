import { useState } from 'react';
import { FaPhone, FaEnvelope } from "react-icons/fa";
import myLogo from '../../assets/images/vitorLogo2.png'
import './Navigation.css';

const Navigation = () => {
    const [isHamburgerActive, setActive] = useState(false);

    const toggleClass = () => {
      setActive(!isHamburgerActive);
    };

    return (
      <nav>
        <div className="flex-row">
          <a href="#headline"><img className="logo" src={myLogo} alt="logo" /></a>
          <div className="contact-info">
            <FaPhone />
            <a href="https://api.whatsapp.com/send?phone=5551985615374" target="_blank" rel="noreferrer">+55 51 985615374</a>
          </div>
          <div className="contact-info">
            <FaEnvelope />
            <a href="mailto:vgm_rox@hotmail.com" target="_blank" rel="noreferrer">vgm_rox@hotmail.com</a>
          </div>
        </div>

        <ul className={isHamburgerActive ? 'navigation-list on' : 'navigation-list'}>
          <li onClick={toggleClass}><a href="#headline">Home</a></li>
          <li onClick={toggleClass}><a href="#about">About</a></li>
          <li onClick={toggleClass}><a href="#projects">Projects</a></li>
          <li onClick={toggleClass}><a href="#skills">Skills</a></li>
          <li onClick={toggleClass}><a href="#testimonials">Testimonials</a></li>
          <li onClick={toggleClass}><a href="#contact">Contact</a></li>
        </ul>

        <div onClick={toggleClass} className={isHamburgerActive ? 'hamburger-menu on' : 'hamburger-menu'}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    );
  };
  
  export default Navigation;
  