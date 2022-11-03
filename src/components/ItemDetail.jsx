const ItemDetail = (props) => {
    return(
        <>
            <img src={props.caratula} alt={props.juego}/>
            <p className="descripcion">{props.descripcion}</p>
            <div>
                <span className="precio">{"$" + props.precio.toLocaleString()}</span>
                <button>Comprar</button>
            </div>
        </>
    )
}

export default ItemDetail;