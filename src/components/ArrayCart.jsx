import { useContext } from "react";
import { CartContext } from "./CartContext";
import Delete from "../iconos/delete.svg";

const ArrayCart = (props) => {
    const { deleteItem } = useContext(CartContext);

    return (
        <>
            <div className="arrayCart">
                <img className="imgCart" src={props.caratula} alt={props.juego} />
                <div className="npCart">
                    <span className="nameCart">{props.juego}</span>
                    <span className="priceCart">{"$" + props.precio.toLocaleString()}</span>
                </div>
                <div className="quantity">
                    <p>Items:</p>
                    <input className="cantidades" type="text" value={props.quantity} readOnly></input>
                </div>
                <button className="delete" onClick={() => deleteItem(props.id)}><img src={Delete} alt="Tacho de Basura" /></button>
            </div>
        </>
    )
}

export default ArrayCart;