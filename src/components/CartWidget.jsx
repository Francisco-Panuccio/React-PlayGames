import Icono_Cart from "../iconos/cart_icon.svg";
import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
        <>
            <div className="carro">
                <Link to="/Cart">
                <button className="carritoBoton">
                    <img src={Icono_Cart} alt="Icono Carrito" className="iconoCarrito" />
                    <div className="notificacion"></div>
                </button>
                </Link>
            </div>
        </>
    )
}

export default CartWidget;