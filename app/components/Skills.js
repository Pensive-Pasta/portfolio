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
        ]}
      />
    </div>
  );
};

export default Skills;
