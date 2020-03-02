import React from 'react';
import * as BooksAPI from '../BooksAPI';
// IMPORT BOOK ITEM COMPONENT INTO BOOKLIST.
import BookItem from './BookItem';

class SearchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: []
    }
  }
  // Function for making Async search request to BooksAPI.
  searchSubmit = async(query) => {
    const searchResult = await BooksAPI.search(query);
    // Check whether serach result array exists.
    if(searchResult.error !== 'empty query') {
      // Loop through search results and add shelf property to each result object. 
      searchResult.forEach(result => result.shelf = '');
      // Set searchResult state to value returned from call to BooksAPI.search async function.
      this.setState(() => ({
        searchResult
      }));
    }
    console.log(searchResult);
    // console.log(this.state.searchResults);
  };
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

