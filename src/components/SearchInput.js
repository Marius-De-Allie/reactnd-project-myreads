import React from 'react';

class SearchInput extends React.Component {
  state = {
    searchTerm: ''
  };
  search = (evt) => {
    let searchTerm = evt.target.value.trimStart();
    this.setState(() => ({
      searchTerm
    }))
    if(searchTerm !== '') {
      this.props.searchSubmit(searchTerm);
      // Check whether search input field is empty.
    } else if(searchTerm === '' || searchTerm.length <= 0) {
      // Clear search results from searchResult state prop.
      this.props.clearSearch(searchTerm);
    }
  };
  render() {
    return (
      <div className="search-books-input-wrapper">
        <input type="text" placeholder="Search by title or author" value={this.state.searchTerm} onChange={this.search} />
      </div>
    );

  }
};

export default SearchInput;