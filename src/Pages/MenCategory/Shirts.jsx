import React from "react";
import './MenCategoryCSS/MenCategory.css'
import shirts_data from "./MenCategory";
import CategoryItem from "../../Components/Items/CategoryItems";
export default function Shirts(){
    return (
        <div className="men-shirts">
            <img className="men-shirts-banner" src="https://i.pinimg.com/originals/b8/ce/12/b8ce12af4e594bcb26b8f55b0377dad4.jpg" alt="" />
            <div className="men-shirts-items">
            {shirts_data.map((item,i)=>{
                if(item.category==="men-shirts")
                    return <CategoryItem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} discount={item.discount}/> 
                })}
            </div>
        </div>
    )
}