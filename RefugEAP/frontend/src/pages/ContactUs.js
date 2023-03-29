import React from "react";
import "./css/ContactUs.css";
import HeroContactus from "../components/HeroContactus";
import { Link } from 'react-router-dom';
import Hero from "../components/Hero";
import stock_refugee_image_5 from "../images/stock_refugee_image_5.png"


const data = {
  title: "Contact Us",
  subtitle:
    "Thoughts on how we can improve? Suggestions on what you would like to see added? Please feel free to fill out the form listed below and share your thoughts with us.",
  btn: "Contact us",
  style: "contact-hero",
  url: "https://docs.google.com/forms/d/e/1FAIpQLSdxsrn6Co_pZJqCP7vAHLRNf3DFtg987wbEmjMLrTwMoGKYoA/viewform?usp=sf_link",
};

const ContactUs = () => {
  return (
    <>
      <Hero props={data} img={stock_refugee_image_5} />
      <div className="App"></div>
    </>
  );
};

export default ContactUs;
