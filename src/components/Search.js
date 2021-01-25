import React from "react";
import BookGrid from "./BookGrid";
import * as BooksAPI from "../BooksAPI";
import { Link } from "react-router-dom";

class Search extends React.Component {
  state = {
    searchInput: "",
    searchResult: [],
    FetchError: ""
  };

  search = () => {
    BooksAPI.search(this.state.searchInput).then(
      books =>
        books !== undefined &&
        books.length !== 0 &&
        Array.isArray(books) &&
        this.setState(() => ({ FetchError: "", searchResult: books })),
      err => this.setState(() => ({ FetchError: `error:${err}` }))
    );
  };

  handleChange = event => {
    event.persist();
    this.setState(
      () => ({
        searchInput: event.target.value
      }),
      this.search
    );
  };

  render() {
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/">
              <button className="close-search">Close</button>
            </Link>
            <div className="search-books-input-wrapper">
              {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
              <input
                type="text"
                placeholder="Search by title or author"
                value={this.state.searchInput}
                onChange={this.handleChange}
              />
            </div>
          </div>
          {this.state.FetchError !== "" && (
            <div>
              <span>Something going wrong: {this.state.FetchError}</span>
            </div>
          )}
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
        {this.state.searchResult.length !== 0 && (
          <BookGrid books={this.state.searchResult} />
        )}
      </div>
    );
  }
}

export default Search;
