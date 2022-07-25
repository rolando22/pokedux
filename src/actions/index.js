import { actionTypes } from "./types";
import { getPokemonsDetails } from "../api";

const setPokemons = (payload) => ({
    type: actionTypes.SET_POKEMONS,
    payload,
});

const getPokemonsWithDetails = (pokemons) => async (dispatch) => {
    const pokemonsDetailed = await Promise.all(pokemons.map(pokemon => getPokemonsDetails(pokemon)));
    dispatch(setPokemons(pokemonsDetailed));
};

export { setPokemons, getPokemonsWithDetails };