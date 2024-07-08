import React from "react";
import './MenCategoryCSS/MenCategory.css'

import Sort from "../../Components/Items/Sort";
export default function Shirts(){
    return (
        <div className="men-shirts">
            <img className="men-shirts-banner" src="https://i.pinimg.com/originals/b8/ce/12/b8ce12af4e594bcb26b8f55b0377dad4.jpg" alt="" />
            <div className="men-shirts-items">
            <Sort property="men-shirts"/>
            </div>
        </div>
    )
}