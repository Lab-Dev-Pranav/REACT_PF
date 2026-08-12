import React from "react";
import BaseComponent from "../../BaseComponent/BaseComponent";
import "./experience.css";
import { Helmet } from "react-helmet-async";

const experiences = [
  {
    title: "HexSoftware",
    role: "Web Developer Intern",
    date: "Jan 2025 – Feb 2025",
    tech: ["HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "Express"],
    description:
      "Worked on practical projects focused on building responsive and interactive web applications.",
    points: [
      "Developed a Crowdfunding Platform allowing users to create projects and manage contributions.",
      "Built a Web Music Player with playback controls and volume management.",
      "Designed clean and responsive UI layouts.",
    ],
  }, {
    title: "Self-Directed",
    role: "Freelance & Open-Source Developer",
    date: "2024 – Present",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React",
      "Socket.IO",
      "WebRTC",
      "REST APIs",
      "JWT",
    ],
    points: [
      "Built and deployed full-stack web applications including a real-time video conferencing platform (FlowMeet) using WebRTC and Socket.IO.",
      "Designed scalable REST APIs with Node.js and Express.js implementing JWT authentication and secure user management.",
      "Developed real-time features such as video calls, participant management, and live chat systems.",
      "Focused on scalable architecture, deployment workflows, and modern UI/UX practices.",
    ],
  },

];

const Experience = () => {
  return (
    <div className="page-experience">

      <Helmet>
        <title>Experience | Dev.Pranav</title>
        <meta name="description" content="Experience | Dev.Pranav" />
        <meta name="keywords" content="Experience | Dev.Pranav" />
        <meta name="author" content="Dev.Pranav" />
      </Helmet>

      <BaseComponent>
        <div className="experience-container">


          <div className="experience-heading">
            <h1 className="experience-title">
              <span className="experience-badge">
                My Experience
              </span>
            </h1>

            <p className="experience-sub">
              A timeline of my professional experience.
            </p>
          </div>

          <div className="experience-list">
            {experiences.map((exp, index) => (
              <div className="experience-card" key={index}>
                <div className="experience-top">
                  <div>
                    <h2>
                      <span>{exp.title}</span> - {exp.role}
                    </h2>
                  </div>

                  <div className="experience-date">{exp.date}</div>
                </div>

                <div className="tech-stack">
                  {exp.tech.map((item, i) => (
                    <span key={i}>{item}</span>
                  ))}
                </div>

                {exp.description && (
                  <p className="experience-description">
                    {exp.description}
                  </p>
                )}

                <ul>
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </BaseComponent>
    </div>
  );
};

export default Experience;