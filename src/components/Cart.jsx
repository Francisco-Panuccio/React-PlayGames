import { useContext } from "react";
import { CartContext } from "./CartContext";
import EmptyCart from "./EmptyCart";
import ArrayCart from "./ArrayCart";

const Cart = () => {
const {cartList} = useContext(CartContext);

    return (
        <> 
            {
                cartList.length === 0 ? <EmptyCart/>
                : cartList.map(item => (
                    <ArrayCart
                        id={item.id}
                        key={item.id}
                        caratula={item.caratula}
                        cantidad={item.count}
                        juego={item.juego}
                        precio={item.precio}
                    />))     
            }
        </>
    ) 
}

export default Cart;