import React from "react";
import Items from "./Items";


const ItemList = ({ products }) => {
    return (
        <div className="container">
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-4 col- mb-2 mx-auto" key={product.id}>
                        <Items product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};


export default ItemList;