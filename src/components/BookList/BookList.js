import React from 'react';
import BookCard from '../BookCard/BookCard';

const BookList = ({ bookData }) => {
  return (
    <div className="book-list-box w-50 mt-3 mx-auto border border-2 border-dark">
      <h4 style={{ textAlign: 'center' }}>
        Number Of Books : {bookData.length}
      </h4>
      <div className="mt-2">
        <ul className="p-2 list-group" style={{ listStyleType: 'none' }}>
          {bookData.map((book, index) => (
            <li key={index} className="list-group-item mb-2 p-1">
              <BookCard book={book} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookList;
