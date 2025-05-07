import React from 'react';
import PropTypes from 'prop-types';
import BookDetails from './BookDetails';
import FeatureBook from './FeatureBook';

const BookRow = ({ book }) => {
  console.log(book)
  return (
    <div className='flex items-center justify-between gap-4 p-2 '>
      <BookDetails title={book.title} author={book.author} />
      <FeatureBook />
    </div>
  );
};

BookRow.propTypes = {
  book:PropTypes.object.isRequired,
};

export default BookRow;
