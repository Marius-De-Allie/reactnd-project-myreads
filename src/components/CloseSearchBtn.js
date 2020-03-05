import React from 'react';
import {Link} from 'react-router-dom';

const CloseSearchBtn = () => (
  // Link back to main page (homepage).
  <Link to="/">
    <button className="close-search">
      Close
    </button>
  </Link>
);

export default CloseSearchBtn;
