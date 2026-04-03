import { useState } from "react"
import PokemonApi from "./PokemonApi";
import PokemonTray from "./PokemonTray";

const shuffleArray = (array) => {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

export default function Main() {
  const [pokemonData, setPokemonData] = useState([]);

  const handleCardClick = (id) => {
    console.log(id);
    const shuffledPokemonData = shuffleArray(pokemonData);
    setPokemonData(shuffledPokemonData);
  };

  return (
    <div>
      <PokemonApi onDataChange={setPokemonData} />
      <PokemonTray pokemonData={pokemonData} onCardClick={handleCardClick}/>
    </div>
  );
}