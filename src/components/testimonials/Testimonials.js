import { FaLocationArrow } from "react-icons/fa";
import './Testimonials.css';

const Testimonials = () => {
    return (
      <section className="testimonials-section-container">
        <div className="testimonials-information">
          <div className="testimonials-title">
            <FaLocationArrow className="arrow-icon" />
            <span>Testimonials</span>
            <p className="microverse-date">Get to know me better!</p>
          </div>
        </div>
      </section>
    );
  };
  
export default Testimonials;
  