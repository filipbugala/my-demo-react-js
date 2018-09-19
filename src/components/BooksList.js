import * as React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import BookMediaObject from './BookMediaObject';

const BooksList = (props) => (
  <div>
    {props.books.map((book, i) =>
    <Link key={book.id} to={`/books/${book.id}`}>
      <BookMediaObject book={book.volumeInfo} />
    </Link>
    )}
  </div>
)

BooksList.propTypes = {
  books: PropTypes.array
}

export default BooksList