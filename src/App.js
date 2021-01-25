import React from "react";
import { Link, Route } from "react-router-dom";
import "./App.css";
import Search from "./components/Search";
import Home from "./components/Home";

function BooksApp() {
  return (
    <div className="app">
      <div className="list-books-title">
        <h1>Wexort's ReadingList</h1>
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
            <Home />
          </div>
        )}
      />
      <Route path="/search" render={() => <Search />} />
    </div>
  );
}

export default BooksApp;
