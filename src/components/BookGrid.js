import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import Book from "./Book";

function BookGrid(props) {
  const { books } = props;
  return (
    <div>
      <ol className="books-grid" key={uuidv4()}>
        {books.map(book => (
          <li key={book.id}>
            <Book book={book} />
          </li>
        ))}
      </ol>
    </div>
  );
}

BookGrid.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default BookGrid;
