import React from "react";
import { Link } from "react-router-dom";

const Items = ({ product }) => {
    
    return (
        <div>
            <div className="card mb-3 ">
                <div className="">
                    <img src={product.img} className="card-img-top" alt='hola' />
                    <h2 className="card-title m-2">{product.nombre}</h2>
                    <p>${product.precio}</p>
                    <Link className='btn btn-outline-dark btn-sm mb-3' to={`/item/${product.id}`}>Ver detalle</Link>
                    
                </div>
            </div>
        </div>

    );
};

export default Items;