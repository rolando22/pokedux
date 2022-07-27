import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Col, Spin } from 'antd';
import { Searcher, PokemonList } from './components';
import { fetchPokemonsWithDetails, searchedPokemons } from './slices/dataSlice';
import logoPokedux from "./statics/logo.svg";
import './App.css';

function App() {
  const pokemons = useSelector(state => state.data.searchedPokemons, shallowEqual);
  const loading = useSelector(state => state.ui.loading);
  const dispatch = useDispatch();
  let searchValue;

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, []);

  const handleSearchePokemons = (event) => {
    dispatch(searchedPokemons(event.target.value));
  };

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logoPokedux} alt="logoPokedux"/>
      </Col>
      <Col span={8} offset={8}>
        <Searcher
          searchValue={searchValue}
          onChange={handleSearchePokemons}
        />
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin spinning size='large'/>
        </Col>
      ) : (
        <PokemonList pokemons={pokemons}/>
      )}
    </div>
  );
}

export default App;
