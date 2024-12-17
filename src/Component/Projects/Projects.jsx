import React from "react";
import "./Projects.css";
import project_data from "../../assets/project_data";

const Projects = () => {
  return (
    <div id="portfolio" className="projects">
      <div className="project-title">
        <h1>Projects</h1>
      </div>
      <div className="project-container">
        {project_data.map((e, index) => {
          return <img key={index} src={e.w_img} alt="" />;
        })}
      </div>
    </div>
  );
};

export default Projects;
