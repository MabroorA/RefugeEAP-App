import React from "react";
import "./css/ContactUs.css";
import HeroContactus from "../components/HeroContactus";
import { Link } from 'react-router-dom';


const data = {
  title: "Contact Us",
  subtitle:
    "Thoughts on how we can improve? Suggestions on what you would like to see added? Please feel free to fill out the form listed below and share your thoughts with us.",
  btn: "More",
  style: "contact-hero",
  formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdxsrn6Co_pZJqCP7vAHLRNf3DFtg987wbEmjMLrTwMoGKYoA/viewform?usp=sf_link",
  moreUrl: "/another-page",
};

const ContactUs = () => {
  return (
    <>
      <HeroContactus props={data} img="" />
      <div className="App"></div>
    </>
  );
};

export default ContactUs;
