import React, { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom";


const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (

        <div className="container">
            <h1>Carrito</h1>
            {
                carrito.map((product) => (
                    <div key={product.id}>
                        <h2>{product.nombre}</h2>
                        <p>Precio por unidad: ${product.precio}</p>
                        <p>Cantidad: {product.cantidad}</p>
                        <p>Total: ${product.precio * product.cantidad}</p>
                    </div>

                ))
            }

            {

                carrito.length > 0 ?
                    <>
                        <h2>Precio total: ${precioTotal()}</h2>
                        <button onClick={handleVaciar}>Vaciar</button>
                        <Link to="/signout">Finalizar Compra</Link>
                    </> :
                    <h2>El carrito está vacío </h2>

            }
        </div>


    )
}

export default Carrito