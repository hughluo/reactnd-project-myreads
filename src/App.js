import React from "react";
import { Link, Route } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import Shelf from "./components/Shelf";
import Search from "./components/Search";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  };

  render() {
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
}

export default BooksApp;
