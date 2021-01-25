import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as BooksAPI from "../BooksAPI";

function Book({ book, updateHome = null }) {
  const [selectedValue, setSelectedValue] = useState("move");

  const imageLink = () => {
    if (!book.imageLinks) {
      return "";
    }
    if (book.imageLinks.thumbnail) {
      return `url(${book.imageLinks.thumbnail})`;
    }
    if (book.imageLinks.smallThumbnail) {
      return `url(${book.imageLinks.smallThumbnail})`;
    }
    return "";
  };

  const handleChange = event => {
    event.persist();
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    BooksAPI.update({ id: book.id }, selectedValue).then(
      msg => {
        console.log(`BookAPI update success  ${msg}`);
        updateHome && updateHome();
      },
      msg => console.log(`BookAPI update failed  ${msg}`)
    );
  }, [selectedValue]);

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: imageLink()
          }}
        ></div>
        <div className="book-shelf-changer">
          <select value={selectedValue} onChange={handleChange}>
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {Array.isArray(book.author) ? book.authors.join() : "Unknown"}
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateHome: PropTypes.func
};

export default Book;
