import CartWidget from "./CartWidget";
import PlayStation from "./PlayStation";

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="titulo">
                    <a href="#"><h1 className="headerTitle">PlayGames</h1></a>
                </div>
                <ul className="listas">
                    <div>
                        <li><a href={PlayStation} className="playTitle">PlayStation</a></li>
                    </div>
                    <div>
                        <li><a href="#" className="nintendoTitle">Nintendo</a></li>
                    </div>
                    <div className="xbox">
                        <li><a href="#" className="xboxTitle">Xbox</a></li>
                    </div>
                </ul>
                <CartWidget/>
            </nav>
        </>
    )
}

export default Navbar;