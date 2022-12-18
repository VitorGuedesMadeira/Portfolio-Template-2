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
      id: 1,
      title: 'Bookstore',
      subtitle: 'Mobile App - 2022',
      description: 'Thiss is my personal portfolio, where you can find all of my main projects and look for contact adressess. Built with plain HTML, CSS and JavaScript. This is my personal portfolio, where you can find all of my main projects and look for contact adressess. Built with plain HTML, CSS and JavaScript. This is my personal portfolio, where you can find all of my main projects and look for contact adressess. Built with plain HTML, CSS and JavaScript. This is my personal portfolio, where you can find all of my main projects and look for contact adressess. Built with plain HTML, CSS and JavaScript. This is my personal portfolio, where you can find all of my main projects and look for contact adressess. Built with plain HTML, CSS and JavaScript. This is my personal portfolio, where you can find all of my main projects and look for contact adressess. Built with plain HTML, CSS and JavaScript. This is my personal portfolio, where you can find all of my main projects and look for contact adressess. Built with plain HTML, CSS and JavaScript. This is my personal portfolio, where you can find all of my main projects and look for contact adressess. Built with plain HTML, CSS and JavaScript.',
      image: image1,
      live: 'www.google.com',
      github: 'www.google.com',
      skills: ['HTML', 'CSS', 'React', 'Redux'],
    },
    {
      id: 2,
      title: 'Marvel Characters',
      subtitle: 'Mobile App - 2022',
      description: 'This is my personal portfolio, where you can find all of my main projects and look for contact adressess. Built with plain HTML, CSS and JavaScript. This is my personal portfolio, where you can find all of my main projects and look for contact adressess. Built with plain HTML, CSS and JavaScript. This is my personal portfolio, where you can find all of my main projects and look for contact adressess. Built with plain HTML, CSS and JavaScript. This is my personal portfolio, where you can find all of my main projects and look for contact adressess. Built with plain HTML, CSS and JavaScript. This is my personal portfolio, where you can find all of my main projects and look for contact adressess. Built with plain HTML, CSS and JavaScript. This is my personal portfolio, where you can find all of my main projects and look for contact adressess. Built with plain HTML, CSS and JavaScript. This is my personal portfolio, where you can find all of my main projects and look for contact adressess. Built with plain HTML, CSS and JavaScript. This is my personal portfolio, where you can find all of my main projects and look for contact adressess. Built with plain HTML, CSS and JavaScript.',
      image: image2,
      live: 'www.google.com',
      github: 'www.google.com',
      skills: ['HTML', 'CSS', 'React', 'Redux'],
    },
    {
      id: 3,
      title: 'Space Traveler',
      subtitle: 'Mobile App - 2022',
      description: 'This is my personal portfolio, where you can find all of my main projects and look for contact adressess. Built with plain HTML, CSS and JavaScript. This is my personal portfolio, where you can find all of my main projects and look for contact adressess. Built with plain HTML, CSS and JavaScript',
      image: image3,
      live: 'www.google.com',
      github: 'www.google.com',
      skills: ['HTML', 'CSS', 'React', 'Redux'],
    },
    {
      id: 4,
      title: 'Awesome Books',
      subtitle: 'Mobile App - 2022',
      description: 'This is my personal portfolio, where you can find all of my main projects and look for contact adressess. Built with plain HTML, CSS and JavaScript. This is my personal portfolio, where you can find all of my main projects and look for contact adressess. Built with plain HTML, CSS and JavaScript',
      image: image4,
      live: 'www.google.com',
      github: 'www.google.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'WebPack'],
    },
    {
      id: 5,
      title: 'Pokedéx',
      subtitle: 'Mobile App - 2022',
      description: 'This is my personal portfolio, where you can find all of my main projects and look for contact adressess. Built with plain HTML, CSS and JavaScript.This is my personal portfolio, where you can find all of my main projects and look for contact adressess. Built with plain HTML, CSS and JavaScript',
      image: image5,
      live: 'www.google.com',
      github: 'www.google.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'API'],
    },
    {
      id: 6,
      title: 'Leaderboard',
      subtitle: 'Mobile App - 2022',
      description: 'This is my personal portfolio, where you can find all of my main projects and look for contact adressess. Built with plain HTML, CSS and JavaScript. This is my personal portfolio, where you can find all of my main projects and look for contact adressess. Built with plain HTML, CSS and JavaScript',
      image: image6,
      live: 'www.google.com',
      github: 'www.google.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
  ]

    return (
      <section id="projects" className="projects-section-container">
        <div className="projects-flex-column">
          <div className="about-title">
            <FaLocationArrow className="arrow-icon" />
            <span>Projects</span>
            <p className="microverse-date">GitHub - Pinned Projects</p>
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
  