import { serverTimestamp, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../functions/firebaseConfig"
import { useContext } from "react";
import { CartContext } from "./CartContext";

const EndCart = ({total}) => {
    const { cartList, removeList } = useContext(CartContext);

    const encuesta = () => {
        Swal.fire({
            title: 'Califícanos',
            icon: 'question',
            input: 'range',
            inputLabel: '¿Qué tan satisfecho está con la página?',
            inputAttributes: {
              min: 0,
              max: 100,
              step: 1
            },
            inputValue: 0
          })
    }

    const createOrder = () => {
        let order = {
            buyer: {
                name: "Pedro Márquez",
                email: "pedromarquez@gmail.com",
                phone: "212-555-9977"
            },
            date: serverTimestamp(),
            items: cartList.map((item) => ({
                id: item.id,
                price: item.precio,
                title: item.juego,
                qty: item.quantity
            })),
            total: total
        }

        const createOrderInFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }

        createOrderInFirestore()
        .then(
            result => Swal.fire({
                title: `¡Compra Realizada!`,
                text: "Orden de Compra: " + result.id,
                icon: `success`,
            }),
            removeList(),
            encuesta()
            )
        .catch((error) => console.log(error));
    }

    return (
        <>
            <div className="purchase">
                <p className="total">Total: ${total}</p>
                <button className="endPurchase" onClick={createOrder}>Finalizar Compra</button>
            </div>
        </>
    )
}

export default EndCart;