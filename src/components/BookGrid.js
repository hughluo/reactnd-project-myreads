import React from "react";

import Book from "./Book";

function BookGrid(props) {
  const { books } = props;
  return (
    books !== undefined && (
      <div>
        <ol className="books-grid">
          {books.map(book => (
            <li>
              <Book book />
            </li>
          ))}
        </ol>
      </div>
    )
  );
}

export default BookGrid;
