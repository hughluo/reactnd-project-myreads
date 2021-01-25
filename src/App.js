import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import "./App.css";
import Shelf from "./components/Shelf";
import Search from "./components/Search";
import * as BooksAPI from "./BooksAPI";

function BooksApp() {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    BooksAPI.getAll().then(
      books => setAllBooks(books),
      err => console.log("error in BooksAPI.getAll", err)
    );
  });

  return (
    <div className="app">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <Route
        exact
        path="/"
        render={() => (
          <div>
            <div className="open-search">
              <Link to="/search">
                <button></button>
              </Link>
            </div>
            <div className="list-books-content">
              <Shelf
                name="Currently Reading"
                books={allBooks.filter(
                  book => book.shelf === "currentlyReading"
                )}
              ></Shelf>
              <Shelf
                name="Want to Read"
                books={allBooks.filter(book => book.shelf === "wantToRead")}
              ></Shelf>
              <Shelf
                name="Read"
                books={allBooks.filter(book => book.shelf === "read")}
              ></Shelf>
            </div>
          </div>
        )}
      />
      <Route path="/search" render={() => <Search />} />
    </div>
  );
}

export default BooksApp;
