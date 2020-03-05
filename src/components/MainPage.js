import React from 'react';
import CurrentReadList from './CurrentReadList';
import FutureReadList from './FutureReadList';
import PrevReadList from './PrevReadList';
import Header from './Header';
import AddBookBtn from './AddBookBtn';

const MainPage = props => {
    // Filter books list down to only books that have shelf prop value of 'currentlyReading'.
    const currentBooks = props.books.filter(book => book.shelf === 'currentlyReading');
    // Filter books list down to only books that have shelf prop value of 'wantToRead'.
    const futureBooks = props.books.filter(book => book.shelf === 'wantToRead');
    // Filter books list down to only books that have shelf prop value of 'read'.
    const previousBooks = props.books.filter(book => book.shelf === 'read');
    return (
      <div className="list-books">
        <Header />
        <div className="list-books-content">
          <CurrentReadList currentBooks={currentBooks} changeShelf={props.changeShelf} title="Currently Reading" />
          <FutureReadList futureBooks={futureBooks} changeShelf={props.changeShelf} title="Want to Read" />
          <PrevReadList previousBooks={previousBooks} changeShelf={props.changeShelf} title="Read" />
        </div>
        <AddBookBtn />
      </div>
    );
}; 

export default MainPage;

