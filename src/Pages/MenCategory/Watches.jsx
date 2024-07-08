import React from "react";
import './MenCategoryCSS/MenCategory.css'
import Sort from "../../Components/Items/Sort";
export default function Watches(){
    return (
        <div className="men-shirts">
            <img className="men-shirts-banner" src="https://m.media-amazon.com/images/S/aplus-media/sc/364a1399-375f-4c3f-b9bf-1b11e6f5f8b7.__CR0,0,1940,600_PT0_SX970_V1___.jpg" alt="" />
            
            <div className="men-shirts-items">
            <Sort property="men-watches" />
            </div>
        </div>
    )
}