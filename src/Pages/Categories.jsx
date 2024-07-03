import React from "react";
import '../Pages/CSS/Categories.css';
import CategoryItem from "../Components/Items/CategoryItems";
import all_products from "../ContextAPI/All_Product";
export default function Categories(props){
    return(
        <div className="shop-category">
            <img src={props.banner} />
           
            <div className="SortByProducts">
                <h4>Showing all 8 results</h4>
            <div className="shopcategory-sort">
                Sort by <i class="fa-solid fa-caret-down"></i>
            </div>
            </div>
            <div className="category-products">
                {all_products.map((item,i)=>{
                    if(props.category===item.category){
                        return <CategoryItem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} discount={item.discount}/>
                    }
                    else{
                        return null;
                    }
                })}
            </div>
            <div className="more-items">
                <button>Explore More</button>
            </div>
        </div>
    )
}