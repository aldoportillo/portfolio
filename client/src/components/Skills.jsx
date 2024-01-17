import React from "react";

function Skills() {

    const skillBadges = [
        // Languages
        { src: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E", alt: "JavaScript", category: "Languages" },
        { src: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54", alt: "Python", category: "Languages" },
        { src: "https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white", alt: "Ruby", category: "Languages" },
        // Frontend
        { src: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB", alt: "React", category: "Frontend" },
        { src: "https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white", alt: "React Router", category: "Frontend" },
        { src: "https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB", alt: "React Native", category: "Frontend" },
        { src: "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white", alt: "HTML5", category: "Frontend" },
        { src: "https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white", alt: "CSS3", category: "Frontend" },
        { src: "https://img.shields.io/badge/Pug-FFF?style=for-the-badge&logo=pug&logoColor=A86454", alt: "Pug", category: "Frontend" },
        // Backend
        { src: "https://img.shields.io/badge/NodeJS-6DA55F?style=for-the-badge&logo=node.js&logoColor=white", alt: "Node.js", category: "Backend" },
        { src: "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB", alt: "Express.js", category: "Backend" },
        { src: "https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white", alt: "NPM", category: "Backend" },
        { src: "https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD", alt: "Nodemon", category: "Backend" },
        { src: "https://img.shields.io/badge/rails-%23CC0000.svg?style=for-the-badge&logo=ruby-on-rails&logoColor=white", alt: "Ruby on Rails", category: "Backend" },
        // Databases
        { src: "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white", alt: "MongoDB", category: "Databases" },
        { src: "https://img.shields.io/badge/mysql-%2300000f.svg?style=for-the-badge&logo=mysql&logoColor=white", alt: "MySQL", category: "Databases" },
        { src: "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white", alt: "PostgreSQL", category: "Databases" },
        { src: "https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white", alt: "SQLite", category: "Databases" },
        // Tools and Platforms
        { src: "https://img.shields.io/badge/Linode-00A95C?style=for-the-badge&logo=linode&logoColor=white", alt: "Linode", category: "Tools and Platforms" },
        { src: "https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white", alt: "Render", category: "Tools and Platforms" },
        { src: "https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white", alt: "Vercel", category: "Tools and Platforms" },
        { src: "https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE", alt: "Insomnia", category: "Tools and Platforms" },
        { src: "https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens", alt: "JWT", category: "Tools and Platforms" },
        { src: "https://img.shields.io/badge/Figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white", alt: "Figma", category: "Tools and Platforms" },
        // Extras
        { src: "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black", alt: "Linux", category: "Extras" },
    ]
    
  return (
    <section class="skills-section">
      <header>
        <h2>My Skills</h2>
      </header>
      <p>
        Embarking on my journey as a self-taught developer, I've navigated
        through numerous challenges, each one contributing to a broad and
        versatile skill set. From full stack engineering to venturing into
        system design, my path now leads me to the captivating field of deep
        learning.
      </p>
      <div class="skills-badges">
        {skillBadges.map((badge, index) => (
          <img
            key={index}
            src={badge.src}
            alt={badge.alt}
            title={badge.category}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;
