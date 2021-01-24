import React from "react";
import { Link, Route } from "react-router-dom";
import "./App.css";
import Shelf from "./components/Shelf";
import Search from "./components/Search";

function BooksApp() {
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
              <Shelf title="Currently Reading"></Shelf>
              <Shelf title="Want to Read"></Shelf>
              <Shelf title="Read"></Shelf>
            </div>
          </div>
        )}
      />
      <Route path="/search" render={() => <Search />} />
    </div>
  );
}

export default BooksApp;
