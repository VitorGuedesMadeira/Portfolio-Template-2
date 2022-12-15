import './Projects.css';
import { FaLocationArrow } from "react-icons/fa";
import Project from './project/Project';
import image1 from '../../assets/projects/project1.png'
import image2 from '../../assets/projects/project2.png'
import image3 from '../../assets/projects/project3.png'
import image4 from '../../assets/projects/project4.png'
import image5 from '../../assets/projects/project5.png'
import image6 from '../../assets/projects/project6.png'

const Projects = () => {
    return (
      <section className="projects-section-container">
        <div className="about-title">
          <FaLocationArrow className="arrow-icon" />
          <span>Projects</span>
        </div>
        <div className="main-projects">
          <Project image={image1} />
          <Project image={image2} />
          <Project image={image3} />
          <Project image={image4} />
          <Project image={image5} />
          <Project image={image6} />
        </div>
      </section>
    );
  };
  
export default Projects;
  