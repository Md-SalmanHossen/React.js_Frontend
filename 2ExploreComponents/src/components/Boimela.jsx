

import Header from './Header';
import BookList from './BookList';
import Search from './Search';
import React from 'react'

const Boimela = () => {
  return (
    <div className='container mx-auto p-4'>
      <Header/>
      <Search/>
      <BookList/>
    </div>
  )
}

export default Boimela
