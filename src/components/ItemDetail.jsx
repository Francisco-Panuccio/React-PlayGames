import minus from "../iconos/minus.svg";
import plus from "../iconos/plus.svg";

const ItemDetail = (props) => {
    return(
        <>
            <div className="divTitular">
                <p className="titular">{props.juego}</p>
            </div>
            <img src={props.caratula} alt={props.juego}/>
            <p className="descripcion">{props.descripcion}</p>
            <div className="precioBotones">
                <span className="precio">Precio: {"$" + props.precio?.toLocaleString()}</span>
                <div className="botones">
                    <button className="botonIzq"><img src={minus} alt="" /></button>
                    <button className="botonCompra">Comprar</button>
                    <button className="botonDer"><img src={plus} alt="" /></button>
                </div>
            </div>
        </>
    )
}

export default ItemDetail;