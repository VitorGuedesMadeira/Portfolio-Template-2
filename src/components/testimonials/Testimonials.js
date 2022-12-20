import { FaLocationArrow } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel, Autoplay } from "swiper";
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
      image: "https://media.licdn.com/dms/image/D4E35AQEpsUJm-PkjFQ/profile-framedphoto-shrink_800_800/0/1660857904356?e=1672113600&v=beta&t=a3aqL-DVfcSYts2XNYVBELpdGZg9XDL24EhLON7S4-g"
    },
    {
      id: 1,
      name: "Mumenya Nyamu",
      role: "Software Engineer",
      testimonial: "Vitor is a great developer with impeccable commitment to projects he works on. He has an amazing work ethic, possesses excellent interpersonal skills which makes him very pleasant to work. In the projects I have collaborated in with him, he was a great team player, provided great reviews as well as serving as an inspiration for me to be better. Getting him in your team will guarantee you excellence. I hope to collaborate with him on future projects.",
      image: "https://media.licdn.com/dms/image/D4D35AQGoVg1lccOmzA/profile-framedphoto-shrink_800_800/0/1666098303104?e=1672113600&v=beta&t=bZObb5SU_c9eFVjCHldAgF-kNZ7b3jaO_bgCy49tG6w"
    },
    {
      id: 2,
      name: "Karla Delgado",
      role: "Full Stack Developer",
      testimonial: "Vitor is sort of guy you're always happy to work with. I met him while the React Redux module and he was always one step forward, always studying extra hours and worried about the understanding of the topics, and then willing to help his peers when struggled. His dedication and determination are necessary to remark, as well as his clean codes an amazing designs.",
      image: "https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk"
    },
    {
      id: 3,
      name: "Aron Abraham",
      role: "Full Stack Developer",
      testimonial: "Vitor is a fantastic developer who can solve huge things with very clean, short, and efficient code. I had the opportunity to work remotely with this talented software developer, and during that time I learned a lot from him especially when it comes to the front-end. He has the ability to create any assets he wants in a minute using tools like photoshop. He shows great commitment and responsibility, also he is fun and supportive. I haven’t enough words to describe how talented he is. For sure he will be a great addition to your company!",
      image: "https://media.licdn.com/dms/image/D4D35AQFnaM_rWxImUA/profile-framedphoto-shrink_800_800/0/1662411726782?e=1672113600&v=beta&t=cFIsno_LoV6h1oDAM6gacaEQ8TBPQz87Wj-RFzHqf1k"
    },
    {
      id: 4,
      name: "Williams Colmenares",
      role: "Software Developer",
      testimonial: "Vitor is sort of guy you're always happy to work with. I met him while the React Redux module and he was always one step forward, always studying extra hours and worried about the understanding of the topics, and then willing to help his peers when struggled. His dedication and determination are necessary to remark, as well as his clean codes an amazing designs.",
      image: "https://media.licdn.com/dms/image/D4E35AQGxaKZ835-3yQ/profile-framedphoto-shrink_800_800/0/1661023959542?e=1672113600&v=beta&t=rT0q0Eiff0Firjvs9NKQA9ovHQ0NB4QYs5PgZNGIc8M"
    },
    {
      id: 5,
      name: "Natasha Chirombe",
      role: "Full Stack Developer",
      testimonial: "Throughout my career, I have collaborated with a variety of experts, but Vitor has a distinctive sense for styling. He excels at finding solutions to issues, particularly when it comes to front-end development. During the early phases of my learning, he was a huge help. He is quite competent, and if you need a work done, you can count on him to complete it.",
      image: "https://media.licdn.com/dms/image/D4D35AQHZWylR7nj4FA/profile-framedphoto-shrink_800_800/0/1662411657609?e=1672113600&v=beta&t=hTnVP8WqSKhIUou8QQshnbn7W70uvJ_J8lBhBas_Cqk"
    },
    {
      id: 6,
      name: "Vanessa Bonito",
      role: "Software Developer",
      testimonial: "Vitor is an amazing person to work with. He is creative, trustworthy, and very professional. Their projects stand out for being not only functional but also having incredible and fully responsive designs.",
      image: "https://media.licdn.com/dms/image/D4E35AQFG8zHwkSj1lg/profile-framedphoto-shrink_800_800/0/1662138575110?e=1672113600&v=beta&t=4eFWKCi2zx1Ss5iKN5AgyRZdHvJJVPOMf89ul9fVfTM"
    }
  ]

    return (
      <section className="testimonials-section-container">
        <div className="testimonials-information">
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
          >
            {linkedinTestimonials.map((user) => 
              <SwiperSlide key={user.id}>
                <img src={user.image} alt="user" />
                <div className="testimonial-info">
                  <p className="user-name">{user.name}</p>
                  <p className="user-role">{user.role}</p>
                  <p className="user-testimonial">{user.testimonial}</p>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
      </section>
    );
  };
  
export default Testimonials;
  