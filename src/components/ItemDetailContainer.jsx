import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { customFetch } from "../functions/customFetch";
import videojuegos from "./json/videojuegos.json";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [juego, setJuego] = useState([]);
    const { idItem } = useParams();

    useEffect(() => {
        customFetch(2000, videojuegos)
            .then(response => {
                setJuego(response.find(item => item.id === parseInt(idItem)));
            })
            .catch(error => console.log(error))
            .finally(() => console.log("Proceso Finalizado"))
    }, [])

    return (
        <>
            <div className="popUp">
                <ItemDetail 
                    id={juego.id}
                    key={juego.id}
                    caratula={juego.caratula}
                    descripcion={juego.descripcion}
                    juego={juego.juego}
                    precio={juego.precio}
                />
            </div>
        </>
    )
}

export default ItemDetailContainer;