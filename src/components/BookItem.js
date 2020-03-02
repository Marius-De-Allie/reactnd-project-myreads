import React, {Component} from 'react';
// IMPORT BOOKSHELF CHANGER COMPONENT TO BE RENDERED IN BOOKitem COMPONENT.
import BookShelfChanger from './BookShelfChanger';

const BookItem = props => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${props.imageURL}")` }}></div>
            <BookShelfChanger 
              shelf={props.shelf} 
              changeShelf={props.changeShelf} 
            />
          </div>
  <div className="book-title">{props.title}</div>
  <div className="book-authors">{props.author}</div>
      </div>
    </li>
  );
};

export default BookItem;