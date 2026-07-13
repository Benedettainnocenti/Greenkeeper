import "./Home.css";

import heroImage from "../../assets/images/greenkeeper-hero-background.svg";

function Home() {
  return (
    <main className="hero">

      <div
        className="hero-background"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>


      <div className="hero-overlay"></div>


      <section className="hero-content">

        <p className="hero-tag">
          🌱 Smart plant care assistant
        </p>


        <h1>
          Take care of your plants with intelligence
        </h1>


        <p className="hero-description">
          GreenKeeper helps you understand, monitor and protect
          your plants with personalized care suggestions.
        </p>


        <div className="hero-buttons">

          <button className="primary-button">
            Explore plants
          </button>

        </div>

      </section>

    </main>
  );
}

export default Home;