import { SPRITE_CONFIG } from "../constants";

const getPokemonSprite = (pokemon, config) => {
  if (!config) {
    return pokemon.sprites.front_default;
  }

  const [spriteType] = config; 
  return pokemon.sprites.other['official-artwork'][spriteType];
};

export default function PokemonCard({ pokemon, onCardClick }) {
  const config = SPRITE_CONFIG[pokemon.name];
  const spriteUrl = getPokemonSprite(pokemon, config);
  
  return (
    <div className="pokemon-card-container" onClick={onCardClick}>
      <img src={spriteUrl} alt={pokemon.name} style={{ width: 300 }} />
      <h2>{pokemon.name}</h2>
    </div>
  );
}