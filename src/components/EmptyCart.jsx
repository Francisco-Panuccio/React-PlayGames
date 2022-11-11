const EmptyCart = () => {
    return (
        <>
            <h1 className="tituloCart">Carrito de Compras</h1>
            <div className="cart">
                <div className="continue">
                    <button>Continuar Comprando</button>
                </div>
                <div className="empty">
                    <p>El carrito se encuentra vacío</p>
                </div>
            </div>
        </>
    )
}

export default EmptyCart;