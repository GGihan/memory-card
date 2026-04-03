import PokemonCard from "./PokemonCard";

export default function PokemonTray({ pokemonData, onCardClick }) {

  return (
    <div className="pokemon-card-tray">
      <h2>Gotta catch them all! (Only Once!)</h2>
      <div>
        {pokemonData.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} onCardClick={ () => onCardClick(pokemon.id)} />
        ))}
      </div>
    </div>
  );
}