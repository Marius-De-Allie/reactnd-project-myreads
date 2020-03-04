import React from 'react';
import BookList from './BookList';

const CurrentReadList = ({currentBooks, changeShelf, title}) => {
  console.log(currentBooks);
  return (
      <div>
        <div className="bookshelf">
  <h2 className="bookshelf-title">{title}</h2>
          <BookList currentlyReading={currentBooks} changeShelf={changeShelf} />
        </div>
      </div>
  );
};

export default CurrentReadList;
