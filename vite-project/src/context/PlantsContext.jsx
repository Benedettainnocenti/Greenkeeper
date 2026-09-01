import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

import { createUserPlant } from "../utils/plantModel";

const PlantsContext = createContext();

export function PlantsProvider({ children }) {

  // Recupera le piante salvate nel localStorage
  const [myPlants, setMyPlants] = useState(() => {
    try {
      const savedPlants = localStorage.getItem(
        "greenkeeper-plants"
      );

      return savedPlants
        ? JSON.parse(savedPlants)
        : [];
    } catch (error) {
      console.error(
        "Errore nel caricamento delle piante:",
        error
      );

      return [];
    }
  });


  // Salva automaticamente le piante
  // ogni volta che myPlants cambia
  useEffect(() => {
    try {
      localStorage.setItem(
        "greenkeeper-plants",
        JSON.stringify(myPlants)
      );
    } catch (error) {
      console.error(
        "Errore nel salvataggio delle piante:",
        error
      );
    }
  }, [myPlants]);


  // ----------------------------------------
  // AGGIUNGI UNA PIANTA
  // ----------------------------------------

  const addPlant = (plant) => {
    setMyPlants((currentPlants) => {

      const userPlant = createUserPlant(plant);

      return [
        ...currentPlants,
        userPlant
      ];
    });
  };


  // ----------------------------------------
  // RIMUOVI UNA PIANTA
  // ----------------------------------------

  const removePlant = (id) => {
    setMyPlants((currentPlants) =>
      currentPlants.filter(
        (plant) => plant.id !== id
      )
    );
  };


  // ----------------------------------------
  // MODIFICA UNA PIANTA
  // ----------------------------------------

  const updatePlant = (id, updates) => {
    setMyPlants((currentPlants) =>
      currentPlants.map((plant) =>
        plant.id === id
          ? {
              ...plant,
              ...updates
            }
          : plant
      )
    );
  };


  // ----------------------------------------
  // ANNAFFIA UNA PIANTA
  // ----------------------------------------

  const waterPlant = (id) => {

    const today = new Date()
      .toISOString()
      .split("T")[0];

    setMyPlants((currentPlants) =>
      currentPlants.map((plant) => {

        if (plant.id !== id) {
          return plant;
        }

        const wateringEvent = {
          id: crypto.randomUUID(),
          type: "watering",
          date: today
        };

        return {
          ...plant,

          lastWatered: today,

          history: [
            ...(plant.history || []),
            wateringEvent
          ]
        };
      })
    );
  };


  // ----------------------------------------
  // AGGIUNGI EVENTO DI CURA
  // ----------------------------------------

  const addCareEvent = (
    id,
    type,
    notes = ""
  ) => {

    const today = new Date()
      .toISOString()
      .split("T")[0];

    const careEvent = {
      id: crypto.randomUUID(),
      type,
      date: today,
      notes
    };

    setMyPlants((currentPlants) =>
      currentPlants.map((plant) =>
        plant.id === id
          ? {
              ...plant,

              history: [
                ...(plant.history || []),
                careEvent
              ]
            }
          : plant
      )
    );
  };


  // ----------------------------------------
  // SVUOTA IL GIARDINO
  // ----------------------------------------

  const clearGarden = () => {
    setMyPlants([]);
  };


  // ----------------------------------------
  // VALORE DEL CONTEXT
  // ----------------------------------------

  const value = {
    myPlants,

    addPlant,
    removePlant,
    updatePlant,

    waterPlant,
    addCareEvent,

    clearGarden
  };


  return (
    <PlantsContext.Provider value={value}>
      {children}
    </PlantsContext.Provider>
  );
}


// ----------------------------------------
// CUSTOM HOOK
// ----------------------------------------

export function usePlants() {

  const context = useContext(PlantsContext);

  if (!context) {
    throw new Error(
      "usePlants deve essere utilizzato dentro PlantsProvider"
    );
  }

  return context;
}