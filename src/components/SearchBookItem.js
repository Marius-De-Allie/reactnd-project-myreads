import React, {Component} from 'react';


const SearchBookItem = props => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${props.imageURL}")` }}></div>
          
          </div>
  <div className="book-title">{props.title}</div>
  <div className="book-authors">{props.author}</div>
      </div>
    </li>
  );
};

export default SearchBookItem;