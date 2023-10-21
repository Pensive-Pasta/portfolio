const LinkButton = ({ label, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
};

export default LinkButton;
