import { useState } from "react"
import PokemonApi from "./PokemonApi";
import PokemonCard from "./PokemonCard";

export default function Main() {
  const [pokemonData, setPokemonData] = useState([]);

  return (
    <div>
      <h1>My Sinnoh & Legends Team</h1>
      <PokemonApi onDataChange={setPokemonData} /> 
      <div className="grid">
        {pokemonData.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon}/>
        ))}
      </div>
    </div>
  );
}