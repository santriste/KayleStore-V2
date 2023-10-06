
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const CartWidget = () => {


    const { quantityOnCart } = useContext(CartContext);


    return(
        <div>
            <Link className="menu-link" to="/cart">
                <div><img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" className="carticon" alt="Cart Icon"/> {quantityOnCart()} </div>
            </Link>
        </div>
    )
}

export default CartWidget