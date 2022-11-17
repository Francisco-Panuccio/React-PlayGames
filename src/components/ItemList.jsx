import Item from "./Item"

const ItemList = ({games}) => {
    return (
        <>
            <div className="item">
                {
                    games.map(item => (
                        <Item
                            id={item.id}
                            key={item.id}
                            caratula={item.caratula}
                            juego={item.juego}
                            precio={item.precio}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default ItemList;