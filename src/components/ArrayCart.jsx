import Delete from "../iconos/delete.svg";
import minus from "../iconos/minus.svg";
import plus from "../iconos/plus.svg";

const ArrayCart = (props) => {
    return (
        <>
            <h1 className="tituloCart">Carrito de Compras</h1>
            <div className="cart">
                <div className="continue">
                    <button>Continuar Comprando</button>
                </div>
                <div className="emptyAll">
                    <button>Limpiar Carrito<img src={Delete} alt="Tacho de Basura" /></button>
                </div>
            </div>
            <div className="arrayCart">
                <img className="imgCart" src={props.caratula} alt={props.juego} />
                <div className="npCart">
                    <span className="nameCart">{props.juego}</span>
                    <span className="priceCart">{props.precio}</span>
                </div>
                <div className="buttonCart">
                    <button className="botonIzq"><img src={minus} alt="Botón Menos" /></button>
                    <button className="botonCompra">Comprar<input className="cantidades" type="text" value={0} readOnly></input></button>
                    <button className="botonDer"><img src={plus} alt="Botón Más" /></button>
                </div>
                <button className="delete"><img src={Delete} alt="Tacho de Basura" /></button>
            </div>
        </>
    )
}

export default ArrayCart;