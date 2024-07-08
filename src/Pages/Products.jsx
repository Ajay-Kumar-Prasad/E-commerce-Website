import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../ContextAPI/ShopContext";
import { useParams } from "react-router-dom";
import ShowProduct from "./ShowProduct";
import ShowProductDetails from "./ShowProductDetails";
import RelatedProduct from "../Components/Items/Related Products" // Adjust import path as needed
export default function Product() {
  const { all_products, shirts_data } = useContext(ShopContext);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Find the product with matching productId from all_products or shirts_data
    const foundProduct = findProductById(Number(productId));
    setProduct(foundProduct); // Set the found product in state
  }, [all_products, shirts_data, productId]);

  const findProductById = (id) => {
    // Check all_products first
    let foundProduct = all_products.find((prod) => prod.id === id);
  
    
    // If not found in all_products, check shirts_data
    if (!foundProduct) {
      foundProduct = shirts_data.find((prod) => prod.id === id);
    }
    
    return foundProduct;
  };

  if (!product) {
    return <div>Loading...</div>; // Return loading indicator while product is being fetched
  }

  return (
    <div>
      <ShowProduct product={product} />
      <ShowProductDetails product={product} />
      <RelatedProduct/>
    </div>
  );
}
