import React from "react";
import './RelatedProduct.css';
import CategoryItem from "./CategoryItems";
import related_data from "../../ContextAPI/Related_data";
export default function RelatedProduct(props){
    return(
        <div className="related-product">
           <h2>Related Products</h2> 
           <div className="related-product-items">
            {related_data.map((item,i)=>{
                return <CategoryItem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} discount={item.discount}/>
})}
           </div>
        </div>
    )
}