import BooksList from "../components/BooksList";

const Home = ({books, handleAddToFavorites}) => {
    return (
        <div>
            <h2>Books List</h2>
            <BooksList books={books} updateFavorite={handleAddToFavorites} />
        </div>
    )
}

export default Home;