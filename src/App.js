import { useEffect, useState } from 'react';
import axios from 'axios';
import BooksList from './components/BooksList';
 import './App.css';

function App() {
  const [books, setBooks] = useState([])

  const fetchBooks = () => {
    axios.get("https://api.itbook.store/1.0/new")
      .then(data => setBooks(data.data.books))
  }

  useEffect(fetchBooks, [])

  return (
    <div>
      <BooksList books={books} />
    </div>
  );
}

export default App;
