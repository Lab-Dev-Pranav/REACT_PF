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
            💼 What I Do
          </h1>

          <h3 className="whatido-subtitle">
            CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK.
          </h3>

          {/* TECH STACK */}
          <div className="whatido-tech-stack">

            <div className="tech-card">
              <i className="fa-solid fa-code-branch"></i>
              <span>DSA</span>
            </div>

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
              <i className="fa-brands fa-git-alt"></i>
              <span>Git</span>
            </div>

            <div className="tech-card">
              <i className="fa-brands fa-github"></i>
              <span>GitHub</span>
            </div>

            <div className="tech-card">
              <i className="fa-solid fa-code"></i>
              <span>VS Code</span>
            </div>

            <div className="tech-card">
              <i className="fa-brands fa-npm"></i>
              <span>npm</span>
            </div>

            <div className="tech-card">
              <i className="fa-solid fa-bolt"></i>
              <span>Hoppscotch</span>
            </div>

            <div className="tech-card">
              <i className="fa-solid fa-paper-plane"></i>
              <span>Thunder </span>
            </div>
            
            <div className="tech-card">
              <i className="fa-solid fa-bolt"></i>
              <span>Hoppscotch</span>
            </div>




          </div>

          {/* DESCRIPTION */}
          <div className="whatido-points">

            <p>
              ⚡ Develop highly interactive front-end / user interfaces for web
              and mobile applications.
            </p>

            <p>
              ⚡ Build Progressive Web Applications (PWAs) using SPA and normal
              stacks.
            </p>
            <div className="whatido-tags">
              ⚡ Integrate third-party services like
              <span>MongoDB Atlas</span>
              <span>Cloudinary</span>
              <span>Passport JS</span>
              <span>Nodemailer</span>
              <span>Mapbox</span>
              <span>AWS</span>
              <span>Render</span>
              <span>Vanta JS</span>
              <span>DigitalOcean</span>
              and more.
            </div>


          </div>



        </div>

      </div>

    </BaseComponent>
  );
};

export default WhatIDo;