import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Spin } from 'antd';
import { Searcher, PokemonList } from './components';
import { getPokemons } from './api';
import { getPokemonsWithDetails, setLoading } from "./actions";
import logoPokedux from "./statics/logo.svg";
import './App.css';

function App() {
  const pokemons = useSelector(state => state.get('pokemons')).toJS();
  const loading = useSelector(state => state.get('loading'));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading());
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemons();
      dispatch(getPokemonsWithDetails(pokemonsRes));
    };
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logoPokedux} alt="logoPokedux"/>
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
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
