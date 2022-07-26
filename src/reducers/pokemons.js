import { actionTypes } from "../actions/types";

const initialState = {
    pokemons: [],
    loading: false,
};

const pokemonsReducerObj = (state, payload) => ({
    [actionTypes.SET_POKEMONS]: {
        ...state,
        pokemons: payload,
        loading: false,
    },
    [actionTypes.SET_LOADING]: {
        ...state,
        loading: true,
    },
});

const pokemonsReducer = (state = initialState, action) => (
    pokemonsReducerObj(state, action.payload)[action.type] || state
);

export { pokemonsReducer };