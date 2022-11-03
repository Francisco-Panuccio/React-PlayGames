import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { customFetch } from "../functions/customFetch";
import videojuegos from "./json/videojuegos.json";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [juego, setJuego] = useState([]);
    const { idItem } = useParams();

    useEffect(() => {
        customFetch(2000, videojuegos.find(item => item.id === idItem))
            .then(response => setJuego(response))
            .catch(error => console.log(error))
            .finally(() => console.log("Proceso Finalizado"))
    }, [])

    return (
        <>
            {
                juego.map(item => (
                    <ItemDetail
                        key={item.id}
                        caratula={item.caratula}
                        descripcion={item.descripcion}
                        juego={item.juego}
                        precio={item.precio}
                    />
                ))
            }

            <div className="popUp">
                <ItemDetail />
            </div>
        </>
    )
}

export default ItemDetailContainer;