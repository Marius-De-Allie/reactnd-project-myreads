import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Switch, Route, Link} from 'react-router-dom'; 
import './App.css'
import SearchPage from './components/SearchPage'
import Header from '../src/components/Header';
import MainPage from './components/MainPage';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  }
  // Function for moving book from one shelf to another.
  changeShelf = async(book, shelf) => {
    console.log(`book: ${book} shelf: ${shelf}`);
    // Update selected book's shelf property to value selected from select list ('currentlyReading', 'wantToRead', 'read' or 'none').
    await BooksAPI.update(book, shelf);
    // Return array of books after shelf property has been updated on selected books.
    const newBooks = await BooksAPI.getAll();
    // Update component state books property to value of newBooks.
    this.setState(() => ({
      books: newBooks
    }));
  };
  async componentWillMount() {
    const myBooks = await BooksAPI.getAll();
    this.setState(() => ({
      books: myBooks
    }));
  }
  render() {
    return (
      <div className="app">
        <Switch>
          {/*Main page route */}
          <Route path="/" exact render={() => <MainPage 
            books={this.state.books}
            changeShelf={this.changeShelf}
          />} 
          />
          {/*Search page route */}
          <Route path="/search" render={() => <SearchPage
            books={this.state.books}
            changeShelfSearch={this.changeShelf}
          />} 
          />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
