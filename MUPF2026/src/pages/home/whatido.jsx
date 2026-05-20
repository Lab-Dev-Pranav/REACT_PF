import React from 'react';
import BaseComponent from '../../BaseComponent/BaseComponent';
import './whatido.css';

const WhatIDo = () => {
  return (
    <BaseComponent className="home-whatido">

      <div className="whatido-container">

        {/* LEFT SIDE */}
        <div className="whatido-left">

          <img
            src="./WID.png"
            alt="developer working"
            className="whatido-image"
          />

        </div>

        {/* RIGHT SIDE */}
        <div className="whatido-right">

          <h1 className="whatido-title">
            💼 What I do
          </h1>

          <h3 className="whatido-subtitle">
            CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK.
          </h3>

          {/* TECH STACK */}
          <div className="whatido-tech-stack">

            <div className="tech-card">
              <i className="fa-brands fa-java"></i>
              <span>Java</span>
            </div>

            <div className="tech-card">
              <i className="fa-brands fa-react"></i>
              <span>React</span>
            </div>

            <div className="tech-card">
              <i className="fa-brands fa-node-js"></i>
              <span>Node JS</span>
            </div>

            <div className="tech-card">
              <i className="fa-brands fa-js"></i>
              <span>JavaScript</span>
            </div>

            <div className="tech-card">
              <i className="fa-brands fa-github"></i>
              <span>GitHub</span>
            </div>

            <div className="tech-card">
              <i className="fa-brands fa-git-alt"></i>
              <span>Git</span>
            </div>

            <div className="tech-card">
              <i className="fa-solid fa-database"></i>
              <span>MongoDB</span>
            </div>

            <div className="tech-card">
              <i className="fa-solid fa-code"></i>
              <span>VS Code</span>
            </div>

          </div>

          {/* DESCRIPTION */}
          <div className="whatido-points">

            <p>
              ⚡ Develop highly interactive front-end and backend applications
              using modern technologies.
            </p>

            <p>
              ⚡ Build scalable full-stack MERN and Java based applications.
            </p>

            <p>
              ⚡ Integrate APIs, authentication systems and cloud services.
            </p>

          </div>

          {/* TAGS */}
          <div className="whatido-tags">

            <span>MongoDB Atlas</span>
            <span>Cloudinary</span>
            <span>Passport JS</span>
            <span>Nodemailer</span>
            <span>Mapbox</span>
            <span>AWS</span>
            <span>Render</span>
            <span>DigitalOcean</span>

          </div>

        </div>

      </div>

    </BaseComponent>
  );
};

export default WhatIDo;
