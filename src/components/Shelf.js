import React from "react";

import Book from "./Book";
import BookGrid from "./BookGrid";

function Shelf(props) {
  const { name, books } = props;
  return (
    books !== undefined && (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>
        <div className="bookshelf-books">
          <BookGrid books={books} />
        </div>
      </div>
    )
  );
}

export default Shelf;
