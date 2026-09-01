import { Link } from "react-router-dom";
import { usePlants } from "../../context/PlantsContext";
import plants from "../../data/plants.json";
import MyPlantCard from "../../components/MyPlantCard/MyplantCard.jsx";
import "./MyPlants.css";

function MyPlants() {
  const { myPlants } = usePlants();

  return (
    <main className="my-plants-page">

      <header className="my-plants-header">

        <h1>My Garden 🌿</h1>

        <p>
          Manage and take care of your plants.
        </p>

      </header>

      {myPlants.length === 0 ? (

        <section className="empty-garden">

          <h2>Your garden is empty 🌱</h2>

          <p>
            Start building your personal garden
            by adding your first plant.
          </p>

          <Link to="/plants">
            <button>
              Explore plants
            </button>
          </Link>

        </section>

      ) : (

        <section className="my-plants-grid">

          {myPlants.map((userPlant) => {

            const species = plants.find(
              (plant) =>
                plant.id === userPlant.speciesId
            );

            if (!species) {
              return null;
            }

            return (
              <MyPlantCard
                key={userPlant.id}
                userPlant={userPlant}
                species={species}
              />
            );
          })}

        </section>

      )}

    </main>
  );
}

export default MyPlants;