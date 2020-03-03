import React from 'react';
import * as BooksAPI from '../BooksAPI';
// IMPORT SEARCH INPUT COMPONENT INTO SEARCH PAGE
import SearchInput from './SearchInput';
// IMPORT SEARCH LIST COMPONENT INTO SEARCH PAGE.
import SearchList from './SearchList';

class SearchPage extends React.Component {
  state = {
    searchResult: []
  }
  // Function for making Async search request to BooksAPI.
  searchSubmit = async(query) => {
    const searchResult = await BooksAPI.search(query);
    // Check whether serach result array exists.
    if(searchResult.error !== 'empty query') {
      // Loop through search results and add shelf property to each result object. 
      searchResult.forEach(result => result.shelf = 'none');
      // Set searchResult state to value returned from call to BooksAPI.search async function.
      this.setState(() => ({
        searchResult
      }));
    }
    // console.log(searchResult);
    // console.log(this.state.searchResults);
  };
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <SearchInput searchSubmit={this.searchSubmit} />
        </div>
        <SearchList 
          className="search-books-results" 
          searchResult={this.state.searchResult}
          books={this.props.books}
          changeShelfSearch={this.props.changeShelfSearch}
        />
      </div>
    );
  }
};

export default SearchPage;