import React from 'react';

class SearchInput extends React.Component {
  state = {
    searchTerm: ''
  };
  search = (evt) => {
    let searchTerm = evt.target.value.trim();
    this.setState(() => ({
      searchTerm
    }))
    if(searchTerm !== '') {
      this.props.searchSubmit(searchTerm);
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