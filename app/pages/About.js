import Subheader from "../components/Subheader";
import Skills from "../components/Skills";

import "@/styles/about.css";

const About = () => {
  return (
    <div className="about">
      <Subheader title="ABOUT" />
      <div className="info">
        <p>
          <b className="info-highlight">Hello, I'm Ricky 👋 </b>
          I'm an ambitious, outgoing and enthusiastic developer with a
          background in design, having worked as an art director and freelance
          illustrator and designer, where I found a passion in software
          engineering. I love to learn, and have taught myself full-stack
          development through the codecademy full-stack engineer career path and
          a series of personal projects creating full-stack apps. You can see
          some project highlights below, and fill out the email form if you'd
          like to get in touch.
        </p>
        <Skills />
      </div>
    </div>
  );
};

export default About;
