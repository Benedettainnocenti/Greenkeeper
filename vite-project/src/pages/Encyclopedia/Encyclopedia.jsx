import { useState } from "react";

import plantsData from "../../data/plants.json";

import PlantCard from "../../components/PlantCard/PlantCard";

import "./Encyclopedia.css";


function Encyclopedia() {


  const [search, setSearch] = useState("");

  const [difficulty, setDifficulty] = useState("All");

  const [category, setCategory] = useState("All");

  const [petSafe, setPetSafe] = useState(false);

  const [airPurifying, setAirPurifying] = useState(false);

  const [indoor, setIndoor] = useState(false);



  const categories = [
    "All",
    ...new Set(plantsData.map((plant)=>plant.category))
  ];



  const filteredPlants = plantsData.filter((plant)=>{


    const matchesSearch =
      plant.commonName
      .toLowerCase()
      .includes(search.toLowerCase());



    const matchesDifficulty =
      difficulty === "All" ||
      plant.difficulty === difficulty;



    const matchesCategory =
      category === "All" ||
      plant.category === category;



    const matchesPetSafe =
      !petSafe ||
      plant.features.petSafe;



    const matchesAirPurifying =
      !airPurifying ||
      plant.features.airPurifying;



    const matchesIndoor =
      !indoor ||
      plant.features.indoor;



    return (
      matchesSearch &&
      matchesDifficulty &&
      matchesCategory &&
      matchesPetSafe &&
      matchesAirPurifying &&
      matchesIndoor
    );


  });



  function addPlant(plant){

    console.log(
      "Added:",
      plant.commonName
    );

  }



  return (

    <main className="encyclopedia">


      <h1>
        Plant Encyclopedia 🌿
      </h1>



      <div className="filters">


        <input
          type="text"
          placeholder="Search a plant..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />



        <select
          value={difficulty}
          onChange={(e)=>setDifficulty(e.target.value)}
        >

          <option>All</option>
          <option>Very Easy</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>

        </select>



        <select
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
        >

          {
            categories.map((cat)=>(
              <option key={cat}>
                {cat}
              </option>
            ))
          }

        </select>



        <button
          type="button"
          className={`filter-chip ${petSafe ? "active" : ""}`}
          onClick={()=>setPetSafe(!petSafe)}
        >
          🐶 Pet safe
        </button>



        <button
          type="button"
          className={`filter-chip ${airPurifying ? "active" : ""}`}
          onClick={()=>setAirPurifying(!airPurifying)}
        >
          🌬️ Air purifying
        </button>



        <button
          type="button"
          className={`filter-chip ${indoor ? "active" : ""}`}
          onClick={()=>setIndoor(!indoor)}
        >
          🏠 Indoor
        </button>



      </div>




      <section className="plant-grid">

        {
          filteredPlants.map((plant)=>(

            <PlantCard
              key={plant.id}
              plant={plant}
              onAdd={addPlant}
            />

          ))
        }

      </section>


    </main>

  );

}


export default Encyclopedia;