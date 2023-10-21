import ReactLogo from "@/public/assets/react.png";
import JavaScriptLogo from "@/public/assets/javascript.png";
import HTMLLogo from "@/public/assets/html.png";
import CSSLogo from "@/public/assets/css.png";
import Laptop from "@/public/assets/Laptop.png";
import LinkButton from "../../components/LinkButton";

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
    <div>
      <h3>{title}</h3>
      <img src={Laptop} alt="Project Preview" />
      <div>{tech.map((techItem) => techLogoMapping[techItem])}</div>
      <span>{description}</span>
      <div>
        <LinkButton label="GitHub" url={githubUrl} />
        <LinkButton label="Live Site" url={liveSiteUrl} />
        <LinkButton label="Figma" url={figmaUrl} />
      </div>
    </div>
  );
};

export default Project;
