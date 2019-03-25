import React from "react";
import PropTypes from "prop-types";
import FilmCard from "./FilmCard";

const FilmsList = ({ films }) => {
  return (
    <div className="ui four cards">
      {films.map(film => (
        <FilmCard key={film._id} film={film} />
      ))}
    </div>
  );
};

export default FilmsList;
