import React from 'react';
import BookList from './BookList';

const CurrentReadList = ({books}) => {
  const currRead = books.filter(book => book.shelf === 'currentlyReading');
  console.log(currRead);
  return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Book Shelf Title</h2>
          <BookList currentlyReading={currRead} />
        </div>
      </div>
  );
};

export default CurrentReadList;
