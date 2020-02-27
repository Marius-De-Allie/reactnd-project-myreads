import React from 'react';
// IMPORT BOOK ITEM COMPONENT INTO BOOKLIST.
import BookItem from './BookItem';

const BookList = props => {
  const book = props.searchResults.error !== 'empty query' ?  
    props.searchResults.map(book => 
    <BookItem 
      title={book.title}
    />)
    : <p>No results please try another search term</p>;
  return (
    <div className={props.className}>
      <ol className="books-grid">
        {book}
      </ol>
    </div>
  );
};

export default BookList;