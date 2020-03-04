import React from 'react';
import { withRouter } from 'react-router-dom';

const SearchBookShelfChanger = props => {
  const onShelfChange = (evt) => {
    const shelfValue = evt.target.value;
    props.changeShelfSearch(props.result, shelfValue);
  };
  return (
    <div className="book-shelf-changer">
      <select value={props.result.shelf} onChange={onShelfChange}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default SearchBookShelfChanger;