import React from "react";
import PropTypes from "prop-types";

class Book extends React.Component {
  handleOptionClick = event => {
    console.log("click", event.target.value);
  };
  render() {
    const { book } = this.props;

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
            <select onSelect={event => this.handleOptionClick(event)}>
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
}

Book.propTypes = {
  book: PropTypes.object.isRequired
};

export default Book;
