import React from 'react';

const CurrentReadList = props => {
  return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Book Shelf Title</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            </ol>
          </div>
        </div>
      </div>
  );
};

export default CurrentReadList;
