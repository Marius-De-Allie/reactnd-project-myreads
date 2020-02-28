import React from 'react';
import CurrentReadList from './CurrentReadList';
import FutureReadList from './FutureReadList';

const MainPage = props => {
  return (
    <div className="list-books">
      <div className="list-books-content">
        <CurrentReadList />
        <FutureReadList />
      </div>
    </div>
  );
};

