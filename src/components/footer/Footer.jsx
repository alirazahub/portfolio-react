import React from 'react';
import { BsLinkedin,BsTwitter,BsInstagram } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Ali Raza Afzal</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.instagram.com/00_aliraza/" target="_blank" rel="noreferrer" ><BsInstagram /></a>
      <a href="https://www.linkedin.com/in/alirazahub/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/alirazahub" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://twitter.com/00_AliRazaX" target="_blank" rel="noreferrer" ><BsTwitter /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; AliRaza. 2022. All rights reserved.</small>
      </div>
    </footer>
  )
  
}

export default Footer;