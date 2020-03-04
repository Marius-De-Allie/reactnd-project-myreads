import React from 'react';
import CurrentReadList from './CurrentReadList';
import FutureReadList from './FutureReadList';
import PrevReadList from './PrevReadList';
import Header from './Header';
import AddBookBtn from './AddBookBtn';
// Will convert this to stateless fn component during refactor as state is not being saved in this component.
class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currRead: [],
      prevRead: [],
      futureRead: []
    }
  }
  render() {
    console.log(this.props.books);
    // Filter books list down to only books that have shelf prop value of 'currentlyReading'.
    const currentBooks = this.props.books.filter(book => book.shelf === 'currentlyReading');
    // Filter books list down to only books that have shelf prop value of 'wantToRead'.
    const futureBooks = this.props.books.filter(book => book.shelf === 'wantToRead');
    // Filter books list down to only books that have shelf prop value of 'read'.
    const previousBooks = this.props.books.filter(book => book.shelf === 'read');
    return (
      <div className="list-books">
        <Header />
        <div className="list-books-content">
          <CurrentReadList currentBooks={currentBooks} changeShelf={this.props.changeShelf} title="Currently Reading" />
          <FutureReadList futureBooks={futureBooks} changeShelf={this.props.changeShelf} title="Want to Read" />
          <PrevReadList previousBooks={previousBooks} changeShelf={this.props.changeShelf} title="Read" />
        </div>
        <AddBookBtn />
      </div>
    );
  }
};

export default MainPage;

