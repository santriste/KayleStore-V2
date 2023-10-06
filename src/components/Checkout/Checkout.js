import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase/config";



const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("");

    const { cart, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido ={
            cliente: data,
            products: cart,
            total: precioTotal()
        }
        console.log(pedido);

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })
    }

    if (pedidoId){
        return (
            <div className="container">
                <h1>Muchas garcias por tu compra</h1>
                <p>Tu número de pedido es: {pedidoId}</p>
            </div>
        )
    }

    return(
        <div className="container">
        <h1 className="main-title">Finalizar compra</h1>
        <form className="formulario" onSubmit={handleSubmit(comprar)}>

            <input type="text" placeholder="Nombre" {...register("nombre")} />
            <input type="email" placeholder="Email" {...register("email")} />
            <input type="phone" placeholder="Teléfono" {...register("telefono")} />

            <button className="enviar" type="submit">Comprar</button>

        </form>
    </div>
    )
}

export default Checkout
