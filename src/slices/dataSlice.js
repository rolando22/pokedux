import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemons, getPokemonsDetails } from "../api";
import { setLoading } from "./uiSlice";

const initialState = {
    pokemons: [],
    searchedPokemons: [],
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
        dispatch(searchedPokemons());
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
        searchedPokemons: (state, action) => {
            if (action.payload) {
                state.searchedPokemons = state.pokemons.filter((pokemon) => {
                    const pokemonName = pokemon.name.toLowerCase();
                    const searchedText = action.payload.toLowerCase();
                    return pokemonName.includes(searchedText);
            });
            } else {
                state.searchedPokemons = state.pokemons;
            };
        },
    },
});

export { dataSlice, fetchPokemonsWithDetails };
export const { setPokemons, setFavorite, searchedPokemons } = dataSlice.actions;
export default dataSlice.reducer;