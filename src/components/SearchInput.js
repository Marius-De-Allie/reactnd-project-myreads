import React from 'react';

class SearchInput extends React.Component {
  render() {
    return (
      <div className="search-books-input-wrapper">
        <input type="text" placeholder="Search by title or author" value={}/>
      </div>
    );

  }
};

export default SearchInput;