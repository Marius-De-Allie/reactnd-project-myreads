import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Switch, Route } from 'react-router-dom'; 
import './App.css'
import SearchPage from './components/SearchPage'
import MainPage from './components/MainPage';
import NotFoundPage from './components/NotFoundPage';

class BooksApp extends React.Component {
  state = {
    books: []
  }
  // Function for moving book from one shelf to another.
  changeShelf = async(book, shelf) => {
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
          <Route path="/search" exact render={() => <SearchPage
            books={this.state.books}
            changeShelfSearch={this.changeShelf}
          />} 
          />
          {/*404 page not found route*/}
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
