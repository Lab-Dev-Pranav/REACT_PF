import React, { useState } from "react";
import BaseComponent from "../../BaseComponent/BaseComponent";
import "./projects.css";
import { Helmet } from "react-helmet-async";

import projectsData from "../../ADD/projects";

const Projects = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleReadMore = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="projects-page">

      <Helmet>
        <title>Projects | Dev.Pranav</title>
        <meta name="description" content="Projects | Dev.Pranav" />
        <meta name="keywords" content="Projects | Dev.Pranav" />
        <meta name="author" content="Dev.Pranav" />
      </Helmet>

      <BaseComponent>
        <div className="projects-heading">
          <h1 className="projects-title">
            <span className="projects-badge">
              Projects & Case Studies
            </span>
          </h1>

          <p className="projects-sub">
            Some of the best things I’ve built
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => {
            const isExpanded = expandedCards[project.sequence];
            const description = project.description;
            const isLong = description.length > 280;

            const displayText = isExpanded
              ? description
              : (isLong ? description.slice(0, 280) + "..." : description);

            return (
              <div className="project-card" key={project.sequence}>
                <div className="project-top">
                  <h2>{project.name}</h2>
                  <span className="project-tag">#{project.tag}</span>
                </div>

                <div className="project-line"></div>

                <p className={`project-description ${isExpanded ? 'expanded' : ''}`}>
                  {displayText}
                </p>

                {isLong && (
                  <button
                    type="button"
                    className="read-more-btn"
                    onClick={() => toggleReadMore(project.sequence)}
                  >
                    {isExpanded ? "Read Less ↑" : "Read More ↓"}
                  </button>
                )}

                <div className="project-tech-stack">
                  {project.languages.map((lang, idx) => (
                    <span className="tech-pill" key={idx}>
                      {lang}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.githubLink || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="github-btn"
                  >
                    🔗 GitHub
                  </a>
                  <a
                    href={project.runLink || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="live-btn"
                  >
                    🚀 Live Demo
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </BaseComponent>
    </div>
  );
};

export default Projects;