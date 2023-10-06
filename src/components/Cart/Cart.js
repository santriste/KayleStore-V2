import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import './Cart.css'

const Cart = () => {
    const { cart, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
        <div className="Container">
            <h1> Carrito </h1>

            {
                cart.map((prod) => (
                    <div key={prod.nombre}>
                        <h3>{prod.nombre}</h3>
                        <p>Precio ${prod.precio}</p>
                        <p>Precio ${prod.precio * prod.cantidad}</p>
                        <p>Cantidad {prod.cantidad}</p>
                    </div>
                ))
            }

            {
                cart.length > 0 ?
                <>
                    <h2>Precio total: ${precioTotal()}</h2>
                    <h3>
                        <Link to="/checkout" className="finish">Finalizar compra</Link>
                    </h3>
                    <button className="btnclear" onClick={handleVaciar}>Vaciar</button>
                </>
                :
                <h2>El carrito está vacío</h2>
            }
        </div>
    )
}

export default Cart;
