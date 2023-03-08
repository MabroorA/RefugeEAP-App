import React from "react";
import about from "../images/about.jpg";
import Title from "./Title";
import "./RefugEAP.css";

const About = () => {
  return (
    <section class="section" id="about">
      <Title title="about the " subtitle="programme" />

      <div class="section-center about-center">
        <div class="about-img">
          <img src={about} class="about-photo" alt="awesome beach" />
        </div>
        <article class="about-info">
          <h3>improve academic english</h3>
          <p>
            The RefugEAP Network’s overarching objective is to facilitate the
            development of widening participation initiatives enabling
            refugee-background students to access HE via English language
            pathways, with a particular focus on English for Academic Purposes
          </p>
          <p>
            It is for students who need to improve their academic English skills
            to help them access a degree programme at university, but perhaps
            have not been able to access a formal pre-sessional English for
            Academic Purposes (EAP) programme yet.
          </p>
          <a
            href="https://le.ac.uk/cite/sanctuary-seekers-unit/initiatives/refugeap/students"
            class="btn"
            rel="noreferrer"
          >
            learn more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
