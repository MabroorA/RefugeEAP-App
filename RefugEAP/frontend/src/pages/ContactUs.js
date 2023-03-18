import React from "react";
import "./css/ContactUs.css";
import Hero from "../components/Hero";

const ContactUs = () => {
  return (
    <>
      <Hero props="" img="" />
      <div className="App">
        <div className="top-half">
          <div className="header-text-container"></div>
        </div>
        <h1> refugeap@le.ac.uk</h1>
        <h1>
          {" "}
          Thoughts on how we can improve? Suggestions on what you would like to
          see added? Please feel free to fill out the form listed below and
          share your thoughts with us.{" "}
        </h1>

        <p>
          Fill out our{" "}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdxsrn6Co_pZJqCP7vAHLRNf3DFtg987wbEmjMLrTwMoGKYoA/viewform?usp=sf_link"
            target="_blank"
            className="button-link"
          >
            Contact and Suggestions form
          </a>{" "}
          to get in touch!
        </p>

        <img
          src="https://media.istockphoto.com/id/839295596/photo/six-pre-teen-friends-piggybacking-in-a-park-close-up-portrait.jpg?b=1&s=170667a&w=0&k=20&c=y99BlOqoTFQoRo3Zg47MP7F-LV5TG0Swsf6DuJfK_Bo="
          alt="My Image"
          className="contact-image"
        />

        <div className="bottom-half"></div>
      </div>
    </>
  );
};

export default ContactUs;
