import React from "react";
import PropTypes from "prop-types";

import BookGrid from "./BookGrid";

function Shelf({ name, books, updateHome }) {
  return (
    books !== undefined && (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>
        <div className="bookshelf-books">
          <BookGrid books={books} updateHome={updateHome} />
        </div>
      </div>
    )
  );
}

Shelf.propTypes = {
  name: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateHome: PropTypes.func.isRequired
};

export default Shelf;
