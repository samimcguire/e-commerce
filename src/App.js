import { useEffect, useState } from 'react';
import axios from 'axios';
import BooksList from './components/BooksList';
import BookCard from './components/BookCard';
import './App.css';

function App() {
  const [books, setBooks] = useState([])
  const [favorites, setFavorites] = useState([])

  const fetchBooks = () => {
    axios.get("https://api.itbook.store/1.0/new")
      .then(data => setBooks(data.data.books))
  }

  useEffect(fetchBooks, [])

  const handleAddToFavorites = (isbn13) => {
    const favorite = books.find(book => book.isbn13 === isbn13)
    const uniqueList = favorites.filter(book => book.isbn13 !== isbn13);
    setFavorites([...uniqueList, favorite])
  }

  return (
    <div>
      <div>
        <h2>Favorite Books</h2>
        <div className="book-card-container"> 
          {favorites.map(favorite => <BookCard key={favorite?.isbn13} updateFavorite={handleAddToFavorites} {...favorite} />)}
        </div>
        {/* Adding in Favorites component here but should make another component. Will need to come back and make a page as well once we learn that. */}
       
      </div>
      <div>
        <h2>Books List</h2>
        <BooksList books={books} updateFavorite={handleAddToFavorites} />
      </div>
      
    </div>
  );
}

export default App;
