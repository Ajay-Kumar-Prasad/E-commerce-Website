import React from "react";
import './MenCategoryCSS/MenCategory.css'
import Sort from "../../Components/Items/Sort";
export default function Ethnics(){
    return (
        <div className="men-shirts">
            <img className="men-shirts-banner" src="https://www.cbazaar.com/blog/wp-content/uploads/2023/11/Blog_Banner_Nov02_04.jpg" alt="" />
            <div className="men-shirts-items">
            <Sort property="men-ethnics" />
            </div>
        </div>
    )
}