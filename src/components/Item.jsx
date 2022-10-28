import { useState } from "react";

const Item = () => {
    const [game, setGame] = useState([]);
    
    return(
        <>
            {
                game.map(item => (
                    <Item
                    key={item.id}
                    caratula={item.caratula}
                    juego={item.juego}
                    precio={item.precio}
                    />
                ))
            }
        </>
    )
}