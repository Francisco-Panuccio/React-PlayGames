import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="titulo">
                    <Link to="/" style={{"outline": "none"}}><h1 className="headerTitle">PlayGames</h1></Link>
                </div>
                <ul className="listas">
                    <div>
                        <li><Link to="/category/PlayStation" className="playTitle" style={{"outline": "none"}}>PlayStation</Link></li>
                    </div>
                    <div>
                        <li><Link to="/category/Nintendo" className="nintendoTitle" style={{"outline": "none"}}>Nintendo</Link></li>
                    </div>
                    <div className="xbox">
                        <li><Link to="/category/Xbox" className="xboxTitle" style={{"outline": "none"}}>Xbox</Link></li>
                    </div>
                </ul>
                <CartWidget/>
            </nav>
        </>
    )
}

export default Navbar;