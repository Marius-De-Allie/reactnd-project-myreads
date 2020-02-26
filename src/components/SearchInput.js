import React from 'react';

class SearchInput extends React.Component {
  state = {
    searchTerm: ''
  };
  render() {
    return (
      <div className="search-books-input-wrapper">
        <input type="text" placeholder="Search by title or author" />
      </div>
    );

  }
};

export default SearchInput;