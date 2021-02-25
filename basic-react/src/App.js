import React from "react";
import { render } from "react-dom";
import Songs from "./Songs";

//Class component
class App extends React.Component {
  handleTitleClick() {
    alert("you clicked the title");
  }
  render() {
    return React.createElement("div", {}, [
      React.createElement("h1", { onClick: this.handleTitleClick }, "Playlist"),
      React.createElement("hr"),
      React.createElement(Songs, {
        name: "Barbazul",
        album: "Glup",
        interpreter: "Patricio Rey",
        genero: "Rock",
      }),
      React.createElement(Songs, {
        name: "Cantatas de Puentes Amarillos",
        album: "Artaud",
        interpreter: "Luis Alberto",
        genero: "Rock",
      }),
    ]);
  }
}

/*
 * function component
const App = () => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, 'Playlist'),
        React.createElement('hr'),
        React.createElement(Songs, {
            name:"Barbazul",
            album:"Glup",
            interpreter:"Patricio Rey",
            genero:"Rock"
        }),
        React.createElement(Songs, {
            name:"Cantatas de Puentes Amarillos",
            album:"Artaud",
            interpreter:"Luis Alberto",
            genero:"Rock"
        })
    ])
}*/

render(React.createElement(App), document.getElementById("root"));
