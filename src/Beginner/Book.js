import React from "react";
import BookAuthor from "./BookAuthor";
import BookImage from "./BookImage";
import BookTitle from "./BookTitle";

function Book({ title, author }) {
  return (
    <div className="book">
      <BookImage />
      <BookTitle title={title} />
      <BookAuthor author={author} />
    </div>
  );
}

export default Book;
