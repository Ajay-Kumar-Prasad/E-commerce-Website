import React, { useContext} from "react";
import '../Pages/CSS/ShowProductDetails.css';
import { ShopContext } from "../ContextAPI/ShopContext";
export default function ShowProductDetails(props){
    const {product} = props;
    const {addToCart}= useContext(ShopContext);
    return (
        <div className="show-myproduct">
            <div className="myproduct-image">
                <div className="sub-images">
                    <div><img src={product.image} alt="" /></div>
                    <div><img src={product.image_1} alt="" /></div>
                    <div><img src={product.image_2} alt="" /></div>
                </div>
                <div className="main-image-box">
                    <img src={product.image} alt=""  />
                    <div className="myproduct-cart">
                    <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
                    <button>Buy Now</button>
                </div>
                </div>
                
            </div>
            <div className="myproduct-details">
                <div className="like-share">
                <i className="fa-solid fa-arrow-up-from-bracket"></i>
                <i className="fa-regular fa-heart"></i>
                </div>
                <div className="myproduct-name">
                    <h2>{product.brand_name}</h2>
                    <h3>{product.full_name}</h3>
                </div>
                <div className="myproduct-rating">
                    <p>Ratings</p>
                    <i className="fa-solid fa-star"></i>
                    <p>{product.rating}</p>
                </div>
                <div className="myproduct-price">
                    <div className="myproduct-newprice">₹{product.new_price}</div>
                    <div className="myproduct-oldprice">₹{product.old_price}</div>
                    <div className="myproduct-discount">₹{product.discount}</div>
                </div>
                <div className="myproduct-description">
                    <h4>Description</h4>
                    <p>{product.description}</p>
                </div>
                <div className="myproduct-size">
                    <h4>Size</h4>
                    <div className="myproduct-size-button">
                    <button>S</button>
                    <button>M</button>
                    <button>L</button>
                    <button>XL</button>
                    <button>XXL</button>
                    </div>
                    
                </div>
               
            </div>
        </div>
    )
}