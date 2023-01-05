import './Project.css';
import { useState } from 'react';
import { FaWindowClose } from "react-icons/fa";

const Project = (props) => {
  const [isModalActive, setModalActive] = useState(false);
  const [isReadMoreActive, setReadMoreActive] = useState(false);
  const skills = props.project.skills

  const toggleClass = () => {
    setModalActive(!isModalActive);
  };

  const toggleReadMore = () => {
    setReadMoreActive(!isReadMoreActive);
  }

    return (
      <>
        <div className={isModalActive ? 'modal on' : 'modal'}>
          <div className="project-modal">
            <h2 className="project-modal-mobile-title">{props.project.title}</h2>
            <FaWindowClose className="close-button" onClick={toggleClass} />
            <img className="project-modal-image" src={props.project.image} alt="modal" />
            <div className="project-modal-information">
              <div className="project-modal-texts">
                <h2 className="project-modal-desktop-title">{props.project.title}</h2>
                <h3>{props.project.subtitle}</h3>
                <p className={isReadMoreActive ? 'modal-description on' : 'modal-description'}>{props.project.description}
                <ul className="project-modal-skills">
                {skills.map(element =>
                  <li key={props.project.id}>{element}</li>
                )}
              </ul>
              </p>
                <button className="read-more" onClick={toggleReadMore}>{isReadMoreActive ? "Read Less" : "Read More"}</button>
              </div>
              <div className="project-modal-buttons">
                <a href={props.project.live} className="project-modal-button" target="_blank" rel="noreferrer">Live</a>
                <a href={props.project.github} className="project-modal-button" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </div>

        <div onClick={toggleClass} className="project-container" data-aos="fade-up">
          <h2 className="project-title">{props.project.title}</h2>
          <div className="project-information">
            <ul className="project-skills">
              {skills.map(element => 
                <li key={props.project.id}>{element}</li>
              )}
            </ul>
          </div>
          <div className="project-image-div">
            <img className="project-image" src={props.project.image} alt="project" />
            <div className="project-image-overlay" />
          </div>
          <div className="see-project">
            <p>Open Project</p>
          </div>
        </div>
        </>
    );
  };
  
export default Project;
  