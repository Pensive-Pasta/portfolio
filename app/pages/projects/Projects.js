import Project from "./Project";
import Subheader from "../../components/Subheader";

const projectData = [
  {
    id: 1,
    title: "PROJECT NAME",
    tech: ["JavaScript", "React", "HTML", "CSS"],
    description:
      "Tellus malesuada proin egestas in suscipit blandit suscipit ut. Nulla gravida venenatis eget augue tellus. Orci volutpat congue et magnis egestas massa est. Suspendisse ultricies.",
    githubUrl: "https://github.com/Pensive-Pasta",
    liveSiteUrl: "https://project1.example.com",
    figmaUrl: "https://www.figma.com/file/abc/project1",
  },
  {
    id: 2,
    title: "PROJECT NAME",
    tech: ["HTML", "CSS"],
    description:
      "Tellus malesuada proin egestas in suscipit blandit suscipit ut. Nulla gravida venenatis eget augue tellus. Orci volutpat congue et magnis egestas massa est. Suspendisse ultricies.",
    githubUrl: "https://github.com/Pensive-Pasta",
    liveSiteUrl: "https://project2.example.com",
    figmaUrl: "https://www.figma.com/file/abc/project2",
  },
  {
    id: 3,
    title: "PROJECT NAME",
    tech: ["JavaScript", "HTML"],
    description:
      "Tellus malesuada proin egestas in suscipit blandit suscipit ut. Nulla gravida venenatis eget augue tellus. Orci volutpat congue et magnis egestas massa est. Suspendisse ultricies.",
    githubUrl: "https://github.com/Pensive-Pasta",
    liveSiteUrl: "https://project3.example.com",
    figmaUrl: "https://www.figma.com/file/abc/project3",
  },
];

const Projects = () => {
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
