import React from 'react';
// IMPORT SEARCH INPUT COMPONENT INTO SEARCH PAGE
import SearchInput from './SearchInput';

const SearchPage = props => (
  <div className="search-books">
    <div className="search-books-bar">
      <SearchInput searchSubmit={props.searchSubmit} />
    </div>
  </div>
);

export default SearchPage;