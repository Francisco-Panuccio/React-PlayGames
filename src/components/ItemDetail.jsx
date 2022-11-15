import ItemCount from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const ItemDetail = (props) => {
    console.log(props);

    const { addToCart } = useContext(CartContext);

    const onAdd = (props, count) => {
        console.log(`Agregaste ${count} de items`);
        addToCart(props, count);
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