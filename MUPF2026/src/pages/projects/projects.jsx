import React, { useEffect, useState } from "react";
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


  // const id = window.location.hash.substring(1);

  // console.log( "Projects id is - ", id);


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
              <div className="project-card" key={project.sequence} id={project.name_id}>

                <div className="project-card-l">
                  <div className="project-top">
                    <h2>{project.name}</h2>
                    <span className="project-tag">#{project.tag}</span>
                  </div>
                  <div className="project-tech-stack">
                    {project.languages.map((lang, idx) => (
                      <span className="tech-pill" key={idx}>
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>




                <div className="project-line"></div>

                <div className="project-card-r">
                  <p className={`project-description ${isExpanded ? 'expanded' : ''}`}>
                    {displayText}

                    {isLong && (
                      <button
                        type="button"
                        className="read-more-btn"
                        onClick={() => toggleReadMore(project.sequence)}
                      >
                        {isExpanded ? "Read Less ↑" : "Read More ↓"}
                      </button>
                    )}
                  </p>

                  <div className="project-actions">
                    {project.githubLink ?
                      <a
                        href={project.githubLink || "#"}
                        target="_blank"
                        rel="noreferrer"
                        className="github-btn"
                      >
                        🔗 Repo
                      </a>
                      : ""}

                    {/* <a
                      href={project.githubLink || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="github-btn"
                    >
                      🔗 Repo
                    </a> */}

                    {project.runLink ?
                      <a
                        href={project.runLink || "#"}
                        target="_blank"
                        rel="noreferrer"
                        className="live-btn"
                      >
                        🚀 Live
                      </a>
                      : ""}



                  </div>
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