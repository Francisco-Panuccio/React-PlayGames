import eye from "../iconos/eye.svg";
import { Link } from "react-router-dom";

const Item = (props) => {
    return (
        <>
            <div className="div1">
                <img src={props.caratula} alt={props.juego} />
                <span className="nombre">{props.juego}</span>
                <span className="precio">Precio:{"$" + props.precio.toLocaleString()}</span>
                <div className="div2">
                    <button onClick={props.comprar} className="compra">Comprar</button>
                    <Link to={`/item/${id}`}><button className="detalles"><img src={eye} className="ojo"/></button></Link>
                </div>
            </div>
        </>
    )
}

export default Item;