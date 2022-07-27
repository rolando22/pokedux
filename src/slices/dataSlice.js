import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemons, getPokemonsDetails } from "../api";
import { setLoading } from "./uiSlice";

const initialState = {
    pokemons: [],
};

const fetchPokemonsWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (_, { dispatch }) => {
        dispatch(setLoading(true));
        const pokemonsRes = await getPokemons();
        const pokemonsDetailed = await Promise.all(
            pokemonsRes.map(pokemon => getPokemonsDetails(pokemon))
        );
        dispatch(setPokemons(pokemonsDetailed));
        dispatch(setLoading(false));
    }
);

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
        },
        setFavorite: (state, action) => {
            const currentPokemonIndex = state.pokemons.findIndex(
                pokemon => pokemon.id === action.payload
            );
            if (currentPokemonIndex >= 0) {
                const favorite = state.pokemons[currentPokemonIndex].favorite;
                state.pokemons[currentPokemonIndex].favorite = !favorite;
            };
        },
    },
});

export { dataSlice, fetchPokemonsWithDetails };
export const { setPokemons, setFavorite } = dataSlice.actions;
export default dataSlice.reducer;