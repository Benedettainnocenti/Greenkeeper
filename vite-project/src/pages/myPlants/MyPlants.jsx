import { usePlants } from "../../context/PlantsContext";
import PlantCard from "../../components/PlantCard/PlantCard";

function MyPlants() {

  const { myPlants } = usePlants();

  return (
    <main className="myplants">

      <h1>🌿 My Plants</h1>

      {myPlants.length === 0 ? (
        <p>You haven't added any plants yet.</p>
      ) : (
        <div className="plants-grid">
          {myPlants.map((plant) => (
            <PlantCard
              key={plant.id}
              plant={plant}
            />
          ))}
        </div>
      )}

    </main>
  );
}

export default MyPlants;