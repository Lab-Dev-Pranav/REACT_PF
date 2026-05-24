import React from "react";
import BaseComponent from "../../BaseComponent/BaseComponent";
import "./skills.css";

import skillsData from "../../ADD/skils";
import { Helmet } from "react-helmet-async";

const Skills = () => {
  return (
    <div className="page-skills">

      <Helmet>
        <title>Skills | Dev.Pranav</title>
        <meta name="description" content="Skills | Dev.Pranav" />
        <meta name="keywords" content="Skills | Dev.Pranav" />
        <meta name="author" content="Dev.Pranav" />
      </Helmet>

      <section className="skills-section">
        <BaseComponent>

          <div className="skills-heading">
            <h1 className="skills-title">
              <span className="skills-badge">
                Skills & Technologies
              </span>
            </h1>

            <p className="skills-sub">
              My technical expertise and tools I use daily.
            </p>
          </div>

          <div className="skills-grid">
            {skillsData.map((skillObj, index) => (
              <div className="skill-card" key={index}>

                <div className="skill-card-top">
                  <h2>{skillObj.skill}</h2>

                  <span className="skill-tag">
                    #{skillObj.tag}
                  </span>
                </div>

                <div className="skill-line"></div>

                <div className="skill-points">
                  {skillObj.points.map((point, idx) => (
                    <span className="skill-point" key={idx}>
                      {point}
                    </span>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </BaseComponent>
      </section>
    </div>
  );
};

export default Skills;