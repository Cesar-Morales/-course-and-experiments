import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import pf from "petfinder-client";
import { Provider } from "./SearchContext";
import Results from "./Results";
import Details from "./Details";
import SearchParams from "./SearchParams";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET,
});
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "Seattle, WA",
      animal: "",
      breed: "",
      breeds: [],
      handleAnimalChange: this.handleAnimalChange,
      handleBreedChange: this.handleBreedChange,
      handleLocationChange: this.handleLocationChange,
      getBreeds: this.getBreeds,
    };
  }

  handleLocationChange = (event) => {
    this.setState({
      location: event.target.value,
    });
  };
  handleAnimalChange = (event) => {
    this.setState(
      {
        animal: event.target.value,
        breed: "",
      },
      this.getBreeds
    );
  };
  handleBreedChange = (e) => {
    this.setState({
      breed: e.target.value,
    });
  };
  getBreeds() {
    if (this.state.animal) {
      petfinder.breed.list({ animal: this.state.animal }).then((data) => {
        if (
          data.petfinder &&
          data.petfinder.breeds &&
          Array.isArray(data.petfinder.breeds.breed)
        ) {
          this.setState({
            breeds: data.petfinder.breeds.breed,
          });
        } else {
          this.setState({ breeds: [] });
        }
      });
    } else {
      this.setState({ breeds: [] });
    }
  }

  render() {
    const obj = {
      animal: "dog",
      name: "Dona",
    };
    return (
      <div>
        <Link to="/">
          <h1>ADOPT ME</h1>
        </Link>
        <Provider value={this.state}>
          <Router>
            <Results
              /*pet={obj} name={obj.name} animal={obj.animal} same -->*/ {...obj}
              path="/"
            />
            <Details path="/details/:id" />
            <SearchParams path="/search-params" />
          </Router>
        </Provider>
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));
