import React from 'react';
import "../style.css";

const ItemListContainer = ({ greeting }) => {

    const productos = [
        { id: 1, nombre: "Hoodie Classic", precio: 13000, descripcion: "Buzo negro Oversize Classic", img: "./clothes-chica-redu.jpg" },
        { id: 2, nombre: "Hoodie System", precio: 16000, descripcion: "Buzo negro Oversize System", img: "./clothes-escalera-redu.jpg" },
        { id: 3, nombre: "Remera Classic", precio: 10000, descripcion: "Remera negra Oversize Classic", img: "./clothes-reme-classic-redu.jpg" }
    ]

    return (
        <div className="container mt-2">
            <div className="row">
                <div className="col-md-6 offset-md-3 d-flex align-items-center">
                    <div className="text-center">
                        <h1 className='p-2'>{greeting}</h1>
                    </div>
                </div>


                {productos.map((product) => (
                    <div key={product.id} className="col-md-4">
                        <div className="card mb-3">
                            <div className="card-body ">
                                <img src={product.img} class="card-img-top" alt='' />
                                <h2 className="card-title">{product.nombre}</h2>
                                <p className="card-text">{product.descripcion}</p>
                                <p>${product.precio}</p>
                                <button className='btn btn-custom btn-dark' 
                                id={product.id}>Añadir al carrito</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer