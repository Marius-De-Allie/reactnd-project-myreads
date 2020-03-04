import React from 'react';
// IMPORT SEARCHBOOKITEM COMPONENT INTO SEARCHLIST.
import SearchBookItem from './SearchBookItem';

const SearchList = (props) => {
  const renderResults = () => {
    const book = props.searchResult.length > 0 ? 
    props.searchResult.map(result => 
      <SearchBookItem
        key={result.id} 
        title={result.title}
        author={result.authors && result.authors}
        imageURL={result.imageLinks && result.imageLinks.thumbnail}
        shelf={result.shelf}
        id={result.id}
        books={props.books}
        result={result}
        changeShelfSearch={props.changeShelfSearch}
      />) : 
      <p>{props.errorMessage}</p>; 
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

