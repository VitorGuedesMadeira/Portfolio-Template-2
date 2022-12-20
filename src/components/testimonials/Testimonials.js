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
      testimonial: "Vitor is sort of guy you're always happy to work with. I met him while the React Redux module and he was always one step forward, always studying extra hours and worried about the understanding of the topics, and then willing to help his peers when struggled. His dedication and determination are necessary to remark, as well as his clean codes an amazing designs.",
      image: "https://media.licdn.com/dms/image/D4E35AQEpsUJm-PkjFQ/profile-framedphoto-shrink_800_800/0/1660857904356?e=1672113600&v=beta&t=a3aqL-DVfcSYts2XNYVBELpdGZg9XDL24EhLON7S4-g"
    },
    {
      id: 1,
      name: "Mumenya Nyamu",
      role: "Software Engineer",
      testimonial: "Vitor is sort of guy you're always happy to work with. I met him while the React Redux module and he was always one step forward, always studying extra hours and worried about the understanding of the topics, and then willing to help his peers when struggled. His dedication and determination are necessary to remark, as well as his clean codes an amazing designs.",
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
      testimonial: "Vitor is sort of guy you're always happy to work with. I met him while the React Redux module and he was always one step forward, always studying extra hours and worried about the understanding of the topics, and then willing to help his peers when struggled. His dedication and determination are necessary to remark, as well as his clean codes an amazing designs.",
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
      testimonial: "Vitor is sort of guy you're always happy to work with. I met him while the React Redux module and he was always one step forward, always studying extra hours and worried about the understanding of the topics, and then willing to help his peers when struggled. His dedication and determination are necessary to remark, as well as his clean codes an amazing designs.",
      image: "https://media.licdn.com/dms/image/D4D35AQHZWylR7nj4FA/profile-framedphoto-shrink_800_800/0/1662411657609?e=1672113600&v=beta&t=hTnVP8WqSKhIUou8QQshnbn7W70uvJ_J8lBhBas_Cqk"
    },
    {
      id: 6,
      name: "Vanessa Bonito",
      role: "Software Developer",
      testimonial: "Vitor is sort of guy you're always happy to work with. I met him while the React Redux module and he was always one step forward, always studying extra hours and worried about the understanding of the topics, and then willing to help his peers when struggled. His dedication and determination are necessary to remark, as well as his clean codes an amazing designs.",
      image: "https://media.licdn.com/dms/image/D4E35AQFG8zHwkSj1lg/profile-framedphoto-shrink_800_800/0/1662138575110?e=1672113600&v=beta&t=4eFWKCi2zx1Ss5iKN5AgyRZdHvJJVPOMf89ul9fVfTM"
    }
  ]

    return (
      <section className="testimonials-section-container">
        <div className="testimonials-information">
          <div className="testimonials-title">
            <FaLocationArrow className="arrow-icon" />
            <span>Testimonials</span>
            <p className="microverse-date">Get to know me better!</p>
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
  