import React from "react";
import Deals from "./Deals";
export default function BestDeals(){
    let data_deals = [
        {
            id:500,
            name:"Kids Fashion",
            image:"https://th.bing.com/th/id/OIP.Djvrpk8uaCM5Xi-PW3yiegHaJr?rs=1&pid=ImgDetMain",
            new_price:"Min.60%off",
            link:"/kids"
        },{
            id:501,
            name:"Super Offers On Kurtas &..",
            image:"https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/z/o/e/s-trishul-01-sanvi-fashion-original-imahfu37gzxrsag4.jpeg?q=70",
            new_price:"under ₹599",
            link:"/women/kurtis"
        },{
            id:502,
            name:"Calling Smartwatches",
            image:"https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/8/0/2/-original-imagrzjahvy88v6r.jpeg?q=70",
            new_price:"From ₹799",
            link:"/smartwatches"
        },{
            id:503,
            name:"Tops,Jeans,Dresses..",
            image:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/i/x/b/l-ttos000149-tokyo-talkies-original-imahyzjzug4p8z56.jpeg?q=70",
            new_price:"From ₹149",
            link:"/women"
        },
        {
            id:504,
            name:"Tshirts,Shirts and more..",
            image:"https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/k/c/p/xl-587155-bewakoof-original-imagyhadn7j4p99x.jpeg?q=70",
            new_price:"From ₹399",
            link:"/men"
        }]
    return (
        <>
        <Deals data={data_deals} title={"Best Deals For You"}/>
        </>
    )
}