import React, { useEffect, useState } from "react";
import Shelf from "./Shelf";
import * as BooksAPI from "../BooksAPI";

function Home() {
  const [allBooks, setAllBooks] = useState([]);
  const [updateCount, setUpdateCount] = useState(0);
  const updateHome = () => {
    console.log("updateHome!");
    setUpdateCount(updateCount + 1);
  };

  useEffect(() => {
    console.log("BookAPI.getall");
    BooksAPI.getAll().then(
      books => setAllBooks(books),
      err => console.log("error in BooksAPI.getAll", err)
    );
  }, [updateCount]);

  return (
    <div className="list-books-content">
      <Shelf
        name="Currently Reading"
        books={allBooks.filter(book => book.shelf === "currentlyReading")}
        updateHome={updateHome}
      ></Shelf>
      <Shelf
        name="Want to Read"
        books={allBooks.filter(book => book.shelf === "wantToRead")}
        updateHome={updateHome}
      ></Shelf>
      <Shelf
        name="Read"
        books={allBooks.filter(book => book.shelf === "read")}
        updateHome={updateHome}
      ></Shelf>
    </div>
  );
}

Home.propTypes = {};

export default Home;
