import Item from "../Item";
import videojuegos from "../json/videojuegos.json"
import { useState, useEffect } from "react";
import { customFetch } from "../../functions/customFetch";

const Items = () => {
    const [game, setGame] = useState([]);

    function comprar(id) {
        console.log(`Compraste el producto ${id}`)
    }

    useEffect(() => {
        customFetch(2000, videojuegos)
            .then(response => setGame(response))
            .catch(error => console.log(error))
            .finally(() => console.log("Proceso Finalizado"))
    })

    return (
        <>
            {
                game.map(item => (
                    <Item
                        key={item.id}
                        caratula={item.caratula}
                        juego={item.juego}
                        precio={item.precio}
                        comprar={() => comprar(item.id)}
                    />
                ))
            }
        </>
    )
}

export default Items;