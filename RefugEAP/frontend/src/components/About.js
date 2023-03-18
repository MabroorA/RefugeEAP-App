import React from "react";
import about3 from "../images/about3.jpg";
import Title from "./Title";
import "./EAPPage.css";

const About = () => {
  return (
    <section class="section" id="about">
      <Title title="about the " subtitle="programme" />

      <div class="section-center about-center">
        <div class="about-img">
          <img src={about3} className="about-photo" alt="people talking" />
        </div>
        <article class="about-info">
          <h3>the RefugEAP Programme</h3>
          <p>
            The RefugEAP Programme is a free online pre-university academic
            English skills course for refugee-background students across the UK.
            It is for students who need to improve their academic English skills
            to help them access a degree programme at university, but perhaps
            have not been able to access a formal pre-sessional English for
            Academic Purposes (EAP) programme yet. RefugEAP has been developed
            to meet this need, providing students with an opportunity to
            continue to develop their academic English skills in a supportive
            way while they are waiting for more formal opportunities to become
            available.
          </p>
          <p>
            The RefugEAP Programme has been developed by Deirdre McKenna at{" "}
            <a href="https://le.ac.uk/cite/sanctuary-seekers-unit">
              the University of Leeds’ Language Centre
            </a>
            {" "}and Aleks Palanac at{" "}
            <a href="https://le.ac.uk/cite/sanctuary-seekers-unit">
              the University of Leicester’s Sanctuary Seekers’ Unit
            </a>
            . It is being kindly supported by dedicated volunteer tutors and a
            number of partner organisations, including Password Testing (who are
            providing initial assessments), Screen Share (who are providing
            digital devices for students who need them) RefuAid (who are
            providing wrap-around support and referrals) and Oxford University
            Press (who have provided online course books).
          </p>

          <a
            href="https://le.ac.uk/cite/sanctuary-seekers-unit/initiatives/refugeap"
            class="btn-eap"
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
