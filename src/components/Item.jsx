import eye from "../iconos/eye.svg";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const Item = ({juego, caratula, precio, id}) => {
    const { addToCart, alert } = useContext(CartContext);

    const onAdd2 = () => {
        let countDefault = 1;
        let game= {
            id,
            juego,
            caratula,
            precio
        }
        addToCart(game, countDefault);
    }

    return (
        <>
            <div className="div1">
                <img src={caratula} alt={juego} />
                <span className="nombre">{juego}</span>
                <span className="precio">Precio: {"$" + precio?.toLocaleString()}</span>
                <div className="div2">
                    <button onClick={() => {onAdd2(), alert()}} className="compra">Comprar</button>
                    <Link to={`/item/${id}`}><button className="detalles"><img src={eye} className="ojo"/></button></Link>
                </div>
            </div>
        </>
    )
}

export default Item;