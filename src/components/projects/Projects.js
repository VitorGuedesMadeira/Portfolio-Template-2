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
  const everyProject = [
    {
      title: 'Bookstore',
      description: 'test',
      image: image1,
    },
    {
      title: 'Marvel Characters',
      description: 'test',
      image: image2,
    },
    {
      title: 'Space Traveler',
      description: 'test',
      image: image3,
    },
    {
      title: 'Awesome Books',
      description: 'test',
      image: image4,
    },
    {
      title: 'Pokedéx',
      description: 'test',
      image: image5,
    },
    {
      title: 'Leaderboard',
      description: 'test',
      image: image6,
    },
  ]

    return (
      <section id="projects" className="projects-section-container">
        <div className="projects-flex-column">
          <div className="about-title">
            <FaLocationArrow className="arrow-icon" />
            <span>Projects</span>
          </div>
          <div className="main-projects">
            {everyProject.map((project) => 
              <Project project={project} />
            )}
          </div>
        </div>
      </section>
    );
  };
  
export default Projects;
  