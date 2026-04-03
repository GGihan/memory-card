import PokemonCard from "./PokemonCard";

export default function PokemonTray({ pokemonData, onCardClick }) {

  return (
    <div className="pokemon-card-tray">
      {pokemonData.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} onCardClick={ () => onCardClick(pokemon.id)} />
      ))}
    </div>
  );
}