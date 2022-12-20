import { FaAngleRight, FaLocationArrow } from 'react-icons/fa';
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
          <ul>
            <li>
              <FaAngleRight className="small-arrow-icon" />
              <span>JavaScript</span>
            </li>
            <li>
              <FaAngleRight className="small-arrow-icon" />
              <span>VSCode</span>
            </li>
            <li>
              <FaAngleRight className="small-arrow-icon" />
              <span>RSpec</span>
            </li>
            <li>
              <FaAngleRight className="small-arrow-icon" />
              <span>React/Redux</span>
            </li>
            <li>
              <FaAngleRight className="small-arrow-icon" />
              <span>Node.js</span>
            </li>
            <li>
              <FaAngleRight className="small-arrow-icon" />
              <span>Photoshop</span>
            </li>
            <li>
              <FaAngleRight className="small-arrow-icon" />
              <span>Ruby/Rails</span>
            </li>
            <li>
              <FaAngleRight className="small-arrow-icon" />
              <span>PostgreSQL</span>
            </li>
            <li>
              <FaAngleRight className="small-arrow-icon" />
              <span>Capybara</span>
            </li>
          </ul>
        </div>
      </section>
    );
  };
  
export default Skills;
  