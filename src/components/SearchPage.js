import React from 'react';
// IMPORT SEARCH INPUT COMPONENT INTO SEARCH PAGE
import SearchInput from './SearchInput';
// IMPORT BOOK LIST COMPONENT INTO SEARCH PAGE.
import BookList from './BookList';

const SearchPage = props => (
  <div className="search-books">
    <div className="search-books-bar">
      <SearchInput searchSubmit={props.searchSubmit} />

    </div>
  </div>
);

export default SearchPage;