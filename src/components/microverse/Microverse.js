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
            <span>Education</span>
            <p className="microverse-date">Microverse - 2022/2023</p>
          </div>
          <p className="microverse-description">Spent 1300+ hours mastering algorithms, data structures, and full-stack development while simultaneously developing projects with Ruby, Rails, JavaScript, React, and Redux.</p>
          <p className="microverse-description">Developed skills in remote pair-programming using GitHub, industry-standard gitflow, and daily standups to communicate and collaborate with international remote developers.</p>
          <p className="microverse-description">Built 50+ projects ranging from simple projects to complex full-stack applications.</p>
        </div>
        <img className="vscode1" src={vscode1} alt="vscode1" />
        <img className="hand" src={hand} alt="hand" />
        <img className="microverse-logo" src={microverseLogo} alt="microverse-logo" />
      </section>
    );
  };

export default Microverse;