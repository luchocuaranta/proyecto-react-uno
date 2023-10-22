import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';


const Signout = () => {

    const [pedidoId, setPedidoId] = useState("");
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        const pedir = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedir);

        const pedidosRe = collection (db, "pedidos");

        addDoc(pedidosRe, pedir)
        .then((doc) => {
            setPedidoId(doc.id);
            vaciarCarrito();
        })
    }

    if (pedidoId) {
        return (
            <div className="container">
                <h1>Muchas Gracias!</h1>
                <p>Tu número de pedido es: {pedidoId}</p>
            </div>
        )
    }


    return (

        <div className="container d-flex flex-column align-items-center">
            <h2>Ingresa tus datos para Finalizar Compra</h2>
            <form onSubmit={handleSubmit(enviar)} className='formulario gap-4 mt-4'>
    
                <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
                <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
                <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />
    
                <button className="btn-custom" type="submit">Enviar</button>
    
            </form>
        </div>
    
    )
}

export default Signout