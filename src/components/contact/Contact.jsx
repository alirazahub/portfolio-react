import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail,MdAddIcCall } from 'react-icons/md';
import './contact.css';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_wo7el6e',
        'template_467gyk9',
        formRef.current,
        'Vc2QSs_SeTzjsCaNF'
      )
      .then(
        (result) => {
          alert("Your Message Sent to the Admin Successfully!");
        },
        (error) => {
          alert("Your Message Sent to the Admin Successfully!");
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>
        I do receive your messages and will respond asap if the valid email is
        provided :)
      </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>aliraza.ar7785@gmail.com</h5>
            <a href="mailto:aliraza.ar7785@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <MdAddIcCall className="contact__option-icon" />
            <h4>Phone Number</h4>
            <h5>+923025414924</h5>
            <a href="tel:+923025414924">Make a Call</a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit} netlify>
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
          />
          <input
            type="text"
            placeholder="Your Email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
