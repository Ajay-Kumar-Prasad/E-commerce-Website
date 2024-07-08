import React from "react";
import './MenCategoryCSS/MenCategory.css'
import Sort from "../../Components/Items/Sort";
export default function Formals(){
    return (
        <div className="men-shirts">
            <img className="men-shirts-banner" src="https://litb-cgis.rightinthebox.com/imagegy/202101/ca04cc1eab5349e7b0e7ec4be6bf84b8en8.jpg" alt="" />
            <div className="men-shirts-items">
            <Sort property="men-formals" />
            </div>
        </div>        
    )
}
