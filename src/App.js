import React, { Component } from 'react';
import './App.css';
import Placar from  './placar';
import MarcarButton from './MarcarButton';
import SelectJogador from './SelectJogador';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Partida de Tênis</h1>
          <Placar j1="15"/>
        </header>
        <MarcarButton jogador={<SelectJogador />} />
        <SelectJogador />
      </div>
    );
  }
}

export default App;
