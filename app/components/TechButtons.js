import React from "react";

const techLogoMapping = {
  JavaScript:
    "https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black",
  HTML: "https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white",
  CSS: "https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white",
  React:
    "https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
  Next: "https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white",
  Node: "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white",
  Express:
    "https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white",
  SQL: "https://img.shields.io/badge/SQL-316192?style=for-the-badge&logo=postgresql&logoColor=white",
  Amplify:
    "https://img.shields.io/badge/Amplify-232F3E.svg?style=for-the-badge&logo=amazonaws&logoColor=white",
  Render:
    "https://img.shields.io/badge/Render-000000.svg?style=for-the-badge&logoColor=white",
  SES: "https://img.shields.io/badge/SES-232F3E.svg?style=for-the-badge&logo=amazonaws&logoColor=white",
  Postman:
    "https://img.shields.io/badge/Postman-000000.svg?style=for-the-badge&logoColor=white",
  Github:
    "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white",
  Formik:
    "https://img.shields.io/badge/Formik-000000.svg?style=for-the-badge&logoColor=white",
  AWS: "https://img.shields.io/badge/AWS-232F3E.svg?style=for-the-badge&logo=amazonaws&logoColor=white",
  TailwindCSS: "https://img.shields.io/badge/TailwindCSS-%2306B6D4.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
  MongoDB: "https://img.shields.io/badge/MongoDB-%2347A248.svg?style=for-the-badge&logo=mongodb&logoColor=white",


};

const TechButtons = ({ tech }) =>
  tech.map((techItem) => (
    <img
      src={techLogoMapping[techItem]}
      alt={`${techItem} icon`}
      key={techItem}
    />
  ));

export default TechButtons;
