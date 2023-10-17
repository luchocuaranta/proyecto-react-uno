import { createContext,  useState } from "react"


export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);

    const agregarCarrito = (product, cantidad) => {
        const itemAgregado = { ...product, cantidad };
        const nuevoCarrito = [...carrito];
        const siCarrito = nuevoCarrito.find((product) => product.id === itemAgregado.id)


        if (siCarrito) {
            siCarrito.cantidad = siCarrito.cantidad + cantidad;
            setCarrito(nuevoCarrito)
        } else {
            nuevoCarrito.push(itemAgregado);
        }

        setCarrito(nuevoCarrito); 
    }

    const carritoCantidad = () => {
        return carrito.reduce((acc, product) => acc + product.cantidad, 0);
    }

    const precioTotal = () => {
        return carrito.reduce((acc, product) => acc + product.precio * product.cantidad, 0);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    return(
        <CartContext.Provider value={ {carrito, agregarCarrito, carritoCantidad, precioTotal, vaciarCarrito} }>
                {children}
        </CartContext.Provider>

    )

}

