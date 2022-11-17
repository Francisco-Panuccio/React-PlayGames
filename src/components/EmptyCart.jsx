import { Link } from "react-router-dom";

const EmptyCart = () => {
    return (
        <>
            <h1 className="tituloCart">Carrito de Compras</h1>
            <div className="cart">
                <div className="continue">
                    <Link to="/allGames"><button>Continuar Comprando</button></Link>
                </div>
                <div className="empty">
                    <p>El carrito se encuentra vacío...</p>
                </div>
            </div>
        </>
    )
}

export default EmptyCart;