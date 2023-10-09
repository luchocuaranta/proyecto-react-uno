import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ product }) => {
    
    const { carrito, setCarrito } = useContext(CartContext);

    // console.log(carrito);

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < product.stock && setCantidad(cantidad + 1)
    }

    const handleAgregar = () => {
        const itemAgregado = {...product, cantidad}
        console.log(itemAgregado)
    }


    return (
        <div className="card mb-3">
            <div className="row g-0 d-flex align-items-center">
                <div className="col-md-4" >
                    <img src={product.img} className="img-fluid rounded-start" alt="hola"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="card-title">{product.nombre}</h3>
                        <p className="card-text">{product.descripcion}</p>
                        <p id={product.id}></p>
                        <p className="card-text">${product.precio}</p>
                        <ItemCount 
                            cantidad={cantidad}
                            handleSumar={handleSumar}
                            handleRestar={handleRestar}
                            handleAgregar={handleAgregar}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;





