import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(initialCart);

  const addToCart = (nombre, cantidad, precio) => {
    const itemAdded = { nombre: nombre, cantidad: cantidad, precio: precio };

    setCart((prevCart) => {
      const newCart = [...prevCart];
      const index = newCart.findIndex((item) => item.nombre === nombre);

      if (index !== -1) {
        newCart[index].cantidad += cantidad;
      } else {
        newCart.push(itemAdded);
      }

      return newCart;
    });
  };

  const quantityOnCart = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  const precioTotal = () => {
    return cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  };

  const vaciarCarrito = () => {
    setCart([]); // Esto limpia el carrito
    localStorage.removeItem("cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        quantityOnCart,
        precioTotal,
        vaciarCarrito, // Asegúrate de incluir la función vaciarCarrito aquí
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
