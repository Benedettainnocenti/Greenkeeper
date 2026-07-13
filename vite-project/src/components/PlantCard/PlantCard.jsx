import "./PlantCard.css";

function PlantCard({ plant, onAdd }) {

  return (
    <article className="plant-card">

      <img 
        src={plant.image}
        alt={plant.commonName}
      />

      <div className="plant-card-content">

        <h3>{plant.name}</h3>

        <p className="scientific-name">
          {plant.scientificName}
        </p>


        <div className="plant-info">

          <span>
            🌱 {plant.difficulty}
          </span>

          <span>
            ☀️ {plant.light}
          </span>

        </div>


        <p>
          {plant.description}
        </p>


        <button
          onClick={() => onAdd(plant)}
          className="add-button"
        >
          +
        </button>

      </div>

    </article>
  );
}

export default PlantCard;