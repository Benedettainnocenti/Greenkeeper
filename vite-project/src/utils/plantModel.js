export function createUserPlant(plant) {
  return {
    // ID univoco dell'esemplare dell'utente
    id: crypto.randomUUID(),

    // Riferimento alla pianta presente in plants.json
    speciesId: plant.id,

    // Informazioni personali
    nickname: plant.commonName,
    location: "",
    acquiredAt: new Date().toISOString().split("T")[0],
    notes: "",

    // Cura
    lastWatered: null,

    // Per ora impostiamo 7 giorni perché
    // nel JSON "water" è "Once a week"
    wateringInterval: 7,

    // Storico delle cure
    history: []
  };
}