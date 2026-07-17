import "./PlantCard.css";
import { useNavigate } from "react-router-dom";
import { usePlants } from "../../context/PlantsContext";
import { useState } from "react";

function PlantCard({ plant }) {
  const navigate = useNavigate();
  const { addPlant } = usePlants();

  const [showMessage, setShowMessage] = useState(false);

  function handleAddPlant() {
    addPlant(plant);

    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  }

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

        <div className="card-buttons">
          <button
            className="add-button"
            onClick={handleAddPlant}
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

        {showMessage && (
          <div className="added-message">
            🌿 Plant added successfully!
          </div>
        )}
      </div>
    </article>
  );
}

export default PlantCard;