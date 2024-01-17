import React from "react";

function Intro() {
  return (
    <section>
      <header>
        <p>Hello world, </p>
        <h1>I am Aldo Portillo</h1>
        <h2>Software Engineer</h2>
      </header>
      <img
        src="https://res.cloudinary.com/dkhtrg1ts/image/upload/v1705461269/Portfolio/hqoqvmst7vves8bi4f24.jpg"
        alt="Aldo Portillo"
        loading="lazy"
        className="profile-image"
      />
      <article>
        <p>
          Welcome to my portfolio. Blending a diverse background in Chemistry,
          Coding, and Bartending, I bring a unique skill set and perspective to
          everything I do. Passionate about MMA, I value discipline and
          continual growth.
        </p>
        <p>
          My journey is driven by honor, respect, and a commitment to positively
          impact society. I eagerly embrace life's adventures and challenges,
          especially in software, mixology, martial arts, and personal
          development. I'm excited to connect and share this journey with you.
        </p>
      </article>
    </section>
  );
}

export default Intro;
