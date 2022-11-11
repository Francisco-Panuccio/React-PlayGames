import { useState, createContext } from "react";
import { useParams } from "react-router-dom";

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [cartList, setCartList] = useState([]);
    const { idItem } = useParams();

    const addItem = (juego, cant) => {
        if(cartList.find((game) => game.id === parseInte(idItem))) {
            SetCant (cant + 1);
        } else {
            setCartList([
                ...cartList,
                juego
            ]);
        }
    }

    return(
        <>
            <CartContext.Provider value={{cartList, addItem}}>
                {props.children}
            </CartContext.Provider>
        </>
    )
}

export default CartContextProvider;