import React, {Component} from 'react';
// IMPORT BOOKSHELF CHANGER COMPONENT TO BE RENDERED IN BOOKitem COMPONENT.
import BookShelfChanger from './BookShelfChanger';

const BookItem = props => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
          
          </div>
        <div className="book-title">Book Title</div>
        <div className="book-authors">Author Name</div>
      </div>
    </li>
  );
};

export default BookItem;