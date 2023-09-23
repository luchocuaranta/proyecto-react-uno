import React from "react";
import ItemDetail from "./ItemDetail";


const ItemList = ({ products }) => {
    return (
        <div className="container">
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-4 mb-4" key={product.id}>
                        <ItemDetail products={products} />
                    </div>
                ))}
            </div>
        </div>
    );
};


export default ItemList;