import React from "react";
import Book from "./Book";
import { data } from "./bookdata";
import "./bookapp.css";

function BookApp() {
  return (
    <div className="bookapp">
      {data.map((book) => (
        <Book
          key={book.id}
          author={book.author}
          title={book.title}
          image={book.image}
        />
      ))}
    </div>
  );
}

export default BookApp;
