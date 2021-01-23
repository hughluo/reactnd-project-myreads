import React from "react";

import Book from "./Book";

function Shelf(props) {
  const { name, books } = props;
  return (
    books !== undefined && (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => (
              <li>
                <Book book />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  );
}

export default Shelf;
