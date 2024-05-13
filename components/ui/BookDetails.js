import React from "react";

const BookDetails = ({ books }) => {
  return (
    <div>
      <div className="grid grid-cols-5">
        {books.length > 0 &&
          books.map((product) => (
            <div key={product._id}>
              <h1>hello</h1>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BookDetails;
