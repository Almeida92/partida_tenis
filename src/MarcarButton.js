import React, { Component } from 'react';

class MarcarButton extends Component {
    marcar = () => {
        console.log('this is', this.props.jogador);
    }

    render() {
        return (
            <button id="btn-marcar" onClick={this.marcar}>
                Marcar
            </button>
        );
    }
}

export default MarcarButton;