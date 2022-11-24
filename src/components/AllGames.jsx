import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import eye from "../iconos/eye.svg";

const AllGames = ({juego, caratula, precio, id}) => {
    const { addToCart, alert } = useContext(CartContext);

    const onAdd3 = () => {
        let countDefault = 1;
        let games= {
            id,
            juego,
            caratula,
            precio
        }
        addToCart(games, countDefault);
    }

    return (
        <>  
            <div className="div1">
                <img src={caratula} alt={juego} />
                <span className="nombre">{juego}</span>
                <span className="precio">Precio: {"$" + precio?.toLocaleString()}</span>
                <div className="div2">
                    <button onClick={() => {onAdd3(), alert()}} className="compra">Comprar</button>
                    <Link to={`/item/${id}`}><button className="detalles"><img src={eye} className="ojo" /></button></Link>
                </div>
            </div>
        </>
    )
}

export default AllGames;