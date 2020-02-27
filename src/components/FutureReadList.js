import React from 'react';
import Booklist from './BookList';

const FutureReadList = props => {
  return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Book Shelf Title</h2>
          <Booklist />
        </div>
      </div>
  );
};

export default FutureReadList;