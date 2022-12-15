import './Headline.css';
import darkphone from '../../assets/images/darkphone.png'

const Headline = () => {
    return (
      <section className="headline-section-container">
        <div className="headline-information">
          <p>Hi, my name is</p>
          <p>Vitor G. Madeira</p>
          <p>I build things for the web</p>
          <p>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m looking for a full-stack position. Feel free to check my <a href="www.google.com">Resume</a></p>
          <button>Contact me</button>
        </div>
        <img className="dark-phone" src={darkphone} alt="iPhone" />
      </section>
    );
  };
  
export default Headline;
  