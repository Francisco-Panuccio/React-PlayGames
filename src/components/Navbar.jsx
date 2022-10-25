import Icono_Cart from "../iconos/cart_icon.svg";

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="titulo">
                    <a href="#"><h1 className="headerTitle">PlayGames</h1></a>
                </div>
                <ul className="listas">
                    <div>
                        <li><a href="#" className="playTitle">PlayStation</a></li>
                    </div>
                    <div>
                        <li><a href="#" className="nintendoTitle">Nintendo</a></li>
                    </div>
                    <div className="xbox">
                        <li><a href="#" className="xboxTitle">Xbox</a></li>
                    </div>
                </ul>
                <div className="carro">
                    <button className="carritoBoton">
                        <img src={Icono_Cart} alt="Icono Carrito" className="iconoCarrito" />
                        <div className="notificacion"></div>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;