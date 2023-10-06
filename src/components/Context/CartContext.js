import { createContext,useEffect,useState } from "react";


export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(carritoInicial)

    const addToCart = (nombre, cantidad) => {
        const itemAdded = { nombre: nombre, cantidad: cantidad };

        const newCart = [...cart];
        const index = newCart.findIndex((item) => item.nombre === nombre);

        if (index !== -1) {
            newCart[index].cantidad += cantidad;

        } else {
            newCart.push(itemAdded);

        }
        setCart(newCart)
        
    }


    const quantityOnCart = () => {
        return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
    }

    const precioTotal = () => {
        return cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    }

    const vaciarCarrito = () => {
        setCart([]);
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(cart))
    }, [cart])


    return( <CartContext.Provider value={ 
    {cart, 
    addToCart,
    quantityOnCart,
    precioTotal,
    vaciarCarrito}
     }>
        {children}
    </CartContext.Provider>
    )
}