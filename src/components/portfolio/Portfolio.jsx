import React from 'react';
import IMG0 from '../../assets/IMG0.jpg';
import IMG1 from '../../assets/IMG1.jpg';
import IMG2 from '../../assets/IMG0.jpg';
import IMG3 from '../../assets/IMG3.jpg';
import IMG4 from '../../assets/IMG4.jpg';
import IMG5 from '../../assets/IMG5.jpg';
import IMG6 from '../../assets/IMG6.jpg';
import number from '../../assets/number.jpg';
import travel from '../../assets/travel.jpg';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 0,
      title: 'cleanfolio-minimal',
      img: IMG0,
      description:
        'Personal portfolio website with minimalistic design and minimalistic code.',
      technologies: 'HTML | Javascript | CSS | ',
      link: 'https://alirazahub.github.io/cleanfolio-minimal/',
      github: 'https://github.com/alirazahub/cleanfolio-minimal',
    },
    {
      id: 1,
      title: 'InoteBook',
      img: IMG1,
      description:
        'InoteBook webapp that allows users to store their Notes',
      technologies: 'React | Node | MongoDB | Express',
      link: 'https://alirazahub-inotebook-client.netlify.app',
      github: 'https://github.com/alirazahub/iNoteBook-frontend',
    },
    {
      id: 2,
      title: 'BlogWebsite',
      img: IMG2,
      description:
        'Blog-MERN is the blog website that allows users to create, edit, and delete posts',
      technologies: 'React | Node | MongoDB | Express',
      link: 'https://github.com/alirazahub/MERN-Blog-client',
      github: 'https://github.com/alirazahub/MERN-Blog-client',
    },
    {
      id: 3,
      title: 'Calculator',
      img: IMG4,
      description: 'Calculator webapp that allows users to perform basic math operations',
      technologies: 'HTML | CSS| JavaScript',
      link: 'https://alirazahub.github.io/Calculator/',
      github: 'https://github.com/alirazahub/Calculator',
    },
    {
      id: 4,
      title: 'alleey',
      img: IMG3,
      description:
        'Fully responsive interactive website for Company',
      technologies: 'HTML | CSS | JavaScript',
      link: 'https://alirazahub.github.io/alleey/',
      github: 'https://github.com/alirazahub/alleey',
    },
    {
      id: 5,
      title: 'text-utilities',
      img: IMG5,
      description:
        'Fully responsive interactive website having Different text utilities',
      technologies: 'Bootstrap | REACT | HTML | JavaScript | CSS',
      link: 'https://alirazahub.github.io/text-utilities/',
      github: 'https://github.com/alirazahub/text-utilities',
    },
    {
      id: 6,
      title: 'Number Guessing Game',
      img: number,
      description:
        'Number Guessing Game webapp that allows users to guess a number between 1 and 100',
      technologies: 'HTML | CSS | JavaScript',
      link: 'https://alirazahub.github.io/guessing_game/',
      github: 'https://github.com/alirazahub/guessing_game',
    },
    {
      id: 7,
      title: 'Travel-Planner',
      img: travel,
      description:
        'Travel-Planner webapp that allows users to plan their travel',
      technologies: 'HTML | CSS | JavaScript',
      link: 'https://alirazahub.github.io/travels/',
      github: 'https://github.com/alirazahub/travels',
    },
    {
      id: 8,
      title: 'Learning Management System',
      img: IMG6,
      description:
        'Learning Management System webapp that allows users to manage their learning',
      technologies: 'HTML | CSS | JavaScript | Bootstrap',
      link: 'https://alirazahub.github.io/LMS/',
      github: 'https://github.com/alirazahub/LMS',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
