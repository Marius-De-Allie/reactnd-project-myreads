import React from 'react';
// IMPORT SEARCHBOOKITEM COMPONENT INTO SEARCHLIST.
import SearchBookItem from './SearchBookItem';

const SearchList = (props) => {
  const renderResults = () => {
    const book = props.searchResult.error !== 'empty query' ? 
    props.searchResult.map(result => 
      <SearchBookItem
        key={result.id} 
        title={result.title}
        author={result.authors}
        imageURL={result.imageLinks.thumbnail}
        shelf={result.shelf}
        id={result.id}
      />) : 
      <p>No results please try another search term</p>; 
      return book;
  };
  return (
    <div className={props.className}>
      <ol className="books-grid">
        {renderResults()}
      </ol>
    </div>
  );
};

export default SearchList;

