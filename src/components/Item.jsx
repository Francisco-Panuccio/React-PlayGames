const Item = (props) => {
    return (
        <>
            <img src={props.caratula} alt={props.juego} />
            <div className="div1">
                <span className="nombre">{props.juego}</span>
                <span className="precio">{"$" + props.precio.toLocaleString()}</span>
                <div className="div2">
                    {<button onClick={props.comprar} className="compra">Comprar</button>}
                    {<button className="detalles">Detalles</button>}
                </div>
            </div>
        </>
    )
}

export default Item;