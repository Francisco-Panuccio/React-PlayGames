import ItemCount from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const ItemDetail = (props) => {
    const cartItems = useContext(CartContext);

    const onAdd = (cantidad) => {
        console.log(`Agregaste ${cantidad} de items`);
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
                <ItemCount onAdd={onAdd}/>
            </div>
        </>
    )
}

export default ItemDetail;