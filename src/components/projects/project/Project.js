import './Project.css';
import { useState } from 'react';

const Project = (props) => {
  const [isModalActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isModalActive);
  };

    return (
      <>
        <div onClick={toggleClass} className={isModalActive ? 'modal on' : 'modal'}>
          <div className="project-modal">
            Modal Project
          </div>
        </div>

        <div onClick={toggleClass} className="project-container">
          <h2 className="project-title">{props.project.title}</h2>
          <div className="project-information">
            <p>{props.project.description}</p>
            <ul className="project-skills">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <img className="project-image" src={props.project.image} alt="project" />
          <p className="see-project">Open Project</p>
        </div>
        </>
    );
  };
  
export default Project;
  