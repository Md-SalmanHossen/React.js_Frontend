

import Header from './Header';
import BookList from './BookList';
import Search from './Search';
import React from 'react'
import { useState } from 'react';
 
const Boimela = () => {
  const Books = [
    {
       id: 1, title: "The Alchemist", 
       author: "Paulo Coelho", 
       features: false 
    },
    { 
       id: 2, 
       title: "To Kill a Mockingbird", 
       author: "Harper Lee", 
       features: false 
    },
    { 
       id: 3, 
       title: "1984", 
       author: "George Orwell", 
       features: true 
    },
    { 
       id: 4, 
       title: "Pride and Prejudice", 
       author: "Jane Austen", 
       features: false 
    },
    { 
       id: 5, 
       title: "The Great Gatsby", 
       author: "F. Scott Fitzgerald", 
       features: false 
    },
 ];
  const [searchTerm,setSearchTerm]=useState("")
  return (
    <div className='container mx-auto p-4'>
      <Header/>
      <Search searchTerm={searchTerm} onSearchBook={setSearchTerm}/>
      <BookList searchTerm={searchTerm} books={Books}/>
    </div>
  )
}

export default Boimela
