
import React, { useState, useEffect } from "react"; 
import ItemList from "./ItemList";

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
        <div className="container mt-4">
            <ItemList products={products} />
        </div>
    );
};

export default ItemDetailContainer;