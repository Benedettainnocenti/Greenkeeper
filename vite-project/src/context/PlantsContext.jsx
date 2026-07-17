import { createContext, useContext, useState } from "react";

const PlantsContext = createContext();

export function PlantsProvider({ children }) {
  const [myPlants, setMyPlants] = useState([]);

  function addPlant(plant) {
    setMyPlants((prev) => {
      if (prev.find((p) => p.id === plant.id)) return prev;
      return [...prev, plant];
    });
  }

  function removePlant(id) {
    setMyPlants((prev) => prev.filter((plant) => plant.id !== id));
  }

  return (
    <PlantsContext.Provider
      value={{
        myPlants,
        addPlant,
        removePlant,
      }}
    >
      {children}
    </PlantsContext.Provider>
  );
}

export function usePlants() {
  return useContext(PlantsContext);
}