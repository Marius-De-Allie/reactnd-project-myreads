import React from 'react';
// IMPORT BOOK ITEM COMPONENT INTO BOOKLIST.
import BookItem from './BookItem';

const BookList = props => {
  const book = props.searchResults ?  
    props.searchResults.map(book => <BookItem />)
    : <p>Please enter a valid search term to begin</p>;
  return (
    <div className={props.className}>
      <ol className="books-grid">
        {book}
      </ol>
    </div>
  );
};

export default BookList;