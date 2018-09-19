import React from 'react';
import { PropTypes } from 'prop-types';

const BookMediaObject = props => (
    <div>
      <div>
        {props.book.title}
      </div>
      <img src={props.book.imageLinks.smallThumbnail} alt="small thumbnail" />
    </div>
)

BookMediaObject.propTypes = {
  book: PropTypes.object
}

export default BookMediaObject;