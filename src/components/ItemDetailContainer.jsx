import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore"; 
import { db } from "../functions/firebaseConfig";
import Spinner from "./Spinner";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [juego, setJuego] = useState([]);
    const [loading, setLoading] = useState(true);
    const { idItem } = useParams();

    useEffect(()=>{
        const coleccionProd = collection(db, "videojuegos");
        const referenciaDoc = doc(coleccionProd, idItem)
        getDoc(referenciaDoc)
        .then((result)=>{
          setJuego({
            id:result.id,
            ...result.data()
          })
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
      }, [idItem])

    return (
        <>
            {loading ? <Spinner/>
            : <div className="popUp">
                <ItemDetail 
                    id={juego.id}
                    key={juego.id}
                    caratula={juego.caratula}
                    descripcion={juego.descripcion}
                    juego={juego.juego}
                    precio={juego.precio}
                />
            </div>
            }
        </>
    )
}

export default ItemDetailContainer;