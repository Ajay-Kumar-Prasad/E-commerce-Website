import React from "react";
import '../Pages/CSS/ShowProduct.css';
export default function ShowProduct(props) {
    const {product} = props;
    return (
        <div className="show-product">
            HOME <i className="fa-solid fa-chevron-right"></i> SHOP <i className="fa-solid fa-chevron-right"></i> {product.category} <i className="fa-solid fa-chevron-right"></i> {product.name}
        </div>
    )
}