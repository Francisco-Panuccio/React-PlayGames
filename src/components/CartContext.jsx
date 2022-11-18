import { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [cartList, setCartList] = useState([]);

    const isInCart = (id) => {
        return cartList.some((game) => game.id === id)
    }
    
    const addToCart = (item, cantidad) => {
        if(isInCart(item.id)) {
            const carritoActualizado = cartList.map((prod) =>{
                if(prod.id === item.id) {
                    return {...prod, quantity:prod.quantity + cantidad}
                } else {
                    return prod;
                }
            })
            setCartList(carritoActualizado);
        } else {
            const purchase = {...item, quantity:cantidad};
            setCartList([...cartList, purchase]);
        }
    }

    const removeList = () => {
        setCartList([]);
    }

    const deleteItem = (id) => {
        setCartList(cartList.filter((item) => item.id !== id))
    }

    const alert = () => {
        const alerts = cartList.map((cant) => cant.quantity);
        return alerts.reduce((pV, cV) => pV + cV, 0);
    }

    return(
        <>
            <CartContext.Provider value={{cartList, isInCart, addToCart, removeList, deleteItem, alert}}>
                {props.children}
            </CartContext.Provider>
        </>
    )
}

export default CartContextProvider;