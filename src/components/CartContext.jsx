import { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [cartList, setCartList] = useState([]);

    const isInCart = (item, cantidad) => {
        if(cartList.some((game) => game.id === item.id)) {
            console.log("El producto se encuentra en el carrito");
        } else {
            setCartList([
                ...cartList,
                {
                    item,
                    cantidad
                }
            ]);
        }
    }

    return(
        <>
            <CartContext.Provider value={{cartList, isInCart}}>
                {props.children}
            </CartContext.Provider>
        </>
    )
}

export default CartContextProvider;