import React, { useState } from 'react';

const AddBook = ({ setBookDetails }) => {
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [format, setFormat] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    // The Condition Goes Here....
    if (name.trim().length === 0) {
      alert('book name Required..');
      return;
    }
    if (genre.trim().length === 0) {
      alert('genre Required');
      return;
    }
    if (!format) {
      alert('Please Select the format...');
      return;
    }
    alert(
      ` Form Has Been Submitted : Name : ${name} , genre : ${format} `
    );

    setBookDetails((prevBook) => [
      ...prevBook,
      { bookName: name, genre: genre, format: format }
    ]);

    setFormat('');
    setName('');
    setGenre('');
  };

  return (
    <div className="add-book-box w-50 mt-3 mx-auto border border-2 border-dark">
      <form className="p-3" onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="bookName" className="form-label">
            Book Name
          </label>
          <input
            type="text"
            className="form-control"
            id="bookName"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="genre" className="form-label">
            Genre
          </label>
          <input
            type="text"
            className="form-control"
            id="age"
            onChange={(e) => setGenre(e.target.value)}
            value={genre}
          />
        </div>

        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="radio"
            id="audio-radio"
            name="audio-radio"
            value="audio"
            checked={format === 'audio'}
            onChange={(e) => setFormat(e.target.value)}
          />
          <label className="form-check-label" htmlFor="audio-radio">
          audio
          </label>
        </div>

        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="radio"
            name="book-radio"
            id="book-radio"
            value="book"
            checked={format === 'book'}
            onChange={(e) => setFormat(e.target.value)}
          />
          <label className="form-check-label" htmlFor="book-radio">
            book
          </label>
        </div>

        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddBook;
