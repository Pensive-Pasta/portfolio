import Subheader from "../components/Subheader";
import Skills from "../components/Skills";
import Image from "next/image";

import "@/styles/about.css";

const About = () => {
  return (
    <div className="about">
      <Subheader title="ABOUT" />
      <div className="info">
      <div className="profilePhoto">
        <Image src="/assets/profile.png" alt="Profile Photo" width={350} height={350} />
      </div>
        <p>
          <b className="info-highlight">Hey, I&apos;m Ricky 👋 </b> <br></br>I&apos;m an
          ambitious, outgoing and enthusiastic developer with a background in
          design, having worked as an art director and freelance illustrator and
          designer, where I discovered a passion for software engineering. 
        </p>
      </div>
      <div className="stack">
        <Skills />
      </div>  
    </div>
  );
};

export default About;
