import React from 'react';
import BookList from './BookList';

const CurrentReadList = ({currentBooks}) => {
  console.log(currentBooks);
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
