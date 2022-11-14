import { Link } from "react-router-dom";
import minus from "../iconos/minus.svg";
import plus from "../iconos/plus.svg";
import { useState } from "react";

const ItemCount = ({onAdd}) => {
    const [count, Setcount] = useState(1);
    
    function increase() {
        if(count < 9) {
            Setcount (count + 1);
        }
    }

    function decrease() {
        if(count > 1) {
            Setcount (count - 1);
        }
    }

    return (
        <>
            <div className="botones">
                <button className="botonIzq" onClick={() => decrease()}><img src={minus} alt="Botón Menos" /></button>
                <Link to="/Cart"><button className="botonCompra" onClick={() => onAdd(count)}>Comprar<input className="cantidades" type="text" value={count} readOnly></input></button></Link>
                <button className="botonDer" onClick={() => increase()}><img src={plus} alt="Botón Más" /></button>
            </div>
        </>
    )
}

export default ItemCount;