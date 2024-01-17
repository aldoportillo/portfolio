import React from "react";

function Projects() {
  return (
    <section>
      <header>
        <h2>What I’ve been working on</h2>
      </header>
      <p>
        I'm deeply invested in scaling my skills both horizontally across new
        technologies and vertically by diving deeper into current projects. My
        portfolio showcases the projects I'm actively working on, each
        reflecting my dedication to not just broadening my tech horizon, but
        also deepening my expertise in every aspect of development.
      </p>
      <div>
        <article>
          <img
            src="https://res.cloudinary.com/dkhtrg1ts/image/upload/v1705443791/Portfolio/notr-card_exiwxh.png"
            alt="Neat on the Rocks Project"
            loading="lazy"
          />
          <h3>Neat on the Rocks</h3>
          <p>
            A personal project combining my love for bartending and chemistry.
            This MERN stack app lets users track drink nutrients, estimate BAC,
            and soon, connect with friends over their favorite drinks.
          </p>
        </article>
        <article>
          <img
            src="https://res.cloudinary.com/dkhtrg1ts/image/upload/v1705443791/Portfolio/btp-card_fptl63.png"
            alt="Body Track Pro Project"
            loading="lazy"
          />
          <h3>Body Track Pro</h3>
          <p>
            Fusing my interests in fitness and nutrition, I created this app to
            monitor health metrics and offer personalized nutrition plans. It's
            set to integrate with MFP and health devices for a seamless fitness
            tracking experience.
          </p>
        </article>
        <article>
          <img
            src="https://res.cloudinary.com/dkhtrg1ts/image/upload/v1705443792/Portfolio/vv-card_iyy8vv.png"
            alt="VinoValley Project"
            loading="lazy"
          />
          <h3>VinoValley</h3>
          <p>
            Born from my passion for wine, this app is designed to visually
            explore and understand wine regions and vineyards. Using a spatial
            database, it will bring the intricate details of wine making to
            enthusiasts' fingertips.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Projects;
