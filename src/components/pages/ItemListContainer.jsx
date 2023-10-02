import React, { useState, useEffect } from 'react';
import "../style.css";
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const category = useParams().category

    useEffect(() => {

        fetch('/productos.json')
            .then((response) => response.json())
            .then((data) => {
                if (category) {
                    setProducts(data.filter((products) => products.category === category))
                } else {
                    setProducts(data);
                }

            })
            .catch((error) => console.error("Error al cargar los productos", error));

    }, [category])



    return (
        <div className='container mt-2 text-center'>
            <h1 className='p-2'>{greeting}</h1>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer










/*
<div className="container mt-2">
            <div className="row">
                <div className="col-md-6 offset-md-3 d-flex align-items-center">
                    <div className="text-center">
                        <h1 className='p-2'>{greeting}</h1>
                    </div>
                </div>


                {productosReales.map((product) => (
                    <div key={product.id} className="col-md-4">
                        <div className="card mb-3">
                            <div className="card-body ">
                                <img src={product.img} className="card-img-top" alt='' />
                                <h2 className="card-title">{product.nombre}</h2>
                                <p className="card-text">{product.descripcion}</p>
                                <p>${product.precio}</p>
                                <p id={product.id}></p>
                                <ItemCount stock={4} inicial={1} onAdd={(count) => console.log(`Se agregaron ${count} items al carrito`)} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>*/