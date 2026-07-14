import "./PlantCard.css";
import { useNavigate } from "react-router-dom";

function PlantCard({ plant, onAdd }) {

  const navigate = useNavigate();

  return (
    <article className="plant-card">

      <img
        src={plant.image}
        alt={plant.commonName}
      />

      <div className="plant-card-content">

        <h3>{plant.commonName}</h3>

        <p className="scientific-name">
          {plant.scientificName}
        </p>

        <div className="plant-info">

          <span>🌱 {plant.difficulty}</span>

          <span>☀️ {plant.care.light}</span>

        </div>

        <p>{plant.description}</p>

<div class="card-buttons">
        <button
          onClick={() => onAdd(plant)}
          className="add-button"
        >
          +
        </button>

        <button
          className="discover-more-btn"
          onClick={() => navigate(`/plants/${plant.slug}`)}
        >
          Discover More
        </button>
</div>
      </div>

    </article>
  );
}

export default PlantCard;