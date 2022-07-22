import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Col } from 'antd';
import { Searcher, PokemonList } from './components';
import { getPokemons } from './api';
import { setPokemons as setPokemonsAction } from "./actions";
import logoPokedux from "./statics/logo.svg";
import './App.css';

function App({ pokemons, setPokemons }) {
  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemons();
      setPokemons(pokemonsRes);
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
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispath) => ({
  setPokemons: (value) => dispath(setPokemonsAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
