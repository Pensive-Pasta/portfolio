import ReactLogo from "@/public/assets/react.png";
import JavaScriptLogo from "@/public/assets/javascript.png";
import HTMLLogo from "@/public/assets/html.png";
import CSSLogo from "@/public/assets/css.png";
import LinkButton from "../../components/LinkButton";

import "@/styles/project.css";

const techLogoMapping = {
  JavaScript: <img src={JavaScriptLogo} alt="JavaScript Logo" />,
  HTML: <img src={HTMLLogo} alt="HTML Logo" />,
  CSS: <img src={CSSLogo} alt="CSS Logo" />,
  React: <img src={ReactLogo} alt="React Logo" />,
};

const Project = ({
  title,
  tech,
  description,
  githubUrl,
  liveSiteUrl,
  figmaUrl,
}) => {
  return (
    <div className="project">
      <img src="/assets/Laptop.svg" alt="Project Preview" />
      <div className="info">
      <h3>{title}</h3>
        <div>{tech.map((techItem) => techLogoMapping[techItem])}</div>
        <span>{description}</span>
        <div className="links">
          <LinkButton label="GitHub" url={githubUrl} />
          <LinkButton label="Live Site" url={liveSiteUrl} />
          <LinkButton label="Figma" url={figmaUrl} />
        </div>
      </div>
    </div>
  );
};

export default Project;
