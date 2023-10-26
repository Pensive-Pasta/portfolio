import React from 'react';
import LinkButton from "../../components/LinkButton";

import "@/styles/project.css";

const techLogoMapping = {
  JavaScript: (
    <img
      src="https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black"
      alt="JavaScript Logo"
    />
  ),
  HTML: (
    <img
      src="https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white"
      alt="HTML Logo"
    />
  ),
  CSS: (
    <img
      src="https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white"
      alt="CSS Logo"
    />
  ),
  React: (
    <img
      src="https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
      alt="React Logo"
    />
  ),
};

const Project = ({
  title,
  tech,
  description,
  githubUrl,
  liveSiteUrl,
  figmaUrl,
}) => {
  return (
    <div className="project">
      <img src="/assets/Laptop.svg" alt="Project Preview" className="projectImage" />
      <div className="projectInfo">
        <h3>{title}</h3>
        <div className="techImg">
        {tech.map((techItem) => React.cloneElement(techLogoMapping[techItem], { key: techItem }))}
        </div>
        <span>{description}</span>
        <div className="links">
          <LinkButton label="GitHub" url={githubUrl} />
          <LinkButton label="Live Site" url={liveSiteUrl} />
          <LinkButton label="Figma" url={figmaUrl} />
        </div>
      </div>
    </div>
  );
};

export default Project;
