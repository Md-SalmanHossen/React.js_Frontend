import PropTypes from 'prop-types'
import React from 'react'


const Search = ({searchTerm,onSearchBook}) => {
  return (
    <form action="">
      <input 
        type='text'
        value={searchTerm}
        placeholder='Search books...'
        onChange={(event)=>onSearchBook(event.target.value)}
        className='mb-4 border p-1 w-full rounded-md'
      />
    </form>
  )
}
Search.prototype={
  searchTerm: PropTypes.string.isRequired,
  onSearchBook:PropTypes.func.isRequired,
}
export default Search
