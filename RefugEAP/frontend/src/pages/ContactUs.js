import React from 'react';
import './css/ContactUs.css';




const ContactUs = () => {
  return (
    <div className="App">
      <div className="top-half"></div>
      <h1 className="header"> Contact us at : </h1>
      <h1> refugeap@le.ac.uk</h1>
      <h1> Thoughts on how we can improve? Leave your email and thoughts below and a member of our team will be in touch with you shortly.</h1>
      <img src="https://media.istockphoto.com/id/839295596/photo/six-pre-teen-friends-piggybacking-in-a-park-close-up-portrait.jpg?b=1&s=170667a&w=0&k=20&c=y99BlOqoTFQoRo3Zg47MP7F-LV5TG0Swsf6DuJfK_Bo=" alt="My Image" className="contact-image" />
      <img src="https://www.uel.ac.uk/sites/default/files/styles/standard_1280_720/public/refugee-children-1200-x-827.jpg?itok=JC-gcmxl" alt="picture" className="second-image" />


      <form action="/submit-form" method="POST">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>

        <button type="submit">Submit</button>
      </form>

      <div className="bottom-half"></div>
    </div>
  );
};

export default ContactUs;