import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import BooksList from './components/BooksList';
import BookCard from './components/BookCard';
import './App.css';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Navbar from './components/Navbar';
import BookDetails from './pages/BookDetails';
import Cart from './pages/Cart';

function App() {
  const [books, setBooks] = useState([])
  const [favorites, setFavorites] = useState([])

  const fetchBooks = () => {
    axios.get("https://api.itbook.store/1.0/new")
      .then(data => setBooks(data.data.books))
  }

  const handleAddToFavorites = (isbn13, isFavorite) => {
    if (!isFavorite) {
      const favorite = books.find(book => book.isbn13 === isbn13)
      const uniqueList = favorites.filter(book => book.isbn13 !== isbn13);
      setFavorites([...uniqueList, favorite])
    } else {
      const removeFav = favorites.filter(book => book.isbn13 !== isbn13)
      setFavorites(removeFav)
    }
  }

  useEffect(fetchBooks, [])

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home books={books} handleAddToFavorites={handleAddToFavorites} />} />
        <Route path="/favorites" element={<Favorites favorites={favorites} handleAddToFavorites={handleAddToFavorites} />} />
        <Route path='/bookdetails/:isbn13' element={<BookDetails books={books} />}/>
        <Route path='/cart' element={<Cart />} />
      </Routes>
      
    </div>
  );
}

export default App;
