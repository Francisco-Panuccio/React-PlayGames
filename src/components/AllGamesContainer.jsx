import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../functions/firebaseConfig"
import AllGames from "./AllGames";
import Spinner from "./Spinner";

const AllGamesContainer = () => {
    const [products,setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const coleccionProd2 = collection(db, "videojuegos")
        getDocs(coleccionProd2)
        .then((result)=>{
            const all = result.docs.map((prod)=>{
                return{
                    id:prod.id,
                  ...prod.data()
                }
            })
            setProducts(all)
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
      });

    return (
        <>
            <div className="item">
                {
                    loading ? <Spinner/>
                    : products.map(game => (
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