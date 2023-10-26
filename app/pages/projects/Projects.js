"use client";
import { useState, useEffect } from "react";
import Project from "./Project";
import Subheader from "../../components/Subheader";

const Projects = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/projects")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => setProjectData(data))
      .catch((error) =>
        console.error("There was a problem with your fetch operation:", error)
      );
  }, []);

  return (
    <div>
      <Subheader title="PROJECTS" />
      {projectData.map((project) => (
        <Project
          key={project.id}
          title={project.title}
          tech={project.tech}
          description={project.description}
          githubUrl={project.githubUrl}
          liveSiteUrl={project.liveSiteUrl}
          figmaUrl={project.figmaUrl}
        />
      ))}
    </div>
  );
};

export default Projects;
