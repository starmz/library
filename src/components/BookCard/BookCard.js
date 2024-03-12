import React from 'react';
import bookPic from '../Assests/book.png';
import audioPic from '../Assests/audio.png';

const BookCard = ({ book }) => {
  return (
    <div className="d-flex align-items-center">
      {book.format === 'book' ? (
        <img src={bookPic} className="img bg-dark me-5" alt="Book" />
      ) : (
        <img src={audioPic} className="img bg-dark me-5" alt="Audio" />
      )}

      <div className="book-details mt-2">
        <h3> {book.bookName} </h3>
        <h6>
          format: <span>({book.format})</span>
        </h6>
      </div>
    </div>
  );
};

export default BookCard;
