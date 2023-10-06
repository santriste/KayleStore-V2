import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase/config";



const Checkout = () => {


    const { cart, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const order ={
            cliente: data,
            products: cart,
            total: precioTotal()
        }
        console.log(order);

        const ordersRef = collection(db, "orders");

        addDoc(ordersRef, order);
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