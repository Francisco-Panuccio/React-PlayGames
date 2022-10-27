import Icono_Cart from "../iconos/cart_icon.svg";

const CartWidget = () => {
    return (
        <>
            <div className="carro">
                <button className="carritoBoton">
                    <img src={Icono_Cart} alt="Icono Carrito" className="iconoCarrito" />
                    <div className="notificacion"></div>
                </button>
            </div>
        </>
    )
}

export default CartWidget;