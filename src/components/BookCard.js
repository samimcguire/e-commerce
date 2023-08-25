import { useState } from "react";

const BookCard = ({ image, price, title, isbn13, updateFavorite }) => {
    const [isFavorite, setIsFavorite] = useState(false)

    const handleClick = () => {
        setIsFavorite(!isFavorite)
        updateFavorite(isbn13)
    }

    return(
        <div className="book-card">
            <p onClick={(handleClick)}>{isFavorite ? "💙" : "🤍"}</p>
            <img src={image} alt="book cover" />
            <p>{title}</p>
            <p>{price}</p>
            <button>Cart</button>
        </div>
    )
}

export default BookCard;