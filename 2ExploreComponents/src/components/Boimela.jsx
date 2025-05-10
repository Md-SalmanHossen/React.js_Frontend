import Header from './Header';
import BookList from './BookList';
import Search from './Search';
import React, { useState } from 'react';

const Boimela = () => {
  const Books = [
    { id: 1, title: "The Alchemist", author: "Paulo Coelho", features: false },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", features: false },
    { id: 3, title: "1984", author: "George Orwell", features: true },
    { id: 4, title: "Pride and Prejudice", author: "Jane Austen", features: false },
    { id: 5, title: "The Great Gatsby", author: "F. Scott Fitzgerald", features: false },
  ];

  const [books, setBooks] = useState(Books);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFeatured = (id) => {
    setBooks(books.map((book) => book.id === id ? { ...book, features: !book.features } : book));
  };

  return (
    <div className="container mx-auto p-4">
      <Header />
      <Search searchTerm={searchTerm} onSearchBook={setSearchTerm} />
      <BookList searchTerm={searchTerm} books={books} onFeatures={toggleFeatured} />
    </div>
  );
};

export default Boimela;
