import React, { Component } from 'react';
import Jogador from './Jogador';

class Placar extends Component {
    render() {
        return (
          <div id="placar">
              <Jogador numero="1" pontos="0" />
              <Jogador numero="2" pontos="0" />
          </div>
        );
      }
}

export default Placar;