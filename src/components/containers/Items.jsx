import Item from "../Item";
import videojuegos from "../json/videojuegos.json";
import Spinner from "../Spinner";
import { useParams } from "react-router-dom";
import { customFetch } from "../../functions/customFetch"
import { useState, useEffect } from "react";

const Items = () => {
    const [game, setGame] = useState([]);
    const [loading, setLoading] = useState(true);
    const { idCategory } = useParams();

    function fetchList() {
        customFetch(2000, videojuegos)
            .then(response => {
                if(idCategory) {
                    setGame(response.filter(item => item.empresa === idCategory));
                } else {
                    setGame(response);
                }
                setLoading(false);
            })
            .catch(error => console.log(error))
            .finally(() => console.log("Proceso Finalizado"))
    }
    
    useEffect(() => {
        fetchList();
    }, [idCategory])

    return (
        <>
                {loading ? <Spinner/>
                    : game.map(item => (
                        <Item
                            id={item.id}
                            key={item.id}
                            caratula={item.caratula}
                            descripcion={item.descripcion}
                            juego={item.juego}
                            precio={item.precio}
                        />))   
                }
        </>
    )
}

export default Items;