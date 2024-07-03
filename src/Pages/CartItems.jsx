import React, { useContext } from "react";
import './CSS/CartItems.css';
import { ShopContext } from "../ContextAPI/ShopContext";
export default function CartItems(){
    const {addToCart,getTotalCartOldPrice,getTotalCartPrice, all_products,cartItems,RemoveFromCart} = useContext(ShopContext);
    return(
    <div className="my-cart">
        <div className="my-cart-box">
        {all_products.map((e)=>{
        if(cartItems[e.id]>0)
            { 
            return <div key={e.id} className="my-cart-items">
                    <img src={e.image} className="cart-item-image"/>
                    <div className="cart-item-detail">
                        <p className="item-name">{e.full_name}</p>
                        <div className="Cart-item-price">
                            <p>Item's price:<a style={{color:"#ff415a"}}>₹{e.new_price} </a></p>
                            <p style={{textDecoration:"line-through"}}>₹{e.old_price}</p>
                            <p style={{color:"green"}}>{e.discount}</p>
                        </div>
                        Quantity:<button className="cart-item-number">{cartItems[e.id]}</button><button onClick={()=>{addToCart(e.id)}}><i class="fa-solid fa-plus"></i></button><button onClick={()=>{RemoveFromCart(e.id)}}><i class="fa-solid fa-minus"></i></button>
                        <p>Total price: <a>₹{e.new_price*cartItems[e.id]}</a> </p>
                    </div>
                    <div className="my-item-remove">
                        <i  class="fa-solid fa-xmark" onClick={()=>{RemoveFromCart(e.id)}}></i>
                    </div>
                </div>
        
        } return null;
        })}
        </div>
        <div className="cart-items-total">
            <div className="item-coupon">
                <h4>COUPON</h4>
                <div className="mycoupon">
                     <p><i class="fa-solid fa-tag"></i>
                     Apply coupons</p>
                     <div className="mycart-coupon">
                     <input type="text" placeholder="Enter coupon code" />
                     <button>APPLY</button>
                     </div>
                </div>
               <hr />
            </div>
            <div className="cart-item-price">
                <h2>Cart Details</h2>
                <p>Total Price:₹{getTotalCartOldPrice()}</p>
                <p>Discount on MRP: <a>-₹{getTotalCartOldPrice()-getTotalCartPrice()}</a></p>
                <p>Shipping fee: <a>Free</a></p>
                <hr />
                <h5>Total: ₹{getTotalCartPrice()}</h5>
                <button>PLACE ORDER</button>
            </div>
        </div>
    </div>
   )
}