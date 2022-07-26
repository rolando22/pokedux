import { actionTypes } from "../actions/types";

const initialState = {
    pokemons: [],
    loading: false,
};

const setFavorite = (state, payload) => {
    const newPokemons = [...state.pokemons];
    const currentPokemonIndex = newPokemons.findIndex(pokemon => pokemon.id === payload);
    if (currentPokemonIndex < 0) {
        return state;
    };
    newPokemons[currentPokemonIndex].favorite = !newPokemons[currentPokemonIndex].favorite;
    return {
        ...state,
        pokemons: newPokemons,
    };
};

const pokemonsReducerObj = (state, payload) => ({
    [actionTypes.SET_POKEMONS]: {
        ...state,
        pokemons: payload,
        loading: false,
    },
    [actionTypes.SET_FAVORITE]: setFavorite(state, payload),
    [actionTypes.SET_LOADING]: {
        ...state,
        loading: true,
    },
});

const pokemonsReducer = (state = initialState, action) => (
    pokemonsReducerObj(state, action.payload)[action.type] || state
);

export { pokemonsReducer };