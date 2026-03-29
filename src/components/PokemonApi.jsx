import { useEffect } from "react";
import { SPRITE_CONFIG } from "../constants";

const POKEMON_NAMES = Object.keys(SPRITE_CONFIG);

export default function PokemonApi({ onDataChange }) {

  useEffect(() => {
    const fetchPokemon = async () => {
      const saved = localStorage.getItem("myPokemonTeam");
      if (saved) {
        onDataChange(JSON.parse(saved));
        return;
      }

      try {
        const promises = POKEMON_NAMES.map(async (name) => {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
          return await response.json();
        });

        const results = await Promise.all(promises);
        localStorage.setItem("myPokemonTeam", JSON.stringify(results));
        onDataChange(results);
      } catch (error) {
        console.error("Fetch failed:", error);
      }
    };

    fetchPokemon();
  }, [onDataChange]);

  return null;
}