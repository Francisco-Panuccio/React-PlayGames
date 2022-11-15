import { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [cartList, setCartList] = useState([]);

    const isInCart = (id) => {
        return cartList.some((game) => game.id === id)
    }
    
    const addToCart = (item, cantidad) => {
        if(isInCart(item.id)) {
            console.log("Agregado");
            const carritoActualizado = cartList.map((prod) =>{
                if(prod.id === item.id) {
                    return {...prod, quantity:prod.quantity + cantidad}
                } else {
                    return prod;
                }
            })
            setCartList(carritoActualizado);
        } else {
            const purchase = {...item, quantity:cantidad}
            setCartList([...cartList, purchase]);
        }
    }

    const removeList = () => {
        setCartList([]);
    }

    const deleteItem = (id) => {
        setCartList(cartList.filter((item) => item.id !== id))
    }

    return(
        <>
            <CartContext.Provider value={{cartList, isInCart, addToCart, removeList, deleteItem}}>
                {props.children}
            </CartContext.Provider>
        </>
    )
}

export default CartContextProvider;