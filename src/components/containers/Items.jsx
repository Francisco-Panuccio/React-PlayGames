import Item from "../Item";
import Spinner from "../Spinner";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../../functions/firebaseConfig";

const Items = () => {
    const [game, setGame] = useState([]);
    const [loading, setLoading] = useState(true);
    const { idCategory } = useParams();

useEffect(async () => {
    const querySnapshot = await getDocs(collection(db, "videojuegos"));
    const dataFromFirestore = querySnapshot.docs.map(item => ({
        id: item.id,
        ...item.data()
    }));
    if(idCategory) {
        setGame(dataFromFirestore.filter(item => item.empresa === idCategory));
    } else {
        setGame(dataFromFirestore);
    }
    setLoading(false);
}, [idCategory])


/*     function fetchList() {
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
    } */
    
/*     useEffect(() => {
        fetchList();
    }, [idCategory]) */

    return (
        <>
                {loading ? <Spinner/>
                    : game.map(item => (
                        <Item
                            id={item.id}
                            key={item.id}
                            caratula={item.caratula}
                            juego={item.juego}
                            precio={item.precio}
                        />))   
                }
        </>
    )
}

export default Items;