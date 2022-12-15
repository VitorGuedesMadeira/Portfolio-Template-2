import { useState } from 'react';
import './Navigation.css';

const Navigation = () => {
    const [isHamburgerActive, setActive] = useState(false);

    const toggleClass = () => {
      setActive(!isHamburgerActive);
    };

    return (
      <nav>
        <span>MyLogo</span>
        <ul className={isHamburgerActive ? 'navigation-list on' : 'navigation-list'}>
          <li onClick={toggleClass}>Home</li>
          <li onClick={toggleClass}>About</li>
          <li onClick={toggleClass}>Projects</li>
          <li onClick={toggleClass}>Contact</li>
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
  