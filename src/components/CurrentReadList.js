import React from 'react';
import BookList from 'Booklist';

const CurrentReadList = props => {
  return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Book Shelf Title</h2>
          <BookList />
        </div>
      </div>
  );
};

export default CurrentReadList;
