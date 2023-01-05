import './Microverse.css';
import { FaLocationArrow } from "react-icons/fa";
import microverseLogo from '../../assets/images/microverseLogo.png'
import hand from '../../assets/images/hand.png'
import vscode1 from '../../assets/images/vscode1.png'

const Microverse = () => {
    return (
      <section className="microverse-section-container">
        <div className="microverse-information" data-aos="fade-right">
          <div className="microverse-title">
            <FaLocationArrow className="arrow-icon" />
            <span>Education</span>
            <p className="microverse-date">Microverse - 2022/2023</p>
          </div>
          <p className="microverse-description">Spent 1300+ hours mastering algorithms, data structures, and full-stack development while simultaneously developing projects with <a href="https://en.wikipedia.org/wiki/Ruby_(linguagem_de_programa%C3%A7%C3%A3o)" target="_blank" rel="noreferrer">Ruby</a>, <a href="https://en.wikipedia.org/wiki/Ruby_on_Rails" target="_blank" rel="noreferrer">Rails</a>, <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank" rel="noreferrer">JavaScript</a>, <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" target="_blank" rel="noreferrer">React</a>, and <a href="https://en.wikipedia.org/wiki/Redux_(JavaScript_library)" target="_blank" rel="noreferrer">Redux</a>.</p>
          <p className="microverse-description">Developed skills in remote pair-programming using <a href="https://github.com/VitorGuedesMadeira" target="_blank" rel="noreferrer">GitHub</a>, industry-standard gitflow, and daily standups to communicate and collaborate with international remote developers.</p>
          <p className="microverse-description">Built 50+ projects ranging from simple projects to complex full-stack applications.</p>
        </div>
        <img className="vscode1" src={vscode1} alt="vscode1" />
        <img className="hand" src={hand} alt="hand" />
        <img className="microverse-logo" src={microverseLogo} alt="microverse-logo" />
      </section>
    );
  };

export default Microverse;