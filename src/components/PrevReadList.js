import React from 'react';
import BookList from './BookList';

const PrevReadList = ({previousBooks}) => {
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