import React from 'react';
import BookList from './BookList';

const FutureReadList = ({futureBooks, changeShelf, title}) => {
  return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{title}</h2>
          <BookList futureReads={futureBooks} changeShelf={changeShelf} />
        </div>
      </div>
  );
};

export default FutureReadList;