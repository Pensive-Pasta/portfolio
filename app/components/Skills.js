import TechButtons from "./TechButtons";

const Skills = () => {
  return (
    <div className="techBadges">
      <TechButtons
        tech={[
          "JavaScript",
          "HTML",
          "CSS",
          "React",
          "Next",
          "Node",
          "SQL",
          "Github",
          "AWS",
          "Express",
          "Postman",
          "TailwindCSS",
          "MongoDB",
        ]}
      />
    </div>
  );
};

export default Skills;
