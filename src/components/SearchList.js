import React from 'react';
// IMPORT BOOK ITEM COMPONENT INTO BOOKLIST.
import BookItem from './BookItem';

class SearchList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={props.className}>
        <ol className="books-grid">
          {book}
        </ol>
      </div>
    );
  }
}
// = props => {
//   const book = props.searchResults.error !== 'empty query' ?  
//     props.searchResults.map(book => 
//     <BookItem 
//       title={book.title}
//       author={book.authors}
//       imageURL={book.imageLinks.thumbnail}
//     />)
//     : <p>No results please try another search term</p>;
// };

export default SearchList;

