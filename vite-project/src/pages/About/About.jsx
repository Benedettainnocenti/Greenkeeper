import "./About.css";

function About() {
  return (
    <main className="about-page">

      <section className="about-hero">
        <div className="about-text">
          <h1>
            Welcome to <span>Greenkeeper</span> 🌱
          </h1>

          <p>
            Greenkeeper was born from the idea of ​​making the world of plants simpler, more accessible, and within everyone's reach.

          </p>
          <p>
           Whether you are looking for your first plant or are a seasoned enthusiast, our goal is to help you find the right species and learn how to care for it.

          </p>
        </div>

        <div className="about-image">
          🌿
        </div>
      </section>


      <section className="about-section">
        <h2>Our mission</h2>

        <p>
          Caring for a plant means understanding its needs. That is why Greenkeeper gathers useful information—on light, water, growing difficulty, and the characteristics of different species—into a single, intuitive platform.
        </p>

        <p>
          We want to transform plant care into a mindful, educational, and rewarding experience.
        </p>
      </section>


      <section className="features">

        <h2>What you can do with Greenkeeper</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <span>🔎</span>
            <h3>Discover plants</h3>
            <p>
              Explore an encyclopedia rich in diverse species.  
            </p>
          </div>


          <div className="feature-card">
            <span>🌱</span>
            <h3>Learn their needs</h3>
            <p>
              Find out about watering, light, and difficulty.
            </p>
          </div>


          <div className="feature-card">
            <span>🪴</span>
            <h3>Grow better</h3>
            <p>
              Find the plant best suited to your environment.
            </p>
          </div>


          <div className="feature-card">
            <span>💚</span>
            <h3>Enjoy nature</h3>
            <p>
              Bring more greenery into your daily life.
            </p>
          </div>

        </div>

      </section>


      <section className="about-tech">

        <h2>Built with technology & nature</h2>

        <p>
          Greenkeeper is a web project developed using React, JavaScript, and CSS, with a focus on user experience, intuitive navigation, and data management.
        </p>

      </section>


    </main>
  );
}

export default About;