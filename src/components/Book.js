import React from "react";
import PropTypes from "prop-types";
import * as BooksAPI from "../BooksAPI";

function Book({ book, updateHome = null }) {
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
    BooksAPI.update({ id: book.id }, event.target.value).then(
      msg => {
        console.log(`[INFO] BookAPI.update success <${msg}>`);
        updateHome && updateHome();
      },
      msg => console.log(`[ERROR] BookAPI.update failed <${msg}>`)
    );
  };

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
          <select
            onChange={handleChange}
            defaultValue={book.shelf ? book.shelf : "move"}
          >
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
        {Array.isArray(book.authors) ? book.authors.join() : "Unknown"}
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateHome: PropTypes.func
};

export default Book;
