import React from 'react';
import * as BooksAPI from '../BooksAPI';
// IMPORT BOOK ITEM COMPONENT INTO BOOKLIST.
import BookItem from './BookItem';

class SearchList extends React.Component {
  constructor(props) {
    super(props);
  }
  renderResults = () => {
    const book = this.state.searchResults.error !== 'empty query' ? 
    this.state.searchResults.map(result => 
      <BookItem
        key={result.id} 
        title={result.title}
        author={result.authors}
        imageURL={result.imageLinks.thumbnail}
        shelf={result.shelf}
        id={result.id}
      />) : 
      <p>No results pleae try another search term</p>; 
      return book;
  };
  render() {
    return (
      <div className={this.props.className}>
        <ol className="books-grid">
          {this.renderResults()}
        </ol>
      </div>
    );
  }
}

export default SearchList;

