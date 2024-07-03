import React, { useContext } from "react"
import { ShopContext } from "../ContextAPI/ShopContext"
import { useParams } from "react-router-dom";
import ShowProduct from "./ShowProduct";
import ShowProductDetails from "./ShowProductDetails";
import RelatedProduct from "../Components/Items/Related Products";
export default function Product(){
    const{all_products} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_products.find((e)=>e.id===Number(productId));
    
    return(
        <div>
            <ShowProduct product={product} />
            <ShowProductDetails product={product} />
            <RelatedProduct/>
        </div>
    )
}