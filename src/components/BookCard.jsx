import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const BookCard = ({ image, price, title, isbn13, updateFavorite, isFav }) => {
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
            <button>Cart</button>
        </div>
    )
}

export default BookCard;

/*
When clicking on Cart button, we want to add to an array Cart on app.js
*/