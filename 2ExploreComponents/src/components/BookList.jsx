import React from 'react'
import BookRow from './BookRow'

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

const BookList = () => {
   return (
      <ul className=''>
         {Books.map((book) => (
            <li className='mt-2 bg-white shadow rounded-lg' key={book.id}>
               <BookRow book={book} />
            </li>
         ))}
      </ul>
   )
}

export default BookList
