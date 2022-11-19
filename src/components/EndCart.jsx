const EndCart = ({total}) => {
    return (
        <>
            <div className="purchase">
                <p className="total">Total: ${total}</p>
                <button className="endPurchase">Finalizar Compra</button>
            </div>
        </>
    )
}

export default EndCart;