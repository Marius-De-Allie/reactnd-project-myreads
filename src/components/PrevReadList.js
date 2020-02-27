import React from 'react';
import Booklist from './BookList';

const PrevReadList = props => {
  return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Book Shelf Title</h2>
          <BookList />
        </div>
      </div>
  );
};

export default PrevReadList;