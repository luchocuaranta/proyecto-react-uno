import React, { useState } from 'react';

const ItemCount = ({ stock, inicial, onAdd }) => {
    const [count, setCount] = useState(inicial);

    const incremento = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const decrecer = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    const manejoCarrito = () => {
        if (count > 0) {
            onAdd(count);
        }
    }

    return (
        <div className="item-count">
            <div className="btn-group">
                <button
                    className="btn btn-secondary"
                    onClick={decrecer}
                    disabled={count <= 1}
                >
                    -
                </button>
                <span className="btn btn-light">{count}</span>
                <button
                    className="btn btn-secondary"
                    onClick={incremento}
                    disabled={count >= stock}
                >
                    +
                </button>
            </div>
            <button
                className='btn btn-custom btn-dark' 
                onClick={manejoCarrito}
                disabled={stock === 0 || count === 0}
            >
                Agregar al carrito
            </button>
        </div>
    )
}

export default ItemCount;