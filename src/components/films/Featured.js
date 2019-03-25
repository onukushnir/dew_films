import React from "react";
import PropTypes from "prop-types";

const Featured = ({ featured }) => {
  const cls = featured ? "yellow" : "empty";
  return (
    <span className="ui right corner label">
      <i className={`star icon ${cls}`} />
    </span>
  );
};
Featured.propTypes = {
  featured: PropTypes.bool.isRequired
};

export default Featured;
