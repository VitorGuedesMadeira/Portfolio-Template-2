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
      title: 'Exploration Getaways',
      subtitle: 'Trip Agency application - 2022',
      description: 'This was the final project for Microverse\'s second module (JavaScript). It is a Pokedéx based on PokeAPI, where the user can look for all the existent Pokémons and their respective stats. Built with plain HTML, CSS and JavaScript',
      image: image4,
      live: 'https://exploration-getaways.netlify.app/',
      github: 'https://github.com/VitorGuedesMadeira/Exploration-Getaways-FRONTEND',
      skills: ['Ruby', 'Rails', 'React', 'Redux'],
    },
    {
      id: 2,
      title: 'Marvel Characters',
      subtitle: 'Marvel Comics API - 2022',
      description: 'This was the final project for Microverse\'s third module (React/Redux). It is based on the official MARVEL API and it displays every existent character and it\'s respective comics. Built with React/Redux (Redux ToolKit)',
      image: image2,
      live: 'https://capstone-react-vitorguedesmadeira.netlify.app/',
      github: 'https://github.com/VitorGuedesMadeira/Capstone-React',
      skills: ['HTML', 'CSS', 'React', 'Redux'],
    },
    {
      id: 3,
      title: 'Pokedéx',
      subtitle: 'PokeAPI application - 2022',
      description: 'This was the final project for Microverse\'s second module (JavaScript). It is a Pokedéx based on PokeAPI, where the user can look for all the existent Pokémons and their respective stats. Built with plain HTML, CSS and JavaScript',
      image: image5,
      live: 'https://vitorguedesmadeira.github.io/Capstone-Javascript/dist/',
      github: 'https://github.com/VitorGuedesMadeira/Capstone-Javascript',
      skills: ['HTML', 'CSS', 'JavaScript', 'API'],
    },
    {
      id: 4,
      title: 'Bookstore',
      subtitle: 'Digital Library application - 2022',
      description: 'The Bookstore is a website that allows the user to display a list of books, and add or remove a book from an API. Built with React/Redux (Redux ToolKit).',
      image: image1,
      live: 'https://bookstore-vitorguedes.netlify.app/',
      github: 'https://github.com/VitorGuedesMadeira/Bookstore-React',
      skills: ['HTML', 'CSS', 'React', 'Redux'],
    },
    {
      id: 5,
      title: 'Space Traveler',
      subtitle: 'Rockets/Mission application - 2022',
      description: 'This project is a web application that consumes an SpaceX API. It provides commercial and scientific space travel services that allows users to book rockets and join selected space missions. Built with React/Redux (Redux ToolKit)',
      image: image3,
      live: 'https://spacetraveler-guedeskatana.netlify.app/',
      github: 'https://github.com/VitorGuedesMadeira/Space-Traveler',
      skills: ['HTML', 'CSS', 'React', 'Redux'],
    },
    {
      id: 6,
      title: 'Leaderboard',
      subtitle: 'Scores application - 2022',
      description: 'This is a project based on a game Leaderboard. You can interact with an API inserting your user name and score. Built with HTML, CSS, JavaScript and WEBPACK',
      image: image6,
      live: 'https://vitorguedesmadeira.github.io/Leaderboard/dist/',
      github: 'https://github.com/VitorGuedesMadeira/Leaderboard',
      skills: ['HTML', 'CSS', 'JavaScript', 'WebPack'],
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
  