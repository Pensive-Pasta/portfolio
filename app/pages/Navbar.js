"use client";

import "@/styles/navbar.css";

const Navbar = () => {
  const handleScroll = (elementId) => {
    const element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <a onClick={() => handleScroll("about")}>About</a>
      <a onClick={() => handleScroll("projects")}>Projects</a>
      <a onClick={() => handleScroll("contact")}>Contact</a>
    </nav>
  );
};

export default Navbar;
