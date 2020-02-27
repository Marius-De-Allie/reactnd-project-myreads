import React from 'react';
// IMPORT BOOK ITEM COMPONENT INTO BOOKLIST.
import BookItem from './BookItem';

const BookList = props => (
  <div className={props.className}>
    <ol className="books-grid">
      {props.searchResults.map(book => {
        return <BookItem {...book} />
      })}
    </ol>
  </div>
);

export default BookList;