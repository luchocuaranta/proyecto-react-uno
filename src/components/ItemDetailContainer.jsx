
import React, { useState, useEffect } from "react"; 
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            fetch("/productos.json") 
                .then((response) => response.json())
                .then((data) => {
                    setProducts(data);
                })
                .catch((error) => console.error("Error al cargar los productos", error));
        }, 2000);
    }, []);

    return (
        <div className="container mt-4 text-center">
            <h2 className='p-2'>Detalle</h2>
            <ItemDetail products={products} />
        </div>
    );
};

export default ItemDetailContainer;