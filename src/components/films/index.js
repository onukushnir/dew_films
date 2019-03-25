import React from "react";
import PropTypes from "prop-types";
import FilmCard from "./FilmCard";

const FilmsList = ({ films }) => {
  return (
    <div className="ui four cards">
      {films.length === 0 ? (
        <div className="ui icon message">
          <i className="icon info" />
          <div className="content">
            <div className="header">No films yet in our database</div>
          </div>
        </div>
      ) : (
        films.map(film => <FilmCard key={film._id} film={film} />)
      )}
    </div>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired
};
FilmsList.defaultProps = {
  films: []
};

export default FilmsList;
