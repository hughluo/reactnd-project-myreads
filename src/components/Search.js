import React from "react";
import BookGrid from "./BookGrid";
import * as BooksAPI from "../BooksAPI";

class Search extends React.Component {
  state = {
    searchInput: "",
    searchResult: [],
    FetchError: ""
  };

  handleChange = value => {
    this.setState(() => ({
      searchInput: value
    }));
    BooksAPI.search(this.state.searchInput).then(
      books =>
        books !== undefined &&
        books.length !== 0 &&
        Array.isArray(books) &&
        this.setState(() => ({ FetchError: "", searchResult: books })),
      err => this.setState(() => ({ FetchError: `error:${err}` }))
    );
    console.log(this.state.searchResult);
  };

  render() {
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <button
              className="close-search"
              onClick={() => this.setState({ showSearchPage: false })}
            >
              Close
            </button>
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
                onChange={event => this.handleChange(event.target.value)}
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
