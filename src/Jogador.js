import React, { Component } from 'react';

class Jogador extends Component {
    render() {
        return (
            <p>JOGADOR {this.props.numero}: <span>{this.props.pontos}</span></p>
        );
      }
}

export default Jogador;