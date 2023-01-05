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
import icon10 from '../../assets/icons/rails.png'
import icon11 from '../../assets/icons/redux.png'
import icon12 from '../../assets/icons/netlify.png'
import icon13 from '../../assets/icons/webpack.png'
import icon14 from '../../assets/icons/github.png'
import icon15 from '../../assets/icons/html.png'

import './Skills.css';

const Skills = () => {
    return (
      <section id="skills" className="skills-section-container">
        <div className="skills-information" data-aos="fade-up">
          <div className="about-title">
            <FaLocationArrow className="arrow-icon" />
            <span>Skills</span>
            <p className="microverse-date">Those are my stacks</p>
          </div>
          <div className="skills-box">
            <ul>
              <li>
                <img className="skill-icon" src={icon15} alt="skill-icon" />
                <p>HTML</p>
              </li>
              <li>
                <img className="skill-icon" src={icon1} alt="skill-icon" />
                <p>JavaScript</p>
              </li>
              <li>
                <img className="skill-icon" src={icon2} alt="skill-icon" />
                <p>React</p>
              </li>
              <li>
                <img className="skill-icon" src={icon11} alt="skill-icon" />
                <p>Redux</p>
              </li>
              <li>
                <img className="skill-icon" src={icon3} alt="skill-icon" />
                <p>Ruby</p>
              </li>
              <li>
                <img className="skill-icon" src={icon10} alt="skill-icon" />
                <p>Rails</p>
              </li>
              <li>
                <img className="skill-icon" src={icon4} alt="skill-icon" />
                <p>Bootstrap</p>
              </li>
              <li>
                <img className="skill-icon" src={icon5} alt="skill-icon" />
                <p>Tailwind</p>
              </li>
              <li>
                <img className="skill-icon" src={icon6} alt="skill-icon" />
                <p>Node JS</p>
              </li>
              <li>
                <img className="skill-icon" src={icon8} alt="skill-icon" />
                <p>PosgreSQL</p>
              </li>
              <li>
                <img className="skill-icon" src={icon9} alt="skill-icon" />
                <p>VSCode</p>
              </li>
              <li>
                <img className="skill-icon" src={icon12} alt="skill-icon" />
                <p>Netlify</p>
              </li>
              <li>
                <img className="skill-icon" src={icon13} alt="skill-icon" />
                <p>Webpack</p>
              </li>
              <li>
                <img className="skill-icon" src={icon14} alt="skill-icon" />
                <p>Github</p>
              </li>
              <li>
                <img className="skill-icon" src={icon7} alt="skill-icon" />
                <p>Photoshop</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  };
  
export default Skills;
  