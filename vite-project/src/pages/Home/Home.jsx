import "./Home.css";
import { Link } from "react-router-dom";

import heroImage from "/images/greenkeeper-hero-background.svg";

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
          your plants.
        </p>


        <div className="hero-buttons">
          <Link to="/encyclopedia">
            <button className="primary-button">
            Explora plants
            </button>
          </Link>
    
           <button className="primary-button">
            Add a plant
          </button>
          <button className="primary-button">
            Join community
          </button>

        </div>

      </section>

    </main>
  );
}

export default Home;