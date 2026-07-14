import { useParams, Link } from "react-router-dom";
import plants from "../../data/plants.json";
import "./PlantsDetails.css";

function PlantDetails() {
  const { slug } = useParams();

  const plant = plants.find((p) => p.slug === slug);

  if (!plant) {
    return (
      <div className="plant-details-not-found">
        <h2>Plant not found 🌱</h2>

        <Link to="/">
          <button>Back Home</button>
        </Link>
      </div>
    );
  }

  return (
    <main className="plant-details">

      <Link to="/" className="back-btn">
        ← Back
      </Link>

      <section className="hero">

        <img
          src={plant.image}
          alt={plant.commonName}
          className="hero-image"
        />

        <div className="hero-info">

          <h1>{plant.commonName}</h1>

          <h3>{plant.scientificName}</h3>

          <p>{plant.description}</p>

        </div>

      </section>

      <section className="info-grid">

        <div className="card">
          <h2>General Information</h2>

          <p><strong>Family:</strong> {plant.family}</p>

          <p><strong>Origin:</strong> {plant.origin}</p>

          <p><strong>Category:</strong> {plant.category}</p>

          <p><strong>Difficulty:</strong> {plant.difficulty}</p>

          <p><strong>Indoor:</strong> {plant.features.indoor ? "Yes" : "No"}</p>

          <p><strong>Pet Safe:</strong> {plant.features.petSafe ? "Yes" : "No"}</p>

          <p><strong>Air Purifying:</strong> {plant.features.airPurifying ? "Yes" : "No"}</p>

          <p><strong>Toxicity:</strong> {plant.toxicity}</p>

        </div>

        <div className="card">

          <h2>Care</h2>

          <p><strong>☀️ Light:</strong> {plant.care.light}</p>

          <p><strong>💧 Water:</strong> {plant.care.water}</p>

          <p><strong>💦 Humidity:</strong> {plant.care.humidity}</p>

          <p><strong>🌡 Temperature:</strong> {plant.care.temperature}</p>

          <p><strong>🪴 Soil:</strong> {plant.care.soil}</p>

          <p><strong>🌱 Fertilizer:</strong> {plant.care.fertilizer}</p>

          <p><strong>🪴 Repotting:</strong> {plant.care.repotting}</p>

        </div>

        <div className="card">

          <h2>Growth</h2>

          <p><strong>Growth Rate:</strong> {plant.growth.rate}</p>

          <p><strong>Height:</strong> {plant.growth.height}</p>

          <p><strong>Flowering:</strong> {plant.growth.flowering}</p>

          <p><strong>Lifespan:</strong> {plant.growth.lifespan}</p>

          <p><strong>Propagation:</strong> {plant.propagation}</p>

        </div>

      </section>

      <section className="card">

        <h2>Common Problems</h2>

        <ul>

          {plant.commonProblems.map((problem, index) => (
            <li key={index}>{problem}</li>
          ))}

        </ul>

      </section>

      <section className="card">

        <h2>Tips</h2>

        <ul>

          {plant.tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}

        </ul>

      </section>

      <section className="card">

        <h2>Interesting Fact</h2>

        <p>{plant.interestingFact}</p>

      </section>

    </main>
  );
}

export default PlantDetails;