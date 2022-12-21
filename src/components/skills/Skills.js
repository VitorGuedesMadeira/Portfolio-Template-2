import { FaLocationArrow } from 'react-icons/fa';
import icon1 from '../../assets/icons/javascript.png'
import icon2 from '../../assets/icons/react.png'
import icon3 from '../../assets/icons/ruby.png'
import icon4 from '../../assets/icons/bootstrap.png'
import icon5 from '../../assets/icons/tailwind.png'
import icon6 from '../../assets/icons/node.png'
import icon7 from '../../assets/icons/photoshop.png'
import icon8 from '../../assets/icons/postgresql.png'
import icon9 from '../../assets/icons/vscode.png'
import './Skills.css';

const Skills = () => {
    return (
      <section id="skills" className="skills-section-container">
        <div className="skills-information">
          <div className="about-title">
            <FaLocationArrow className="arrow-icon" />
            <span>Skills</span>
            <p className="microverse-date">Those are my stacks</p>
          </div>
          <div className="skills-box">
            <ul>
              <li>
                <img className="skill-icon" src={icon1} alt="skill-icon" />
                <p className="skill-name">JavaScript</p>
              </li>
              <li>
                <img className="skill-icon" src={icon2} alt="skill-icon" />
                <p className="skill-name">React</p>
              </li>
              <li>
                <img className="skill-icon" src={icon3} alt="skill-icon" />
                <p className="skill-name">Ruby</p>
              </li>
              <li>
                <img className="skill-icon" src={icon4} alt="skill-icon" />
                <p className="skill-name">Bootstrap</p>
              </li>
              <li>
                <img className="skill-icon" src={icon5} alt="skill-icon" />
                <p className="skill-name">Tailwind</p>
              </li>
              <li>
                <img className="skill-icon" src={icon6} alt="skill-icon" />
                <p className="skill-name">Node JS</p>
              </li>
              <li>
                <img className="skill-icon" src={icon7} alt="skill-icon" />
                <p className="skill-name">Photoshop</p>
              </li>
              <li>
                <img className="skill-icon" src={icon8} alt="skill-icon" />
                <p className="skill-name">PosgreSQL</p>
              </li>
              <li>
                <img className="skill-icon" src={icon9} alt="skill-icon" />
                <p className="skill-name">VSCode</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  };
  
export default Skills;
  