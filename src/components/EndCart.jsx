import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";

const EndCart = ({total}) => {
    const [montoTotal, setMontoTotal] = useState(0);
    const { cartList } = useContext(CartContext);

    let sum = 0;
    const totalPurchase = () => {
        sum = sum + total;
        console.log(sum);
    }

    useEffect(() => {
        totalPurchase();
    }, [])

    return (
        <>
            <div className="purchase">
                <p className="total">Total: ${montoTotal}</p>
                <button className="endPurchase">Finalizar Compra</button>
            </div>
        </>
    )
}

export default EndCart;