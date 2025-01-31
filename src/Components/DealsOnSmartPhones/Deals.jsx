import React from "react";
import './Deals.css';
// import data_product from '../DealsOnSmartPhones/data';
import Item from "../Items/Item";
import { Link } from "react-router-dom";
export default function Deals({title,data}){
    return (
        <div className="deals">
            <h2>{title}</h2>
            <hr />
            <div className="Deal-items">
                {data.map((item,i)=>{
                    return <Link to={`${item.link}`}><Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}/></Link>
                })}
                
            </div>
            
        </div>
    )
}