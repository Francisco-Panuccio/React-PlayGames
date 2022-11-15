import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import Delete from "../iconos/delete.svg";
import EmptyCart from "./EmptyCart";
import ArrayCart from "./ArrayCart";

const Cart = () => {
const {cartList, removeList} = useContext(CartContext);

    return (
        <> 
            {
                cartList.length === 0 ? <EmptyCart/>
                : <>
                    <h1 className="tituloCart">Carrito de Compras</h1>
                    <div className="cartFull">
                        <div className="continue">
                            <Link to="/"><button>Continuar Comprando</button></Link>
                        </div>
                        <div className="emptyAll">
                            <button onClick={removeList}>Limpiar Carrito:<img src={Delete} alt="Limpiar Carrito" /></button>
                        </div>
                    </div>
                    {cartList.map(item => (
                    <ArrayCart
                        id={item.id}
                        key={item.id}
                        caratula={item.caratula}
                        quantity={item.quantity}
                        juego={item.juego}
                        precio={item.precio}
                    />)) }
                    <div className="purchase">
                        <p className="total">Total: </p>
                        <button className="endPurchase">Terminar Compra</button>  
                    </div> 
                </>
            }
        </>
    ) 
}

export default Cart;