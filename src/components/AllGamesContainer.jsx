import { useState, useEffect } from "react";
import { customFetch } from "../functions/customFetch";
import AllGames from "./AllGames";
import videojuegos from "./json/videojuegos.json";

const AllGamesContainer = () => {
    const [products,setProducts] = useState([]);

    function totalFetchList() {
        customFetch(0, videojuegos)
            .then(response => {
                setProducts(response);
            })
            .catch(error => console.log(error))
            .finally(() => console.log("Proceso Finalizado"))
    }

    useEffect(() => {
        totalFetchList();
    });

    return (
        <>
            <div className="item">
                {
                    products.map(game => (
                        <AllGames
                            id={game.id}
                            key={game.id}
                            caratula={game.caratula}
                            juego={game.juego}
                            precio={game.precio}
                        />))
                }
            </div>
        </>
    )
}

export default AllGamesContainer;