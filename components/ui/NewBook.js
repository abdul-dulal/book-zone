import React from "react";
import getAllbook from "../lib/getAllbook";
import BookDetails from "./BookDetails";
const NewBook = async () => {
  const books = await getAllbook();

  return (
    <div className="my-8">
      <h1 className="uppercase text-center text-[25px] font-semibold">
        our new book
      </h1>

      <p className="border border-primary w-20 mx-auto my-2"></p>
      <BookDetails books={books} />
    </div>
  );
};

export default NewBook;
