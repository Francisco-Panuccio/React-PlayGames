import Item from "../Item";
import videojuegos from "../json/videojuegos.json";
import { useParams } from "react-router-dom";
import { customFetch } from "../../functions/customFetch"
import { useState, useEffect } from "react";

const Items = () => {
    const [game, setGame] = useState([]);
    const { idCategory } = useParams();

    function comprar(id) {
        console.log(`Compraste el producto ${id}`)
    }

    function fetchList() {
        customFetch(2000, videojuegos)
            .then(response => {
                if(idCategory) {
                    setGame(response.filter(item => item.empresa === idCategory));
                } else {
                    setGame(response);
                }
            })
            .catch(error => console.log(error))
            .finally(() => console.log("Proceso Finalizado"))
    }
    
    useEffect(() => {
        fetchList();
    }, [idCategory])

    return (
        <>
            {
                game.map(item => (
                    <Item
                        id={item.id}
                        key={item.id}
                        caratula={item.caratula}
                        descripcion={item.descripcion}
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