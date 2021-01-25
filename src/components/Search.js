import React, { useEffect, useState } from "react";
import BookGrid from "./BookGrid";
import * as BooksAPI from "../BooksAPI";
import { Link } from "react-router-dom";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [FetchError, setFetchError] = useState("");

  const handleChange = event => {
    event.persist();
    setSearchInput(event.target.value);
  };

  useEffect(() => {
    searchInput &&
      BooksAPI.search(searchInput).then(
        books =>
          books !== undefined &&
          books.length !== 0 &&
          Array.isArray(books) &&
          setSearchResult(books) &&
          setFetchError(""),
        err => setFetchError(err)
      );
  }, [searchInput]);
  return (
    <div>
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={searchInput}
              onChange={handleChange}
            />
          </div>
        </div>
        {FetchError !== "" && (
          <div>
            <span>Something going wrong: {FetchError}</span>
          </div>
        )}
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
      {searchInput && searchResult && <BookGrid books={searchResult} />}
    </div>
  );
}

export default Search;
