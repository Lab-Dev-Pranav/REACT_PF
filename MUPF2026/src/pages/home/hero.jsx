import React, { useEffect, useState } from "react";
import BaseComponent from "../../BaseComponent/BaseComponent";
import "./hero.css";

const roles = [
  "Java Full Stack Developer",
  "MERN Stack Developer",
  "DSA Expert",
  "React Developer",

      "Frontend Engineer",
      "Backend Engineer",
      "API Integration Specialist",
      "Tech Explorer",

];

const Hero = () => {
  const [text, setText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = roles[currentRole];

    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentText.substring(0, prev.length - 1)
          : currentText.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentText) {
        setTimeout(() => setIsDeleting(true), 1200);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentRole]);

  return (


    <BaseComponent className="home-hero">

      <div className="BG-main">
        <div className="grid-background"></div>
        <div className="grid-glow"></div>
      </div>

      <div className="hero-container">
        {/* LEFT */}
        <div className="hero-left">
          <div className="hero-heading">
            <p className="hero-greet">Hi, I’m</p>
            <h1 className="hero-name">_DEV.PRANAV____</h1>
          </div>

          <h6 className="hero-role">
            {text}
            <span className="cursor">|</span>
          </h6>
          <hr />

          <p className="hero-desc">
            Passionate MERN Stack Enthusiast building modern and scalable web
            applications.
          </p>

          <div className="hero-buttons">
            
            
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <div className="hero-image-wrapper">

            <div className="hero-code">
              <p>
                <span className="hero-code-keyword">const</span> role =
                <span className="hero-code-value">
                  {" "}['Developer', 'Debugger']
                </span>
              </p>

              <p>
                <span className="hero-code-keyword">const</span> focus =
                <span className="hero-code-value">
                  {" "}'build scalable & useful products'
                </span>
              </p>

              <p>
                <span className="hero-code-keyword">const</span> mindset =
                <span className="hero-code-value">
                  {" "}'learn → build → improve → repeat'
                </span>
              </p>

            </div>

          </div>
        </div>



      </div>
    </BaseComponent>
  );
};

export default Hero;