import './styles.css';
import React, { useState } from 'react';
import AddBook from './components/AddBook/AddBook';
import BookList from './components/BookList/BookList';

export default function App() {
  const [bookDetails, setBookDetails] = useState([
    { id: 1, bookName: 'A Desolation Called Peace', genre: 'Science Fiction', format: 'book' },
    { id: 2, bookName: 'Sea of Tranquility', genre: 'Science Fiction', format: 'audio' },
  ]);
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}> The React Example</h1>
      <AddBook setBookDetails={setBookDetails} />
      <BookList bookData={bookDetails} />
    </div>
  );
}
