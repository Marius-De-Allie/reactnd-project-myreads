import React from 'react';
import BookList from './BookList';

const FutureReadList = props => {
  return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Book Shelf Title</h2>
          <BookList />
        </div>
      </div>
  );
};

export default FutureReadList;