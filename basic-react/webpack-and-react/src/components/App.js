import React, { Component } from 'react';
import Pokemon from './Pokemon';

class App extends Component {

    state = {
       pokemon: {
         name: 'NONE'
       },
       id: this.randomNum()
    }

    search() {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.id}`)
        .then(res => res.json())
        .then((pokemon) => {
          this.setState({ pokemon })
        })
        .catch(console.log)
      }

    randomNum () {
      const min = Math.ceil(1);
      const max = Math.floor(101);
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    getPokemon = () => {
      const ranNum = this.randomNum();
      this.setState({ id: ranNum });
      this.search();
    }

    render(){
        return (
            <div>
                <Pokemon pokemon={this.state.pokemon}/>
                <center><button onClick={this.getPokemon}>Random</button></center>
            </div>
        )}
};

export default App;