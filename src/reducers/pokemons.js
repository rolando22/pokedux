import { actionTypes } from "../actions/types";

const initialState = {
    pokemons: [],
};

const pokemonsReducerObj = (state, payload) => ({
    [actionTypes.SET_POKEMONS]: {
        ...state,
        pokemons: payload,
    },
});

const pokemonsReducer = (state = initialState, action) => (
    pokemonsReducerObj(state, action.payload)[action.type] || state
);

export { pokemonsReducer };