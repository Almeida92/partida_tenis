import React, { Component } from 'react';
import Jogador from './Jogador';

class Placar extends Component {
    render() {
        return (
          <div id="placar">
              <Jogador numero="1"/>
              <Jogador numero="2"/>
          </div>
        );
      }
}

export default Placar;