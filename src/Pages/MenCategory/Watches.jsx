import React from "react";
import './MenCategoryCSS/MenCategory.css'
import shirts_data from "./MenCategory";
import CategoryItem from "../../Components/Items/CategoryItems";
export default function Watches(){
    return (
        <div className="men-shirts">
            <img className="men-shirts-banner" src="https://m.media-amazon.com/images/S/aplus-media/sc/364a1399-375f-4c3f-b9bf-1b11e6f5f8b7.__CR0,0,1940,600_PT0_SX970_V1___.jpg" alt="" />
            <div className="men-shirts-items">
            {shirts_data.map((item,i)=>{
                if(item.category==="men-watches")
                    return <CategoryItem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} discount={item.discount}/> 
                })}
            </div>
        </div>
    )
}