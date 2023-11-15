import Subheader from "../components/Subheader";
import Skills from "../components/Skills";

import "@/styles/about.css";

const About = () => {
  return (
    <div className="about">
      <Subheader title="ABOUT" />
      <div className="info">
        <p>
          <b className="info-highlight">Hey, I'm Ricky 👋 </b>I'm an ambitious,
          outgoing and enthusiastic developer with a background in design,
          having worked as an art director and freelance illustrator and
          designer, where I found a passion in software engineering. I love to
          learn, recently completeing a certified full-stack engineer career
          path and a series of personal projects creating full-stack apps. You
          can see some project highlights below, and fill out the email form if
          you would like to get in touch.
        </p>
        <Skills />
      </div>
    </div>
  );
};

export default About;
