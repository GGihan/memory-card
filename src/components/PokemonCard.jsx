import { SPRITE_CONFIG, TYPE_COLORS } from "../constants";

const getPokemonSprite = (pokemon, config) => {
  if (!config) {
    return pokemon.sprites.front_default;
  }

  const [spriteType] = config; 
  return pokemon.sprites.other['official-artwork'][spriteType];
};

const getPokemonBackgroundColor = (pokemon, config) => {
  const pokemonType = pokemon.types[0].type.name;
  const backgroundColor = config[pokemonType];
  return backgroundColor;
}

export default function PokemonCard({ pokemon, onCardClick, onKeyDown }) {
  const spriteConfig = SPRITE_CONFIG[pokemon.name];
  const spriteUrl = getPokemonSprite(pokemon, spriteConfig);
  const typeConfig = TYPE_COLORS;
  const backgroundColor = getPokemonBackgroundColor(pokemon, typeConfig);
  const upperCaseName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  
  return (
    <div
      className="pokemon-card-container"
      onClick={onCardClick}
      onKeyDown={onKeyDown}
      tabIndex="0"
      role="button"
      aria-label={pokemon.name}
    >
      <img src={spriteUrl} alt={pokemon.name} style={{ backgroundColor }} />
      <p>{upperCaseName}</p>
    </div>
  );
}