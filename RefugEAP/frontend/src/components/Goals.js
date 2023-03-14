import React from "react";
import Title from "./Title";
import "./RefugEAP.css";

const Goals = () => {
  return (
    <section className="section goals" id="goals">
      <Title title="support" subtitle="the programme" />
      <div className="section-center goals-center">
        <article className="goal">
          <span className="goal-icon">
            <i class="fas fa-lightbulb fa-fw"></i>
          </span>
          <div className="goal-info">
            <h4 className="goal-title">volunteer tutor</h4>
            <p className="goal-text">
              become a volunteer tutor on the programme (if you are able to
              deliver a minimum of 1.5 - 3 hours per week of online classes)
            </p>
          </div>
        </article>

        <article className="goal">
          <span className="goal-icon">
            <i class="fas fa-book fa-fw"></i>
          </span>
          <div className="goal-info">
            <h4 className="goal-title">associate member organisation</h4>
            <p className="goal-text">
              become an associate member organisation (referring students into
              the scheme, and considering referrals for eligible RefugEAP
              students onto your pre-sessional, IELTS or academic programmes)
            </p>
          </div>
        </article>

        <article className="goal">
          <span className="goal-icon">
            <i class="fas fa-user-graduate fa-fw"></i>
          </span>
          <div className="goal-info">
            <h4 className="goal-title">official partner organisation</h4>
            <p className="goal-text">
              becoming an official partner organisation (contributing time or
              resources to support the running of the scheme)
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Goals;
