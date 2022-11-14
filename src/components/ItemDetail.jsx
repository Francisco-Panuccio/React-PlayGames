import ItemCount from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const ItemDetail = (props) => {
    const cartItems = useContext(CartContext);

    const onCart = () => {
        cartItems.isInCart();
    }

    const onCartCount = (cantidad) => {
        cartItems.isInCart(props.cantidad);
    }

    return(
        <>
            <div className="divTitular">
                <p className="titular">{props.juego}</p>
            </div>
            <img src={props.caratula} alt={props.juego}/>
            <p className="descripcion">{props.descripcion}</p>
            <div className="precioBotones">
                <span className="precio">Precio: {"$" + props.precio?.toLocaleString()}</span>
                <ItemCount onCart={onCart} onCartCount={onCartCount}/>
            </div>
        </>
    )
}

export default ItemDetail;