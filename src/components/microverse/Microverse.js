import './Microverse.css';
import { FaLocationArrow } from "react-icons/fa";
import microverseLogo from '../../assets/images/microverseLogo.png'
import hand from '../../assets/images/hand.png'
import vscode1 from '../../assets/images/vscode1.png'

const Microverse = () => {
    return (
      <section className="microverse-section-container">
        <div className="microverse-information">
          <div className="microverse-title">
            <FaLocationArrow className="arrow-icon" />
            <span>Knowledge</span>
            <p className="microverse-date">2022 - 2023</p>
          </div>
          <p className="microverse-description">Hello! My name is Vitor and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about <a href="https://us.mullenlowe.com/" target="_blank" rel="noreferrer">HTML</a> & <a href="https://us.mullenlowe.com/" target="_blank" rel="noreferrer">CSS</a>!</p>
        </div>
        <img className="microverse-logo" src={microverseLogo} alt="microverse-logo" />
        <img className="hand" src={hand} alt="hand" />
        <img className="vscode1" src={vscode1} alt="vscode1" />
      </section>
    );
  };

export default Microverse;