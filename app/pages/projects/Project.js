import React from "react";
import LinkButton from "../../components/LinkButton";
import TechButtons from "@/app/components/TechButtons";
import "@/styles/project.css";

const Project = ({
  title,
  tech,
  description,
  frontEnd,
  backEnd,
  liveSiteUrl,
  figmaUrl,
  imageUrl,
}) => {
  return (
    <div className="project">
      <img
        src={`/assets/${imageUrl}.png`}
        alt="Project Preview"
        className="projectImage"
      />
      <div className="projectInfo">
        <h3>{title}</h3>
        <div className="techImg">
          <TechButtons tech={tech} />
        </div>
        <span>{description}</span>
        <div className="links">
          <LinkButton label="Front End" url={frontEnd} />
          {backEnd && <LinkButton label="Back End" url={backEnd} />}
          {liveSiteUrl && <LinkButton label="Live Site" url={liveSiteUrl} />}
          <LinkButton label="Figma Design" url={figmaUrl} />
        </div>
      </div>
    </div>
  );
};

export default Project;
