import React from "react";
import BookAuthor from "./BookAuthor";
import BookImage from "./BookImage";
import BookTitle from "./BookTitle";

function Book({ title, author, image }) {
  return (
    <div className="book">
      <BookImage image={`/keezy/books/${image}`} />
      <BookTitle title={title} />
      <BookAuthor author={author} />
    </div>
  );
}

export default Book;
