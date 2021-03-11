import React, { Component } from 'react';
import pokedeck from '../static/pokedeck.png';
import pokeBackground from '../static/background-card.jpeg';
import pockemonBall from '../static/pockemonBall.png';
class PokeRandom extends Component {

    state = {
       pokemon: {
          name: 'NONE',
          id: this.randomNum(),
        },
        photo: pockemonBall,
        background: pokeBackground
    }

    search() {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.id}`)
        .then(res => res.json())
        .then((pokemon) => {
          this.setState({ photo: pokemon.sprites.front_default }),
          this.setState({ pokemon })
        })
        .catch(console.log)
      }

    randomNum () {
      const min = Math.ceil(1);
      const max = Math.floor(151);
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    getPokemon = () => {
      const ranNum = this.randomNum();
      this.setState({ id: ranNum });
      this.search();
    }

    render(){
      return (
        <div className="container">
          <img src={pokedeck} height="500"/>
          <img className="top-left" src={this.state.background}/>
          <img className="top-left-img" src={this.state.photo}/>
          <h1 className="top-right">{this.state.pokemon.name}</h1>
          <p className="bottom-left" onClick={this.getPokemon}>Random</p>
        </div>
      )}
};

export default PokeRandom;