import React from "react";
import "./footer.css";

import AddSkils from "../../ADD/addSkils";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#0a0a0a",
        color: "#888",
        padding: "20px 0",
        textAlign: "center",
      }}
    >
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">

        {/* LINKS */}

        <div className="footer-links">
          <a href="/">Home</a>
          {/* <a href="/home#about">About</a> */}
          {/* <a href="/home/#blog">Blogs</a> */}
          <a href="/skills">Skills</a>
          <a href="/projects">Projects</a>
          <a href="/experience">Experience</a>




          <a href="/contact" className="contact-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 256 256"
            >
              <g transform="translate(1.4066 1.4066) scale(2.81 2.81)">
                <path
                  d="M61.884 68.284l5.296-2.671c2.519-1.271 2.821-4.747.559-6.433l-7.994-5.959c-1.206-.899-2.828-1.001-4.137-.261l-2.322 1.312c-1.114.63-2.478.671-3.607.07-6.1-3.247-10.773-7.921-14.021-14.021-.601-1.129-.56-2.493.07-3.607l1.312-2.322c.74-1.309.637-2.931-.261-4.137l-5.959-7.994c-1.686-2.262-5.163-1.96-6.433.559l-2.671 5.296c-1.248 2.475-1.317 5.392-.146 7.904 6.872 14.734 17.676 25.538 32.41 32.41 2.476 1.249 5.393 1.18 7.868-.069z"
                  fill="#fff"
                />
                <path
                  d="M45 90C20.187 90 0 69.813 0 45S20.187 0 45 0s45 20.187 45 45S69.813 90 45 90zM45 6C23.495 6 6 23.495 6 45s17.495 39 39 39 39-17.495 39-39S66.505 6 45 6z"
                  fill="#fff"
                />
              </g>
            </svg>
          </a>
        </div>

        {/* DIVIDER */}

        <div className="footer-divider"></div>

        {/* SOCIAL LINKS */}

        <section className="social-section">
          <div className="social-container">
            <a
              href="https://www.linkedin.com/in/pranav-patil-97b402381"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Lab-Dev-Pranav"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              GitHub
            </a>

            <a
              href="https://www.instagram.com/_dev.pranav____/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              Instagram
            </a>
          </div>
        </section>

        {/* COPYRIGHT */}

        <p className="copyright">
          <a href="/login">©</a>{" "}
          {new Date().getFullYear()} All rights reserved by
          {" "}
          _<a href="/add-skills">DEV</a>
          .
          <a href="/add-projects">PRANAV</a>
          ____
        </p>
      </div>
    </footer>
  );
};

export default Footer;