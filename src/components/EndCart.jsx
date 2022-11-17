import { useContext } from "react";
import { CartContext } from "./CartContext";

const EndCart = () => {
    const {cartList} = useContext(CartContext);
    
    const totalPurchase = () => {
        let total = cartList.find((item) => item.precio && item.quantity);
        return((total.precio)*(total.quantity));
    }

    return (
        <>
            <div className="purchase">
                <p className="total">Total: ${totalPurchase().toLocaleString()}</p>
                <button className="endPurchase">Finalizar Compra</button>
            </div>
        </>
    )
}

export default EndCart;