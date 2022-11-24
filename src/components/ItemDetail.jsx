import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import Icono_Cart from "../iconos/cart_icon.svg";
import ItemCount from "./ItemCount";

const ItemDetail = ({juego, caratula, descripcion, precio, id}) => {
    const [compra, setCompra] = useState(false);
    const { addToCart } = useContext(CartContext);

    const onAdd = (count) => {
        let item= {
            id,
            juego,
            caratula,
            precio
        }
        addToCart(item, count);
        setCompra(true);
    }

    return(
        <>
            <div className="divTitular">
                <p className="titular">{juego}</p>
            </div>
            <img src={caratula} alt={juego}/>
            <p className="descripcion">{descripcion}</p>
            <div className="precioBotones">
                <span className="precio">Precio: {"$" + precio?.toLocaleString()}</span>
                {compra ? <Link to="/Cart"><button className="checkout"><img src={Icono_Cart}/></button></Link> : <ItemCount onAdd={onAdd}/>}
            </div>
        </>
    )
}

export default ItemDetail;