import React from "react";
import './MenCategoryCSS/MenCategory.css'
import Sort from "../../Components/Items/Sort";
export default function Blazers(){
    return (
        <div className="men-shirts">
            <img className="men-shirts-banner" src="https://andreemilio.com/wp-content/uploads/2021/08/products-banner-blazzers.jpg" alt="" />
            <div className="men-shirts-items">
            <Sort property="men-blazers" />
            </div>
        </div>
    )
}