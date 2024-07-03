import React from "react";
import './MenCategoryCSS/MenCategory.css'
import shirts_data from "./MenCategory";
import CategoryItem from "../../Components/Items/CategoryItems";
export default function Ethnics(){
    return (
        <div className="men-shirts">
            <img className="men-shirts-banner" src="https://www.cbazaar.com/blog/wp-content/uploads/2023/11/Blog_Banner_Nov02_04.jpg" alt="" />
            <div className="men-shirts-items">
            {shirts_data.map((item,i)=>{
                if(item.category==="men-ethnics")
                    return <CategoryItem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} discount={item.discount}/> 
                })}
            </div>
        </div>
    )
}