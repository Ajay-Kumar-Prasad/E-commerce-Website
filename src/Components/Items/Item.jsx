import React from "react"
import "./Item.css"
export default function Item(props){
    return(
        <div className="Items">
            <img src={props.image} alt="" />
            <div className="item-newPrice">
                <p>{props.name}</p>
                <h4>{props.new_price}</h4>
            </div>
        </div>
    )
}