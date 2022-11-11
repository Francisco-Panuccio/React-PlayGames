import { useContext } from "react";
import { CartContext } from "./CartContext";
import EmptyCart from "./EmptyCart";
import ArrayCart from "./ArrayCart";

const Cart = () => {
const cartItems = useContext(CartContext);

    return (
        <> 
            {
                cartItems.cartList.length === 0 ? <EmptyCart/> : <ArrayCart/>
            }
        </>
    ) 
}

export default Cart;