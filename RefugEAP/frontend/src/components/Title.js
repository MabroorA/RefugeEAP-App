import React from "react";
import "./RefugEAP.css"

const Title = ({ title, subtitle }) => {
  return (
    <div class="section-title">
      <h2>
        {title} <span>{subtitle}</span>
      </h2>
    </div>
  );
};

export default Title;
