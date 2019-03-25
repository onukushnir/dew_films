import React, { Component } from "react";
import FilmCard from "./films/FilmCard";
import { films } from "../data";

class App extends Component {
  state = {
    items: []
  };
  componentDidMount() {
    this.setState({ items: films });
  }

  render() {
    return (
      <div className="ui container pt-3">
        <FilmCard />
      </div>
    );
  }
}

export default App;
