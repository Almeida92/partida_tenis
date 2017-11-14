import React, { Component } from 'react';
import './App.css';
import Placar from  './placar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Partida de Tênis</h1>
          <Placar j1="15"/>
        </header>
      </div>
    );
  }
}

export default App;
