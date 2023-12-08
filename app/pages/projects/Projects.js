"use client";
import { useState, useEffect } from "react";
import Project from "./Project";
import Subheader from "../../components/Subheader";
import Loading from "@/app/components/loading";
import LoadingError from "@/app/components/loading-error";

const Projects = () => {
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    fetch("https://portfolio-backend-c95e.onrender.com/projects")
      .then((response) => {
        console.log({ response });
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setProjectData(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setLoadError(error.message);
        console.error("There was a problem with your fetch operation:", error);
      });
  }, []);

  return (
    <div>
      <Subheader title="PROJECTS" />
      {loading ? (
        <Loading />
      ) : loadError ? (
       <LoadingError loadError={loadError} />
      ) : (
        projectData.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            tech={project.tech}
            description={project.description}
            frontEnd={project.frontEnd}
            backEnd={project.backEnd || null}
            liveSiteUrl={project.liveSiteUrl || null}
            figmaUrl={project.figmaUrl}
            imageUrl={project.imageUrl}
          />
        ))
      )}
    </div>
  );
};

export default Projects;
