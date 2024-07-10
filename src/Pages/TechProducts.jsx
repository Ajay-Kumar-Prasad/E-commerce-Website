import React from "react";
import '../Pages/CSS/ShowProductDetails.css'
import { useState,useContext } from "react";
import { ShopContext } from "../ContextAPI/ShopContext";
export default function TechProductDetails(props){
    const {product} = props;
    const {addToCart}= useContext(ShopContext);
    let [like,setLike]=useState(false)
    let toggleLike = () => {
        setLike(!like);
    }

    let likeStyle = {color:"red"}
    return (
        <div className="show-myproduct">
        <div className="myproduct-image" style={{width:"620px"}}>
            <div className="sub-images" style={{paddingLeft:"0px",paddingRight:"60px"}}>
                <div><img  style={{width:"180px"}} src={product.image} alt="" /></div>
                <div><img style={{width:"180px"}} src={product.image_1} alt="" /></div>
                <div><img style={{width:"180px"}} src={product.image_2} alt="" /></div>
            </div>
            <div className="main-image-box">
                <img  style={{width:"400px"}} src={product.image} alt=""  />
                <div className="myproduct-cart" style={{justifyContent:"space-around"}}>
                <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
                <button>Buy Now</button>
            </div>
            </div>
            
        </div>
        <div className="myproduct-details" style={{width:"600px"}}>
            <div className="like-share">
            <a><i className="fa-solid fa-arrow-up-from-bracket"></i></a>
        <a onClick={toggleLike} >
            {like? (<i class="fa-solid fa-heart" style={likeStyle}></i>)
            :( <i className="fa-regular fa-heart"></i>)}
        </a>
            </div>
            <div className="myproduct-name" style={{height:"100px"}} >
                <h2>{product.brand_name}</h2>
                <h3 style={{height:"60px",lineHeight:"25px"}}>{product.full_name}</h3>
            </div>
            <div className="myproduct-price">
                <div className="myproduct-newprice">₹{product.new_price}</div>
                <div className="myproduct-oldprice">₹{product.old_price}</div>
                <div className="myproduct-discount">₹{product.discount}</div>
            </div>
            <div className="myproduct-description" style={{height:"240px"}}>
                <h4>Description</h4>
                <ul>
                    <li>10th Generation Intel Core i5</li>
                    <li>NVIDIA GeForce MX250</li>
                    <li>512GB SATA SSD</li>
                    <li>8GB DDR4 RAM</li>
                    <li>Full HD Anti-glare Display 35.56cm (14)</li>
                    <li>1.5kg Light & Sleek</li>
                    <li>All-Metallic Body</li>
                    <li>Anodized Sandblasted Coating</li>
                    <li>8GB DDR4 RAM</li>
                </ul>
            </div>
            <div className="myproduct-size" style={{display:"flex"}}>
                <div>
                <p style={{fontSize:"20px",fontWeight:"bold"}}>Memory</p>
                <div className="myproduct-size-button">
                <button style={{height:"60px",width:"120px"}}>8GB RAM+256GB SSD</button>
                <button style={{height:"60px",width:"120px"}}>8GB RAM+512GB SSD</button>
                </div>
                </div>
                <div>
                <p style={{fontSize:"20px",fontWeight:"bold"}}>Processor And Graphics</p>
                <div className="myproduct-size-button">
                <button style={{height:"60px",width:"120px"}}>i5 10th Gen + Nvidia MX250</button>
                <button style={{height:"60px",width:"120px"}}>i5 10th Gen UHD Graphics</button>
                </div></div>
                
                
            </div>
           
        </div>
    </div>
       
    )
}