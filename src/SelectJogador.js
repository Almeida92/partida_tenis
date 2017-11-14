import React, { Component } from 'react';

class SelectJogador extends Component {
    render() {
        return (
          <select>
              <option value="1">Jogador 1</option>
              <option value="2">Jogador 2</option>
          </select>
        );
      }
}

export default SelectJogador;