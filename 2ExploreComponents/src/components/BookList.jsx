import React from 'react';
import BookRow from './BookRow';
import PropTypes from 'prop-types';

const BookList = ({ searchTerm, books, onFeatures }) => {
  const rows = [];
  books.forEach((book) => {
    if (book.title.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
      return;
    }
    rows.push(<BookRow key={book.id} book={book} onFeatures={onFeatures} />);
  });
  return (
    <div className="space-y-4">{rows}</div>
  );
};

BookList.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onFeatures: PropTypes.func.isRequired,
};

export default BookList;
