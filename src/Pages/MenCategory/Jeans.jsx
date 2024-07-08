import React from "react";
import './MenCategoryCSS/MenCategory.css'
import Sort from "../../Components/Items/Sort";
export default function Jeans(){
    return (
        <div className="men-shirts">
            <img className="men-shirts-banner" src="https://www.wamdenim.com/media/wysiwyg/JEANS_18.WEBP" alt="" />
            <div className="men-shirts-items">
            <Sort property="men-jeans" />
            </div>
        </div>
    )
}