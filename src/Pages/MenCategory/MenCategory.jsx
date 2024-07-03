import React, { useContext } from "react"
import { ShopContext } from "../ContextAPI/ShopContext"
import { useParams } from "react-router-dom";
import ShowProduct from "./ShowProduct";
import ShowProductDetails from "./ShowProductDetails";
import RelatedProduct from "../Components/Items/Related Products";
export default function MenCategory(){
    const {productId} = useParams();
    const{shirts_data} = useContext(ShopContext);
    const product_ = shirts_data.find((i)=>i.id===Number(productId));
    
    return(
        <div>
            <ShowProduct product={product_} />
            <ShowProductDetails product={product_} />
            <RelatedProduct/>
        </div>
    )
}