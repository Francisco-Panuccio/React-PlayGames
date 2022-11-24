import { serverTimestamp, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../functions/firebaseConfig"
import { useContext } from "react";
import { CartContext } from "./CartContext";

const EndCart = ({total}) => {
    const { cartList, removeList } = useContext(CartContext);

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
                allowOutsideClick: false,
                allowEscapeKey: false,
            }).then((result) => {
                if (result.isConfirmed) {
                    encuesta()
                }
              }), removeList()
            )
        .catch((error) => console.log(error))
        .finally(() => "Proceso Finalizado")
    }

    const encuesta = () => {
        Swal.fire({
            title: 'Califícanos',
            icon: 'question',
            allowOutsideClick: false,
            allowEscapeKey: false,
            input: 'range',
            inputLabel: '¿Qué tan satisfecho estás con la página?',
            inputAttributes: {
              min: 0,
              max: 100,
              step: 5
            },
            inputValue: 0
          }).then((result) => {
            if (result.value <= 25) {
                Swal.fire('¡Gracias por tu opinión, prontamente habrán muchas mejoras!');
            }
            else if (result.value <= 50) {
                Swal.fire('¡Gracias por tu opinión, en breve estaremos actualizando con nuevas mejoras!');
            }
            else if (result.value <= 75) {
                Swal.fire('¡Gracias por tu opinión, implementaremos mejoras para su satisfacción!');
            } else {
                Swal.fire('¡Gracias por tu opinión, apreciamos el cariño a nuestra página!');
            }
          })
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