import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const BookCard = ({ image, price, title, isbn13, updateFavorite, isFav, handleAddToCart }) => {
    const [isFavorite, setIsFavorite] = useState(isFav)

    const handleClick = () => {
        if (!isFav) {
            setIsFavorite(!isFavorite)
        };
        updateFavorite(isbn13, isFavorite)
    }

    return(
        <div className="book-card">
            <p onClick={handleClick}>{isFavorite ? "💙" : "🤍"}</p>
            <Link to={`/bookdetails/${isbn13}`}>
                <img src={image} alt="book cover" />
                <p>{title}</p>
                <p>{price}</p>
            </Link>
            <button onClick={() => handleAddToCart(price, title, isbn13)}>Cart</button>
        </div>
    )
}

export default BookCard;

/*
When clicking on Cart button, we want to add to an array CartItems on app.js 
this array will store object with book title, quantity, unit price
is element already there?
    if no, add book title, quantity 1, unit price
    if yes, add one to quantity: quantity + 1
*/