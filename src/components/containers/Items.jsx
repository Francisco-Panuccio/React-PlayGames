import Item from "../Item";
import videojuegos from "../json/videojuegos.json";
import { useParams } from "react-router-dom";
import { customFetch } from "../../functions/customFetch"
import { useState, useEffect } from "react";

const Items = () => {
    const [game, setGame] = useState([]);
    const { PlayStation, Nintendo, Xbox } = useParams();

    function comprar(id) {
        console.log(`Compraste el producto ${id}`)
    }

    function itemsPlay() {
        customFetch(2000, videojuegos.filter(item => item.empresa === "PlayStation"))
            .then(response => setGame(response))
            .catch(error => console.log(error))
            .finally(() => console.log("Proceso Finalizado"))
    }

    function itemsNint() {
        customFetch(2000, videojuegos.filter(item => item.empresa === "Nintendo"))
            .then(response => setGame(response))
            .catch(error => console.log(error))
            .finally(() => console.log("Proceso Finalizado"))
    }

    function itemsXbox() {
        customFetch(2000, videojuegos.filter(item => item.empresa === "Xbox"))
            .then(response => setGame(response))
            .catch(error => console.log(error))
            .finally(() => console.log("Proceso Finalizado"))
    }
    
    useEffect(() => {
        if(PlayStation) {
            return itemsPlay();
        }
        else if(Nintendo) {
            return itemsNint();
        }
        else if(Xbox) {
            return itemsXbox();
        }
    }, [PlayStation, Nintendo, Xbox])

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