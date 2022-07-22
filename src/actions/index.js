import { actionTypes } from "./types";

const setPokemons = (payload) => ({
    type: actionTypes.SET_POKEMONS,
    payload,
});

export { setPokemons };