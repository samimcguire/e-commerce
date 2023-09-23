import BookCard from "./BookCard";

const BooksList = ({ books, updateFavorite, handleAddToCart }) => {
    return (
        <div className="book-card-container">
            {books.map(book => <BookCard key={book.isbn13} {...book} updateFavorite={updateFavorite} handleAddToCart={handleAddToCart}/>)}
        </div>
    )
}

export default BooksList;