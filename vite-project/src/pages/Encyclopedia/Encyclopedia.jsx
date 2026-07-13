import { useState } from "react";

import plantsData from "../../data/plants.json";

import PlantCard from "../../components/PlantCard/PlantCard";

import "./Encyclopedia.css";


function Encyclopedia() {


  const [search, setSearch] = useState("");

  const [difficulty, setDifficulty] = useState("All");


  const filteredPlants = plantsData.filter((plant)=>{


    const matchesSearch =
      plant.name
      .toLowerCase()
      .includes(search.toLowerCase());


    const matchesDifficulty =
      difficulty === "All" ||
      plant.difficulty === difficulty;


    return matchesSearch && matchesDifficulty;

  });



  function addPlant(plant){

    console.log(
      "Added:",
      plant.name
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

          <option>
            All
          </option>

          <option>
            Easy
          </option>

          <option>
            Medium
          </option>

          <option>
            Very Easy
          </option>

        </select>


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