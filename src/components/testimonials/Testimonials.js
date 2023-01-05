import { FaLocationArrow, FaQuoteLeft, FaQuoteRight, FaLinkedin } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel, Autoplay } from "swiper";
import nyamePicture from "../../assets/testimonials/nyameTestimonial.jpg"
import karlaPicture from "../../assets/testimonials/karlaTestimonial.jpg"
import diegoPicture from "../../assets/testimonials/diegoTestimonial.jpg"
import raulPicture from "../../assets/testimonials/raulTestimonial.jpg"
import hansPicture from "../../assets/testimonials/hansTestimonial.jpg"
import vanessaPicture from "../../assets/testimonials/vanessaTestimonial.jpg"
import williamsPicture from "../../assets/testimonials/williamsTestimonial.jpg"
import natashaPicture from "../../assets/testimonials/natashaTestimonial.jpg"
import aronPicture from "../../assets/testimonials/aronTestimonial.jpg"
import shahiraPicture from "../../assets/testimonials/shahiraTestimonial.jpg"
import './Testimonials.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
  const linkedinTestimonials = [
    {
      id: 1,
      name: "Diego Yon",
      role: "Software Developer",
      testimonial: "I had the pleasure to work with Vitor on a couple of projects and came to know him as a very hardworking person. His knowledge and skill sets were very helpful to finish the projects on time and I’ll be happy to work with him again.",
      image: diegoPicture
    },
    {
      id: 1,
      name: "Mumenya Nyamu",
      role: "Software Engineer",
      testimonial: "Vitor is a great developer with impeccable commitment to projects he works on. He has an amazing work ethic, possesses excellent interpersonal skills which makes him very pleasant to work. In the projects I have collaborated in with him, he was a great team player, provided great reviews as well as serving as an inspiration for me to be better. Getting him in your team will guarantee you excellence. I hope to collaborate with him on future projects.",
      image: nyamePicture
    },
    {
      id: 2,
      name: "Karla Delgado",
      role: "Full Stack Developer",
      testimonial: "I have had a genuinely wonderful experience working with Vitor. He's self-disciplined, passionate about his work, creative, and diligent. He's also sympathetic and thrives at effectively troubleshooting with others, which makes him the perfect fit for collaborating in any environment. From my experience, I'm proud to say that Vitor brings outstanding leadership capabilities to any team. In a competitive and transitional industry like this one, any company will benefit from having Vitor as he will surpass expected outcomes and deliver high-quality products on time.",
      image: karlaPicture
    },
    {
      id: 3,
      name: "Aron Abraham",
      role: "Full Stack Developer",
      testimonial: "Vitor is a fantastic developer who can solve huge things with very clean, short, and efficient code. I had the opportunity to work remotely with this talented software developer, and during that time I learned a lot from him especially when it comes to the front-end. He has the ability to create any assets he wants in a minute using tools like photoshop. He shows great commitment and responsibility, also he is fun and supportive. I haven’t enough words to describe how talented he is. For sure he will be a great addition to your company!",
      image: aronPicture
    },
    {
      id: 4,
      name: "Williams Colmenares",
      role: "Software Developer",
      testimonial: "Vitor is sort of guy you're always happy to work with. I met him while the React Redux module and he was always one step forward, always studying extra hours and worried about the understanding of the topics, and then willing to help his peers when struggled. His dedication and determination are necessary to remark, as well as his clean codes an amazing designs.",
      image: williamsPicture
    },
    {
      id: 5,
      name: "Natasha Chirombe",
      role: "Full Stack Developer",
      testimonial: "Throughout my career, I have collaborated with a variety of experts, but Vitor has a distinctive sense for styling. He excels at finding solutions to issues, particularly when it comes to front-end development. During the early phases of my learning, he was a huge help. He is quite competent, and if you need a work done, you can count on him to complete it.",
      image: natashaPicture
    },
    {
      id: 6,
      name: "Vanessa Bonito",
      role: "Software Developer",
      testimonial: "Vitor is an amazing person to work with. He is creative, trustworthy, and very professional. Their projects stand out for being not only functional but also having incredible and fully responsive designs.",
      image: vanessaPicture
    },
    {
      id: 7,
      name: "Raul Ospina",
      role: "Software Engineer",
      testimonial: "The hardest worker, most intense and creative programmer you can expect. On top of that it's a pleasure to work with him for long hours, always friendly, great conversations, sharp sense of humor and best collaborative attitude. If I could choose someone to be my co-founder, coding partner, or just to chat about anything, I know Vitor is there for that.",
      image: raulPicture
    },
    {
      id: 8,
      name: "Erick Hans",
      role: "Front-End Developer",
      testimonial: "Vitor is an amazing guy to work with! He is very positive and assertive in what he does. I always had a great experience when I had to work with him. When he was around you knew you could trust that things were going to get done. AMAZING GUY! Would love to work with him in the future no doubt about it!",
      image: hansPicture
    },
    {
      id: 9,
      name: "Shahira Sadat",
      role: "Full Stack Developer",
      testimonial: "Its a pleasure to know Vitor. Since we were in the same teams for several times, I found Vitor a logical and hardworking person with high technical skills. It will be a pleasure to work with him again.",
      image: shahiraPicture
    }
  ]

    return (
      <section id="testimonials" className="testimonials-section-container">
        <div className="testimonials-information" data-aos="fade-up">
          <div className="testimonials-title">
            <FaLocationArrow className="arrow-icon" />
            <span>Testimonials</span>
            <p className="microverse-date">What people say about me</p>
          </div>
        </div>
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            mousewheel={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Mousewheel, Autoplay]}
            className="mySwiper"
            data-aos="fade-up"
          >
            {linkedinTestimonials.map((user) => 
              <SwiperSlide key={user.id}>
                <div className="relative-div">
                  <img src={user.image} alt="user" />
                  <FaLinkedin className="linkedin-testimonial" />
                </div>
                <div className="testimonial-info">
                  <p className="user-name">{user.name}</p>
                  <p className="user-role">{user.role}</p>
                  <div className="testimonial-flex">
                    <FaQuoteLeft className="quotes" />
                    <p className="user-testimonial">{user.testimonial}</p>
                    <FaQuoteRight className="quotes" />
                  </div>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
      </section>
    );
  };
  
export default Testimonials;
  