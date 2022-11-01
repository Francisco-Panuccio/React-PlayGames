const Item = (props) => {
    return (
        <>
            <img src={props.caratula} alt={props.juego} />
            <div>
                <span className="nombre">{props.juego}</span>
                <span className="precio">{"$" + props.precio.toLocaleString()}</span>
                <button onClick={props.comprar}>Comprar</button>
            </div>
        </>
    )
}

export default Item;