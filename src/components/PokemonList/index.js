import React from "react";
import { PokemonCard } from "../";
import "./PokemonList.css";

function PokemonList ({ pokemons }) {
    return (
        <div className="PokemonList">
            {pokemons.map(pokemon => (
                <PokemonCard
                    pokemon={pokemon}
                    key={pokemon.name}
                />
            ))}
        </div> 
    );
};

export { PokemonList };