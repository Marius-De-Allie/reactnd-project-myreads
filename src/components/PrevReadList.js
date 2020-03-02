import React from 'react';
import BookList from './BookList';

const PrevReadList = ({previousBooks, changeShelf}) => {
  return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Book Shelf Title</h2>
          <BookList previousReads={previousBooks} changeShelf={changeShelf} />
        </div>
      </div>
  );
};

export default PrevReadList;