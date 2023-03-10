import { fromJS } from "immutable";
import { actionTypes } from "../actions/types";

const initialState = fromJS({
    pokemons: [],
});

const updateFavorite = (state, payload) => {
    const currentPokemonIndex = state.get('pokemons').findIndex(
        pokemon => pokemon.get('id') === payload
    );
    if (currentPokemonIndex < 0) {
        return state;
    };
    const favorite = state.getIn(['pokemons', currentPokemonIndex, 'favorite']);
    return state.setIn(['pokemons', currentPokemonIndex, 'favorite'], !favorite);
};

const pokemonsReducerObj = (state, payload) => ({
    [actionTypes.SET_POKEMONS]: state.setIn(['pokemons'], fromJS(payload)),
    [actionTypes.SET_FAVORITE]: updateFavorite(state, payload),
});

const pokemonsReducer = (state = initialState, action) => (
    pokemonsReducerObj(state, action.payload)[action.type] || state
);

export { pokemonsReducer };