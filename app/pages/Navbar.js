"use client";

import "@/styles/navbar.css";

import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (elementId) => {
    if (menuOpen) setMenuOpen(false);
    const element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar${menuOpen ? "Active" : ""}`}>
      <button className={`burgerMenu`} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <a onClick={() => handleScroll("about")}>About</a>
      <a onClick={() => handleScroll("projects")}>Projects</a>
      <a onClick={() => handleScroll("contact")}>Contact</a>
    </nav>
  );
};

export default Navbar;
