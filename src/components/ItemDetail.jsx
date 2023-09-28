import React from "react";

const ItemDetail = (product) => {
    return(
        <div className="card mb-3">
            <div className="card-body ">
                <img src={product.img} className="card-img-top" alt='hola' />
                <h2 className="card-title m-2">{product.nombre}</h2>
                <p className="card-text">{product.descripcion}</p>
                <p id={product.id}></p>               
            </div>
        </div>
    )
}

export default ItemDetail;




