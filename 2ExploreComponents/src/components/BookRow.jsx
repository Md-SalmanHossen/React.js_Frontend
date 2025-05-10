import React from 'react';

import PropTypes from 'prop-types';
import BookDetails from './BookDetails';
import FeatureBook from './FeatureBook';

const BookRow = ({ book,onFeatures }) => {
  //console.log(book)
  return (
    <div className='flex items-center justify-between bg-white shadow rounded-lg gap-4 p-2 '>
      <BookDetails title={book.title} author={book.author} />
      <FeatureBook book={book} onFeatures={onFeatures}/>
    </div>
  );
};

BookRow.propTypes = {
  book:PropTypes.object.isRequired,
  onFeatures:PropTypes.func.isRequired,
};

export default BookRow;
