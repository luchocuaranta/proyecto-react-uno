import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const Items = ({ product }) => {
    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < product.stock && setCantidad(cantidad + 1)
    }

    const handleAgregar = () => {
        console.log({...product, cantidad})
    }
    return (
        <div>
            <div className="card mb-3 ">
                <div className="">
                    <img src={product.img} className="card-img-top" alt='hola' />
                    <h2 className="card-title m-2">{product.nombre}</h2>
                    <p>${product.precio}</p>
                    <Link className='btn btn-outline-dark btn-sm' to={`/item/${product.id}`}>Ver detalle</Link>
                    <ItemCount 
                            cantidad={cantidad}
                            handleSumar={handleSumar}
                            handleRestar={handleRestar}
                            handleAgregar={handleAgregar}
                    />
                </div>
            </div>
        </div>

    );
};

export default Items;