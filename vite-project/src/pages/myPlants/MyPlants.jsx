import { usePlants } from "../../context/PlantsContext";
import PlantCard from "../../components/PlantCard/PlantCard";
import plants from "../../data/plants.json";

function MyPlants() {

  const { myPlants } = usePlants();

  return (
    <main className="myplants">

      <h1>🌿 My Plants</h1>

      {myPlants.length === 0 ? (
        <p>You haven't added any plants yet.</p>
      ) : (
        <div className="plants-grid">
          {myPlants.map((userPlant) => {
  const species = plants.find(
    (plant) => plant.id === userPlant.speciesId
  );

  return (
    <PlantCard
      key={userPlant.id}
      plant={species}
    />
  );
})}
        </div>
      )}

    </main>
  );
}

export default MyPlants;