import React, { Component } from "react";
import _sortBy from "lodash/sortBy";
import FilmsList from "./films";
import { films } from "../data";

class App extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    this.setState({ items: _sortBy(films, ["title"]) });
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
