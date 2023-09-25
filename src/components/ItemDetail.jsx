import React from "react";
import Items from "./Items";


const ItemDetail = ({ products }) => {
    return (
        <div className="container">
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-4 mb-4" key={product.id}>
                        <Items products={products} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemDetail;