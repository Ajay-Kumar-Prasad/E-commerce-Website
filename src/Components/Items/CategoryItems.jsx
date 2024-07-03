import React from "react";
import "./CategoryItems.css";
import { Link } from "react-router-dom";
export default function CategoryItem(props){
    return(
        <div className="CategoryItems">
            <div className="item-photo">
                <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
            </div>
            <div className="item-new-price">
                <p>{props.name}</p>
                <h4><a>₹{props.new_price}</a> <a style={{color:"green"}}>{props.discount}</a></h4>
                <p style={{textDecoration:"line-through"}}>₹{props.old_price}</p>
            </div>
        </div>
    )
}