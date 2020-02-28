import React from 'react';
import BookItem from './BookItem';

const BookList = props => {
  let books;
  if(props.currentlyReading !== undefined) {
    books = props.currentlyReading.map(book => 
    <BookItem 
      key={book.id}
      title={book.title}
      author={book.authors}
      imageURL={book.imageLinks.thumbnail}
    />);
  }
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books}
      </ol>
    </div>
  );
};

export default BookList;