import React, { useEffect, useState } from "react";
import BaseComponent from "../../BaseComponent/BaseComponent";
import "./skills.css";

import skillsData from "../../ADD/skils";
import { Helmet } from "react-helmet-async";




const Skills = () => {

  useEffect(() => {
    const id = window.location.hash.substring(1);

    if (!id) return;

    const element = document.getElementById(id);

    if (element) {
      element.classList.add("blink-highlight");

      setTimeout(() => {
        element.classList.remove("blink-highlight");
      }, 2000);
    }
  }, []);



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
              <div className="skill-card" key={index} id={skillObj.name_id}>

                <div className="skill-card-top">
                  <h2>{skillObj.name}</h2>

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