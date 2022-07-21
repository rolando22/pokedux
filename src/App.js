import React from 'react';
import { Col } from 'antd';
import { Searcher, PokemonList } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList />
    </div>
  );
}

export default App;
