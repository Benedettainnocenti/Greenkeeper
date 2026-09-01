import { useNavigate } from "react-router-dom";
import { usePlants } from "../../context/PlantsContext";
import "./MyPlantCard.css";

function MyPlantCard({ userPlant, species }) {
  const navigate = useNavigate();

  const { removePlant, waterPlant } = usePlants();

  function handleRemove() {
    const confirmed = window.confirm(
      `Are you sure you want to remove "${userPlant.nickname}" from your garden?`
    );

    if (confirmed) {
      removePlant(userPlant.id);
    }
  }

  function handleWater() {
    waterPlant(userPlant.id);
  }

  return (
    <article className="my-plant-card">

      <img
        src={species.image}
        alt={userPlant.nickname}
        className="my-plant-image"
      />

      <div className="my-plant-content">

        <h2>{userPlant.nickname}</h2>

        <p className="my-plant-species">
          {species.scientificName}
        </p>

        {userPlant.location && (
          <p className="my-plant-location">
            📍 {userPlant.location}
          </p>
        )}

        <div className="my-plant-care">

          {userPlant.lastWatered ? (
            <p>
              💧 Last watered:{" "}
              {userPlant.lastWatered}
            </p>
          ) : (
            <p>
              💧 Not watered yet
            </p>
          )}

        </div>

        <div className="my-plant-actions">

          <button
            className="water-button"
            onClick={handleWater}
          >
            💧 Water
          </button>

          <button
            className="details-button"
            onClick={() =>
              navigate(`/myplants/${userPlant.id}`)
            }
          >
            View
          </button>

          <button
            className="remove-button"
            onClick={handleRemove}
          >
            Remove
          </button>

        </div>

      </div>

    </article>
  );
}

export default MyPlantCard;