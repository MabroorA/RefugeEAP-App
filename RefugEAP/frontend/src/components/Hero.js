import React from "react";
import "./Hero.css";


const Hero = ({props, img}) => {
  const {title, subtitle, btn, url, style} = props
  return (
    <section className={style}>
      <div className="hero-center">
        <div className="hero-info">
          <h1>{title}</h1>
          <h3>
            {subtitle}
          </h3>
          <a href={url} className="btn-eap hero-btn">
            {btn}
          </a>
        </div>
        <div className="hero-img">
          <img src={img} className="hero-photo" alt=""></img>
        </div>
      </div>
    </section>
  );
};

export default Hero;
