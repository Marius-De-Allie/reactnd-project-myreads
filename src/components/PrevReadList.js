import React from 'react';
// IMPORT BOOK LIST COMPONENT INTO PREVIOUS READ BOOK LIST.
import BookList from './BookList';

const PrevReadList = ({previousBooks, changeShelf, title}) => {
  return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{title}</h2>
          <BookList previousReads={previousBooks} changeShelf={changeShelf} />
        </div>
      </div>
  );
};

export default PrevReadList;