import React from "react";
import Book from "./Book";
import { data } from "./bookdata";
import "./BookApp.css";

function BookApp() {
  return data.map((book) => (
    <div className="BookApp">
      <Book key={book.id} author={book.author} title={book.title} />
    </div>
  ));
}

export default BookApp;
