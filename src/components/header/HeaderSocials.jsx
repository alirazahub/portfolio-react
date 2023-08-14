import React from 'react';
import { BsLinkedin,BsTwitter,BsInstagram } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.instagram.com/00_aliraza/" target="_blank" rel="noreferrer" ><BsInstagram /></a>
      <a href="https://www.linkedin.com/in/alirazahub/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/alirazahub" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://twitter.com/00_AliRazaX" target="_blank" rel="noreferrer" ><BsTwitter /></a>
    </div>
  )
}

export default HeaderSocials