import React from "react";
import Title from "./Title";
import "./RefugEAP.css";

const Goals = () => {
  return (
    <section className="section goals" id="goals">
      <Title title="our" subtitle="goals" />
      <div className="section-center goals-center">
        <article className="goal">
          <span className="goal-icon">
            <i class="fas fa-lightbulb fa-fw"></i>
          </span>
          <div className="goal-info">
            <h4 className="goal-title">Develop awareness </h4>
            <p className="goal-text">
              Develop awareness of the language required for studying in a UK
              Higher Education context and the skills required for studying in a
              UK Higher Education context
            </p>
          </div>
        </article>

        <article className="goal">
          <span className="goal-icon">
            <i class="fas fa-book fa-fw"></i>
          </span>
          <div className="goal-info">
            <h4 className="goal-title">Develop knowledge</h4>
            <p className="goal-text">
              Develop knowledge of the United Nations Sustainable Development
              Goals, as well as evaluating them through a critical lens
            </p>
          </div>
        </article>

        <article className="goal">
          <span className="goal-icon">
            <i class="fas fa-user-graduate fa-fw"></i>
          </span>
          <div className="goal-info">
            <h4 className="goal-title">Become better learners</h4>
            <p className="goal-text">
              reflect on the effectiveness of learning strategies and
              participate actively in the learning process, managing time and
              work load
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Goals;
