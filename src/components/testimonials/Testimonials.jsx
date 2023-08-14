import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com',
      name: 'Hassan Raza',
      role: 'Full-Stack Web Developer. JavaScript | Node | React | Redux. Improving open-source projects, one commit at a time.',
      test: 'As a developer and a problem solver, I think AliRaza is a great collaborative partner to have. I met Ali Raza in some basic javascript & react projects and since then he has drastically progressed in his understanding of the development process. He always has a professional environment and has good audio and video quality which makes it easier to communicate with his.',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/',
      name: 'Zain ul Abedin',
      role: 'Full-stack developer | Technical Support Engineer at Microverse',
      test: "It was a pleasure collaborating with Ali on different projects. One of the things that I think is special about his is that He never settles, even after completing the projects He finds othis resources and strengthens his knowledge. Collaborating with his is easy and comfortable, it's like working with someone you've known for a long period of time.",
    },
    {
      id: 3,
      link: 'https://www.linkedin.com',
      name: 'Akbar (Aku) Khan',
      role: 'Full Stack Developer| Ruby on Rails | MongoDB | JavaScript | React | Redux | Html&Css | Python.',
      test: 'I worked with Ali Raza in the same team and his communication skills are very strong. his programming skill is one of the bests, given the time frame in the field. He is a good team player.  He will probably fit in most of the companies not only because he\'s a good team worker, but also because He has very good skills and I know He has much more potential to be shown.',
    },
    {
      id: 4,
      link: 'https://www.linkedin.com',
      name: 'Isai Céspedes',
      role: 'Full-Stack Web Developer. JavaScript | Rails | React | Redux.',
      test: "I mentored Ali Raza some months ago, and I can say that He is one of those people that you love to work with. He was always interested in what I was trying to teach his, paying attention and always asking questions if something was not clear. When it comes to professional skills, He is really committed to work, always doing his best and going beyond the requirements of the project He's building.",
    },
    {
      id: 5,
      link: 'https://www.linkedin.com',
      name: 'Farhan Mehmood',
      role: 'Software Developer',
      test: "Throughout all our collaborations, Ali Raza has always conducted hisself politely and kindly. He comes across as someone that's always willing to help and puts the team ahead of hisself. But beneath this, I see a strength and determination to distinguish hisself. He's not only someone I highly recommend but is also someone I greatly respect.",
    },
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials