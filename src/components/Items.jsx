import React from "react";
import ItemCount from "./pages/ItemCount";

const Items = ({ products }) => {
    return (
        <div className="card mb-3">
            <div className="card-body ">
                <img src={products.img} className="card-img-top" alt='hola' />
                <h2 className="card-title m-2">{products.nombre}</h2>
                <p className="card-text">{products.descripcion}</p>
                <p>${products.precio}</p>
                <p id={products.id}></p>
                <ItemCount stock={4} inicial={1} onAdd={(count) => console.log(`Se agregaron ${count} items al carrito`)} />
            </div>
        </div>
    );
};

export default Items;