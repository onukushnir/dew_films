import React, { Component } from "react";
import FilmsList from "./films";
import { films } from "../data";

class App extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    this.setState({ items: films });
  }

  render() {
    const { items } = this.state;
    return (
      <div className="ui container pt-3">
        <FilmsList films={items} />
      </div>
    );
  }
}

export default App;
