import Project from "./Project";
import Subheader from "../../components/Subheader";

const projectData = [
  {
    id: 1,
    title: "Project 1",
    tech: ["JavaScript", "React"],
    description:
      "Tellus malesuada proin egestas in suscipit blandit suscipit ut. Nulla gravida venenatis eget augue tellus. Orci volutpat congue et magnis egestas massa est. Suspendisse ultricies.",
    githubUrl: "https://github.com/user/project1",
    liveSiteUrl: "https://project1.example.com",
    figmaUrl: "https://www.figma.com/file/abc/project1",
  },
  {
    id: 2,
    title: "Project 2",
    tech: ["HTML", "CSS"],
    description:
      "Tellus malesuada proin egestas in suscipit blandit suscipit ut. Nulla gravida venenatis eget augue tellus. Orci volutpat congue et magnis egestas massa est. Suspendisse ultricies.",
    githubUrl: "https://github.com/user/project2",
    liveSiteUrl: "https://project2.example.com",
    figmaUrl: "https://www.figma.com/file/abc/project2",
  },
  {
    id: 3,
    title: "Project 3",
    tech: ["JavaScript", "HTML"],
    description:
      "Tellus malesuada proin egestas in suscipit blandit suscipit ut. Nulla gravida venenatis eget augue tellus. Orci volutpat congue et magnis egestas massa est. Suspendisse ultricies.",
    githubUrl: "https://github.com/user/project3",
    liveSiteUrl: "https://project3.example.com",
    figmaUrl: "https://www.figma.com/file/abc/project3",
  },
];

const Projects = () => {
  return (
    <div>
      <Subheader title="Projects" />
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
