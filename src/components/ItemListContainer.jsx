import ItemList from "./ItemList";
import Spinner from "./Spinner";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore"; 
import { db } from "../functions/firebaseConfig";

const ItemListContainer = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const { idCategory } = useParams();

    useEffect(()=>{
        setLoading(true)
        const coleccionJuegos = idCategory ? query(collection(db, "videojuegos"), where("empresa", "==", idCategory)) : collection(db, "videojuegos")
        getDocs(coleccionJuegos)
        .then((result)=> {
          const lista = result.docs.map((producto)=>{
            return{
              id:producto.id,
              ...producto.data()
            }
          })
          setGames(lista)
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
      }, [ idCategory])

    return (
        <>            
            <div className="container">
                {loading ? <Spinner/> :<ItemList games={games}/>}  
            </div>
        </>
    )
}

export default ItemListContainer;