import BookCard from "./BookCard";

const BooksList = ({ books, updateFavorite }) => {
    return (
        <div className="book-card-container">
            {books.map(book => <BookCard key={book.isbn13} {...book} updateFavorite={updateFavorite} />)}
        </div>
    )
}

export default BooksList;