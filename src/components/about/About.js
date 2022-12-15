import './About.css';
import { FaLocationArrow, FaAngleRight } from "react-icons/fa";

const About = () => {
    return (
      <section className="about-section-container">
        <div className="about-information">
          <div className="about-title">
              <FaLocationArrow className="arrow-icon" />
              <span>About</span>
          </div>
          <p>Hello! My name is Vitor and I enjoy creating things that live on the internet. My interest in web development started back in 2020 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
          <p>Fast-forward to today, and I’ve had the privilege of working at <a href="https://us.mullenlowe.com/" target="_blank" rel="noreferrer">an advertising agency</a>, <a href="https://starry.com/" target="_blank" rel="noreferrer">a start-up</a>, <a href="https://www.apple.com/" target="_blank" rel="noreferrer">a huge corporation</a>, and <a href="https://scout.camd.northeastern.edu/" target="_blank" rel="noreferrer">a student-led design studio</a>. My main focus these days is building accessible, inclusive products and digital experiences at <a href="https://upstatement.com/" target="_blank" rel="noreferrer">Upstatement</a> for a variety of clients.</p>
          <p>I also recently <a href="https://www.newline.co/courses/build-a-spotify-connected-app" target="_blank" rel="noreferrer">launched a course</a> that covers everything you need to build a web app with the Spotify API using Node &amp; React.</p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul>
            <li>
              <FaAngleRight className="small-arrow-icon" />
              <span>JavaScript</span>
            </li>
            <li>
              <FaAngleRight className="small-arrow-icon" />
              <span>React/Redux</span>
            </li>
            <li>
              <FaAngleRight className="small-arrow-icon" />
              <span>Ruby/Rails</span>
            </li>
            <li>
              <FaAngleRight className="small-arrow-icon" />
              <span>RSpec/Capybara</span>
            </li>
            <li>
              <FaAngleRight className="small-arrow-icon" />
              <span>Node.js</span>
            </li>
            <li>
              <FaAngleRight className="small-arrow-icon" />
              <span>PostgreSQL</span>
            </li>
          </ul>
        </div>
      </section>
    );
  };
  
export default About;
  