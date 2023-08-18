const BookCard = ({ image, price, title }) => {
    return(
        <div>
            <img src={image} />
            <p>{title}</p>
            <p>{price}</p>
        </div>
    )
}

export default BookCard;