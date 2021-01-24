import React from "react";
import PropTypes from "prop-types";

class Book extends React.Component {
  state = {
    selectValue: ""
  };

  imageLink = () => {
    const { book } = this.props;
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

  handleChange = event => {
    this.setState(() => ({
      selectValue: event.target.value
    }));
    console.log(this.state);
  };
  render() {
    const { book } = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: this.imageLink()
            }}
          ></div>
          <div className="book-shelf-changer">
            <select onChange={this.handleChange}>
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
