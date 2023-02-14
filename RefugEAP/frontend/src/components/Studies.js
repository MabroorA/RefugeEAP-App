import React from "react";
import Title from "./Title";
import { studies } from "../data";

const Studies = () => {
  return (
    <section className="section" id="studies">
      <Title title="case" subtitle="study" />
      <div className="section-center featured-center">
        {studies.map((study) => {
          const { id, image, date, title, info, href } = study;
          return (
            <article className="study-card" key={id}>
              <a href={href}>
                <div className="study-img-container">
                  <img src={image} className="study-img" alt={title} />
                  <p className="study-date">{date}</p>
                </div>
                <div className="study-info">
                  <div className="study-title">
                    <h4>{title}</h4>
                  </div>
                  <p>{info}</p>
                </div>
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Studies;
