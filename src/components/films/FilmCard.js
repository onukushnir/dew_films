import React from "react";
import PropTypes from "prop-types";

const FilmCard = ({ film }) => {
  return (
    <div className="ui card">
      <a className="ui right corner label">
        <i className="empty star icon" />
      </a>
      <div className="image">
        <span className="ui green label ribbon">$ {film.price}</span>
        <img src={film.img} alt={film.title} />
      </div>

      <div className="content">
        <span className="header">{film.title}</span>
        <div className="meta">
          <i className="icon users" />
          {film.director}
          <span className="right floated">
            <i className="icon wait right" />
            {film.duration} min
          </span>
        </div>
      </div>
    </div>
  );
};

FilmCard.propTypes = {
  film: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    description: PropTypes.string,
    duration: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};

export default FilmCard;
