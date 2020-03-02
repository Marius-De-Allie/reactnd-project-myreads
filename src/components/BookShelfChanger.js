import React from 'react';

const BookShelfChanger = props => {
  // Function to execute upon select list change.
  onShelfChange = (evt, book, shelf) => {
    // return currently selected value from select list element.
    const shelfValue = evt.target.value;
    // Call changeShelf function located in BookApp parent component.
    props.changeShelf(props.book, shelfValue);
  };
  return (
    <div className="book-shelf-changer">
      <select value={props.shelf}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BookShelfChanger;