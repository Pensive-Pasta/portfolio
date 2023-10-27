const Projects = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    const cachedData = localStorage.getItem("projectData");
    const cachedTime = localStorage.getItem("projectDataTime");

    if (cachedData && cachedTime && (Date.now() - cachedTime < 24 * 60 * 60 * 1000)) {
      setProjectData(JSON.parse(cachedData));
    } else {
      fetch("https://portfolio-backend-c95e.onrender.com/projects")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
          }
          return response.json();
        })
        .then((data) => {
          setProjectData(data);
          localStorage.setItem("projectData", JSON.stringify(data));
          localStorage.setItem("projectDataTime", Date.now());
        })
        .catch((error) =>
          console.error("There was a problem with your fetch operation:", error)
        );
    }
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
