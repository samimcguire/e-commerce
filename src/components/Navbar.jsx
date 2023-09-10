import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/favorites"><li>Favorites</li></Link>
            <Link to="/cart"><li>Cart</li></Link>

        </ul>
    )
}

export default Navbar;