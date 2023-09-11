import React from 'react';

const CartWidget = () => {
    const hardCode = 2;

    return (
        
        <div className="cart-widget">
            <i className="fas fa-shopping-cart"></i> {}
            <span className='badge-pill'>{hardCode}</span>
        </div>


    )
}

export default CartWidget