import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={product.img} class="img-fluid rounded-start" alt="hola"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="card-title">{product.nombre}</h3>
                        <p className="card-text">{product.descripcion}</p>
                        <p id={product.id}></p>
                        <ItemCount stock={4} inicial={1} onAdd={(count) => console.log(`Se agrego ${count} items al carrito`)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;





