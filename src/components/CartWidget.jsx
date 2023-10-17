import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
    const {carritoCantidad} = useContext(CartContext);


    return (
        
        <div className="cart-widget">
            <Link to="/carrito"><i className="fas fa-shopping-cart"></i><span> {carritoCantidad()}</span></Link>
            
        </div>


    )
}

export default CartWidget