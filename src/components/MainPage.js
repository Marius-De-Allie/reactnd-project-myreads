import React from 'react';
import CurrentReadList from './CurrentReadList';
import FutureReadList from './FutureReadList';
import PrevReadList from './PrevReadList';

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
    const futureBooks = this.props.books.filter(book => book.shelf === 'wantToRead');
    let bookshelfBooks;
    return (
      <div className="list-books">
        <div className="list-books-content">
          <CurrentReadList currentBooks={currentBooks} />
          <FutureReadList />
          <PrevReadList />
        </div>
      </div>
    );
  }
};

export default MainPage;

