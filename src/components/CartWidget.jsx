import Icono_Cart from "../iconos/cart_icon.svg";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const [notificacion, setNotificacion] = useState(0);
    const { alert } = useContext(CartContext);

    useEffect(() => {
        setNotificacion(alert);
    }, [alert]) 

    return (
        <>
            <div className="carro">
                <Link to="/Cart">
                <button className="carritoBoton">
                    <img src={Icono_Cart} alt="Icono Carrito" className="iconoCarrito" />
                    {
                        notificacion === 0 ? <input style={{"display":"none"}}></input> : <input className="notificacion" value={notificacion}></input>
                    }
                </button>
                </Link>
            </div>
        </>
    )
}

export default CartWidget;