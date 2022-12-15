import './Project.css';
import { FaPlay } from "react-icons/fa";
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
          <img className="project-image" src={props.image} alt="project" />
          <FaPlay className="project-icon" />
        </div>
        </>
    );
  };
  
export default Project;
  