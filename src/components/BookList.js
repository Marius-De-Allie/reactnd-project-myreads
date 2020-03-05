import React from 'react';
import BookItem from './BookItem';

const BookList = props => {
  let books;
  // Render currently reading bookshelf books.
  if(props.currentlyReading !== undefined) {
    books = props.currentlyReading.map(book => 
    <BookItem 
      key={book.id}
      title={book.title}
      author={book.authors && book.authors}
      imageURL={book.imageLinks && book.imageLinks.thumbnail}
      shelf={book.shelf}
      changeShelf={props.changeShelf}
      book={book}
    />);
  // Render want to read bookshelf books.
  } else if(props.futureReads !== undefined) {
    books = props.futureReads.map(book => 
      <BookItem
        key={book.id}
        title={book.title}
        author={book.authors && book.authors}
        imageURL={book.imageLinks && book.imageLinks.thumbnail}
        shelf={book.shelf}
        changeShelf={props.changeShelf}
        book={book}
      />)
  // Render previously read bookshelf books.
  } else if(props.previousReads !== undefined) {
    books = props.previousReads.map(book => 
      <BookItem
        key={book.id}
        title={book.title}
        author={book.authors && book.authors}
        imageURL={book.imageLinks && book.imageLinks.thumbnail}
        shelf={book.shelf}
        changeShelf={props.changeShelf}
        book={book}
      />)
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