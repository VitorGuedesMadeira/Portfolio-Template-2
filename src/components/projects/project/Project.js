import './Project.css';
import { useState } from 'react';
import { FaWindowClose } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

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
            <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="project-modal-image"
      >
        <SwiperSlide>
          <img src={props.project.image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
            <div className="project-modal-information">
              <h2 className="project-modal-desktop-title">{props.project.title}</h2>
              <h3>{props.project.subtitle}</h3>
              <p className={isReadMoreActive ? 'modal-description on' : 'modal-description'}>{props.project.description}</p>
              <button className="read-more" onClick={toggleReadMore}>Read more</button>
              <div className="project-modal-buttons">
                <a href={props.project.live} className="project-modal-button">Live</a>
                <a href={props.project.github} className="project-modal-button">GitHub</a>
              </div>
            </div>
          </div>
        </div>

        <div onClick={toggleClass} className="project-container">
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
  