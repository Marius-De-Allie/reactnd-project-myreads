import React from 'react';
import CurrentReadList from './CurrentReadList';
import FutureReadList from './FutureReadList';
import PrevReadList from './PrevReadList';

const MainPage = props => {
  let bookshelfBooks;
  return (
    <div className="list-books">
      <div className="list-books-content">
        <CurrentReadList books={props.books} />
        <FutureReadList />
        <PrevReadList />
      </div>
    </div>
  );
};

export default MainPage;

