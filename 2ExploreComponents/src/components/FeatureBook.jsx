import React from 'react'
import { Star } from "lucide-react"
import PropTypes from 'prop-types'

const FeatureBook = ({ book, onFeatures }) => {

  return (
<button onClick={() => onFeatures(book.id)}>
  <Star color={book.features ? "green" : "black"} className='cursor-pointer' />
</button>

  )
}
console.log("onFeatures:", typeof onFeatures);

FeatureBook.propTypes = {
  book: PropTypes.object.isRequired,
  onFeatures: PropTypes.func.isRequired,
};

export default FeatureBook
