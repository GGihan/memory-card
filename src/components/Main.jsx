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

const isAlreadyPicked = (id, array) => array.includes(id);

export default function Main() {
  const [pokemonData, setPokemonData] = useState([]);
  const [clickedIds, setClickedIds] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const handleCardPick = (id, array) => {
    if (isAlreadyPicked(id, array)) {
      setGameOver(true);
      return true;
    } else {
      setClickedIds((prev) => [...prev, id]);
    }
  }

  const resetGame = () => {
    setClickedIds([]);
    setGameOver(false);
  }

  const handleCardClick = (id) => {
    console.log(id);
    if (gameOver) return;
    if (handleCardPick(id, clickedIds)) return;
    const shuffledPokemonData = shuffleArray(pokemonData);
    setPokemonData(shuffledPokemonData);
  };

  console.log(clickedIds);

  return (
    <div>
      <PokemonApi onDataChange={setPokemonData} />
      <PokemonTray pokemonData={pokemonData} onCardClick={handleCardClick}/>
    </div>
  );
}