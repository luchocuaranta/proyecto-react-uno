import React from "react";
import ItemCount from "./ItemCount";

const Items = ({ product }) => {
    return (
        <div>
            <div className="card mb-3 ">
                <div className="">
                    <img src={product.img} className="card-img-top" alt='hola' />
                    <h2 className="card-title m-2">{product.nombre}</h2>
                    <p>${product.precio}</p>
                    <a className="card-text" href={`/item/${product.id}`}>Ver detalle</a>
                    <ItemCount stock={4} inicial={1} onAdd={(count) => console.log(`Se agregaron ${count} items al carrito`)} />
                </div>
            </div>
        </div>

    );
};

export default Items;