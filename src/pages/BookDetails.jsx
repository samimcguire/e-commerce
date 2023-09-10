import { useParams } from 'react-router-dom';

const BookDetails = ({ books }) => {
    const { isbn13 } = useParams();

    const foundBook = books.find(book => book.isbn13 === isbn13);
    
    return (
        <div>
            <img src={foundBook.image} alt={`${foundBook.title}-cover`} ></img>
            <p>{foundBook.title}</p>
            <p>{foundBook.subtitle}</p>
        </div>
    )
}

export default BookDetails;