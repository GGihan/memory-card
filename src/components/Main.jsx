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
  const [highScore, setHighScore] = useState(0);

  const currentScore = clickedIds.length;

  const updateHighScore = () => {
    const nextScore = currentScore + 1;
    setHighScore(prev => (nextScore > prev ? nextScore : prev));
  }

  const resetGame = () => {
    setClickedIds([]);
    setGameOver(false);
  }
  
  const handleRestartClick = () => {
    resetGame();
    setPokemonData(shuffleArray(pokemonData));
  }

  const handleCardPick = (id, array) => {
    if (isAlreadyPicked(id, array)) {
      setGameOver(true);
      return true;
    } else {
      setClickedIds((prev) => [...prev, id]);
    }
  }

  const handleCardClick = (id) => {
    if (gameOver) return;
    if (handleCardPick(id, clickedIds)) return;
    updateHighScore();
    setPokemonData(shuffleArray(pokemonData));
  };

  console.log(clickedIds);
  console.log(currentScore);
  console.log(highScore);

  return (
    <main>
      <PokemonApi onDataChange={setPokemonData} />
      <h2>Gotta catch them once!</h2>
      <button type="button" className="restart button" onClick={handleRestartClick}>Restart Game</button>
      <PokemonTray pokemonData={pokemonData} onCardClick={handleCardClick}/>
    </main>
  );
}