import BookCard from "./BookCard";

const BooksList = ({ books }) => {
    return (
        <div>
            {books.map(book => <BookCard key={book.isbn13} {...book} />)}
        </div>
    )
}

export default BooksList;