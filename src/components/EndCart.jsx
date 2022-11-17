/* import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
 */
const EndCart = (props) => {
/*     const [total, setTotal] = useState(0); */
/*     const { addToCart, cartList } = useContext(CartContext); */
    
/*     const totalPurchase = () => {
        let total = cartList.find((item) => item.precio && item.quantity);
        return((total.precio)*(total.quantity));
    } */

/*     const totalPurchase = () => {
        const multiply = cartList.find((item) => item.precio && item.quantity);
        console.log(multiply);
        return((multiply.precio)*(multiply.quantity));
    } */

/*     useEffect(() => {
        setTotal(totalPurchase);
    }, [addToCart]) */

    

    return (
        <>
            <div className="purchase">
                <p className="total">Total: $<input className="totalInput" value={props.total}></input></p>
                <button className="endPurchase">Finalizar Compra</button>
            </div>
        </>
    )
}

export default EndCart;