import React from "react";
import "./css/ContactUs.css";
import Hero from "../components/Hero";

const data = {
  title: "Contact Us",
  subtitle:
    "Thoughts on how we can improve? Suggestions on what you would like to see added? Please feel free to fill out the form listed below and share your thoughts with us.",
  btn: "More",
  url: "/",
  style: "contact-hero",
};

const ContactUs = () => {
  return (
    <>
      <Hero props={data} img="" />
      <div className="App"></div>
    </>
  );
};

export default ContactUs;
