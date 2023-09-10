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
    let bookPrice = Number(bookValue.replace(/[^0-9.-]+/g,""));
    setCartTotal(cartTotal + bookPrice)

    let isInCart = cartItems.find(item => item.isbn13 === isbn13);

    if (isInCart) {
        isInCart.quantity++
      } else {
        isInCart = { price: bookPrice, title: bookTitle, quantity: 1, isbn13}
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
        <Route path='/cart' element={<Cart total={cartTotal} cartItems={cartItems}/>} />
      </Routes>
      
    </div>
  );
}

export default App;



/*
1. bug on favorite items that are unselected on books list
2. only two decimals on totals
3. cart button doesn't work from favorites list
*/