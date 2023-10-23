import Subheader from "../components/Subheader";
import AnimatedPot from "../components/AnimatedPot";

import "@/styles/about.css";

const About = () => {
  return (
    <div className="about">
      <Subheader title="ABOUT" />
      <div className="info">
        <p>
          Lorem ipsum dolor sit amet consectetur. Sagittis eget hendrerit urna mus
          massa ultrices. Pellentesque molestie vel mauris mauris rhoncus purus.
          Tellus malesuada proin egestas in suscipit blandit suscipit ut. Nulla
          gravida venenatis eget augue tellus. Orci volutpat congue et magnis
          egestas massa est. Suspendisse ultricies.<br></br> Tellus malesuada
          proin egestas in suscipit blandit suscipit ut. Nulla gravida venenatis
          eget augue tellus. Orci volutpat congue et magnis egestas massa est.
          Suspendisse ultricies.
        </p>
        <AnimatedPot />
      </div>
    </div>
  );
};

export default About;
