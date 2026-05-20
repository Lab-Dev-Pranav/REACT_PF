import React from "react";
import BaseComponent from "../../BaseComponent/BaseComponent";
import "./mydomain.css";

import {
      FaGlobe,
      FaCode,
      FaServer,
      FaLaptopCode,
      FaProjectDiagram,
} from "react-icons/fa";

const domains = [
      {
            icon: <FaLaptopCode />,
            title: "MERN Stack Development",
            desc: "Handles both frontend and backend development using MERN stack.",
      },
      {
            icon: <FaCode />,
            title: "Java Full Stack Development",
            desc: "Built a strong foundation in core Java and full stack development.",
      },
      {
            icon: <FaProjectDiagram />,
            title: "Data Structures & Algorithms",
            desc: "Mastering DSA improves problem-solving and coding efficiency.",
      },
      {
            icon: <FaGlobe />,
            title: "Frontend Development",
            desc: "Frontend Development focuses on the client side of web applications.",
      },
      {
            icon: <FaServer />,
            title: "Backend Development",
            desc: "Backend Development involves server-side logic and integration.",
      },
];

export default function MyDomain() {
      return (
            <BaseComponent className="domain-container">
                  <div className="domain-header">
                        <span className="domain-emoji">🌐</span>
                        <h1>MY DOMAINS</h1>
                  </div>

                  <div className="domain-grid">
                        {domains.map((item, index) => (
                              <div className="domain-card" key={index}>
                                    <div className="domain-icon">{item.icon}</div>

                                    <h2>{item.title}</h2>

                                    <p>{item.desc}</p>
                              </div>
                        ))}
                  </div>
            </BaseComponent>
      );
}