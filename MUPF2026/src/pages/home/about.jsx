import React from 'react';
import BaseComponent from '../../BaseComponent/BaseComponent';
import "./about.css";
import StrokeText from '../../component/StrokeText';
const About = () => {
  return (
    <BaseComponent className="home-about" id="about">
      <div className="about-container">

        {/* LEFT IMAGE */}
        <div className="about-left">
          <div className="about-image-wrapper">
            <img
              src="profile.jpg"
              alt="Pranav"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-right" >

          <h1 className="about-title">
            {/* 👋 About Me */}


            <StrokeText
              text="About Me"
              strokeColor="#286af8"
              fillColor="#F8FAFC"
              strokeWidth={2.4}
              drawDuration={1.6}
              fillDelay={0.2}
              stagger={0.05}
              ease="power2.out"
              trigger="scroll"
              fillMode="wipe"
              fontSize={60}
              fontWeight={800}
              letterSpacing={-4}
              reverse={false}
            />

          </h1>

          <p className="about-text">
            💻 I'm <span>Pranav S. Patil</span>, a self-taught web developer
            with hands-on experience building personal projects using Java,
            Node.js, and full-stack technologies.
            I’m passionate about crafting dynamic, user-friendly applications,
            with strong skills in API integration, database management,
            and version control.
          </p>

          <p className="about-text">
            Always eager to explore new tools, learn by doing,
            and turn ideas into working solutions through code and collaboration.
            I thrive in late-night coding sessions and love solving
            real-world problems.
          </p>

          <ul className="about-points">
            <li>“The Harder You Work, The Luckier You Get”</li>
            <li>Loves late-night debugging.</li>
            <li>Enjoys mentoring peers & shipping fast, clean code.</li>
          </ul>

        </div>
      </div>
    </BaseComponent>
  );
};

export default About;