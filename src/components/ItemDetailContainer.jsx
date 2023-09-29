
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const {productId} = useParams();
    const [product, setProducts] = useState({});

    useEffect(() => {
        fetch("/productos.json")
            .then((response) => response.json())
            .then((data) => {
                const selectProduct = data.find((product) => product.id === parseInt(productId));

                if(selectProduct){
                    setProducts(selectProduct);
                }else{
                    console.log(`Producto no encontrado`)
                }
                
            })
            .catch((error) => console.error("Error al cargar los productos", error));
    }, );


    return (
        <div className="container mt-4 text-center">
            <h2 className='p-2'>Detalle</h2>
            <ItemDetail product={product} />
        </div>
    );
};

export default ItemDetailContainer;




/*

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({productIds}) => {
    const {productId} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch("/productos.json")
            .then((response) => response.json())
            .then((data) => {
                //Sin useParams
                const selectProduct = data.find((product) => product.id === productIds);
                   //Con useParams
                   //const selectProduct = data.find((product) => product.id === parseInt(productId));
                if(selectProduct){
                    setProduct(selectProduct);
                }else{
                    console.log(Producto ${productId} no encontrado)
                }
            })
            .catch((error) => console.error("Error al cargar los productos", error));
    },[]);


    return (
        <div className="container mt-4 text-center">
            <h2 className='p-2'>Detalle</h2>
            <ItemDetail product={product} />
        </div>
    );
};
*/