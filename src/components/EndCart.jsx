import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";

const EndCart = () => {
    const [montoTotal, setMontoTotal] = useState(0);
    const { cartList } = useContext(CartContext);

    const totalPurchase = () => {
        const chest = cartList.filter((game) => game.total);
        return(chest.reduce((pV, cV) => pV + cV, 0));
    }
    
    useEffect(() => {
        setMontoTotal(totalPurchase);
    }, [totalPurchase])

    return (
        <>
            <div className="purchase">
                <p className="total">Total: $<input className="totalInput" value={montoTotal}></input></p>
                <button className="endPurchase">Finalizar Compra</button>
            </div>
        </>
    )
}

export default EndCart;