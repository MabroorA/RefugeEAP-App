import React from "react";
import "./Hero.css";

const Hero = ({props, img}) => {
  const {title, subtitle, btn, url, style, formUrl, moreUrl} = props;
  return (
    <section className={style}>
      <div className="hero-center">
        <div className="hero-info">
          <h1>{title}</h1>
          <h3>{subtitle}</h3>
          <div className="hero-btns">
            {formUrl && (
              <a href={formUrl} className="btn-eap hero-btn">
                Form
              </a>
            )}
            {moreUrl && (
              <a href={moreUrl} className="btn-eap hero-btn">
                {btn}
              </a>
            )}
          </div>
        </div>
        <div className="hero-img">
          <img src={img} className="hero-photo" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
