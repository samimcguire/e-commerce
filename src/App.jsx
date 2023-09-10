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

  const [cartTotal, setCartTotal] = useState(0);

  const [cartItems, setCartItems] = useState([]);

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

  const handleAddToCart = (bookValue, bookTitle, isbn13) => {
    let total = Number(bookValue.replace(/[^0-9.-]+/g,""));
    setCartTotal(cartTotal + total)

    let isInCart = cartItems.find(item => item.isbn13 === isbn13);

    if (isInCart) {
        isInCart.quantity++
      } else {
        isInCart = { price: total, titel: bookTitle, quantity: 1}
        setCartItems([...cartItems, isInCart])
      }
  }

  useEffect(fetchBooks, [])

  return (
    <div>
      <Navbar total={cartTotal} />
      <Routes>
        <Route path="/" element={<Home books={books} handleAddToFavorites={handleAddToFavorites} handleAddToCart={handleAddToCart}/>} />
        <Route path="/favorites" element={<Favorites favorites={favorites} handleAddToFavorites={handleAddToFavorites} />} />
        <Route path='/bookdetails/:isbn13' element={<BookDetails books={books} />}/>
        <Route path='/cart' element={<Cart total={cartTotal}/>} />
      </Routes>
      
    </div>
  );
}

export default App;
