import "@/styles/linkbutton.css";

const LinkButton = ({ label, url }) => {
  return (
    <a className="linkButton" href={url} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
};

export default LinkButton;
