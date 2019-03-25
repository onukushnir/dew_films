import React from "react";
import PropTypes from "prop-types";

const FilmCard = props => {
  return (
    <div className="ui card">
      <a className="ui right corner label">
        <i className="empty star icon" />
      </a>
      <div className="image">
        <span className="ui green label ribbon">$ 220 </span>
        <img src="img/seeker.jpg" alt="" />
      </div>

      <div className="content">
        <a href="#" className="header">
          Legend of the seeker
        </a>
        <div className="meta">
          <i className="icon users" /> Film Director
          <span className="right floated">
            <i className="icon wait right" /> 180 min
          </span>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
