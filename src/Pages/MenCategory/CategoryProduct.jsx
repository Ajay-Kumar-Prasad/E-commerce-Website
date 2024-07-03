import React, { useContext } from "react"
import { ShopContext } from "../ContextAPI/ShopContext"
import { useParams } from "react-router-dom";
import ShowProduct from "./ShowProduct";
import ShowProductDetails from "./ShowProductDetails";
import RelatedProduct from "../Components/Items/Related Products";
export default function CategoryProduct(){
    const{shirts_data} = useContext(ShopContext);
    const {productId} = useParams();
    const product = shirts_data.find((e)=>e.id===Number(productId));
    return(
        <div>
            <ShowProduct product={product} />
            <ShowProductDetails product={product} />
            <RelatedProduct/>
        </div>
    )
}