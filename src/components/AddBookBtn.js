import React from 'react';
import {Link} from 'react-router-dom';

const AddBookBtn = () => {
  const onAddClick = () => {
    
  };
  return (
    <div className="open-search">
      <Link to="/search">
        <button>Add a book</button>
      </Link>
    </div>
  );
};

export default AddBookBtn;
