"use client";
const Navbar = () => {
  const handleScroll = (elementId) => {
    const element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav>
      <a onClick={() => handleScroll("about")}>About</a>
      <a onClick={() => handleScroll("projects")}>Projects</a>
      <a onClick={() => handleScroll("contact")}>Contact</a>
    </nav>
  );
};

export default Navbar;
