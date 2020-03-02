import React, {Component} from 'react';
// IMPORT SEARCH BOOKSHELF CHANGER COMPONENT TO BE RENDERED IN SEARCHBOOKITEM COMPONENT.
import SearchBookShelfChanger from './SearchBookShelfChanger';


const SearchBookItem = props => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${props.imageURL}")` }}></div>
            <SearchBookShelfChanger />
          </div>
          <div className="book-title">{props.title}</div>
          <div className="book-authors">{props.author}</div>
      </div>
    </li>
  );
};

export default SearchBookItem;