import React from 'react'
import PropTypes from 'prop-types'

const BookDetails = ({ title, author }) => {
  return (
    <div>
      <h1 className='text-lg font-semibold'>{title}</h1>
      <p className='text-sm text-gray-600'>{author}</p>
    </div>
  );
}

BookDetails.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookDetails
