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
          <img className="logo" src={myLogo} alt="logo" />
          <div className="contact-info">
            <FaPhone />
            <span>+55 51 985615374</span>
          </div>
          <div className="contact-info">
            <FaEnvelope />
            <span>vgm_rox@hotmail.com</span>
          </div>
        </div>

        <ul className={isHamburgerActive ? 'navigation-list on' : 'navigation-list'}>
          <li onClick={toggleClass}><a href="#headline">Home</a></li>
          <li onClick={toggleClass}><a href="#about">About</a></li>
          <li onClick={toggleClass}><a href="#skills">Skills</a></li>
          <li onClick={toggleClass}><a href="#projects">Projects</a></li>
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
  