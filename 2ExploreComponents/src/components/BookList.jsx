import React from 'react'
import BookRow from './BookRow'
import PropTypes from 'prop-types'



const BookList = ({searchTerm,books}) => {
   console.log(searchTerm);
   return (
      <ul className=''>
         {books.map((book) => (
            <li className='mt-2 bg-white shadow rounded-lg' key={book.id}>
               <BookRow book={book} />
            </li>
         ))}
      </ul>
   )
}
BookList.prototype-{
   searchTerm: PropTypes.string.isRequired,
   books:PropTypes.array.isRequired,
}
export default BookList
