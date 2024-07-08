import React from "react";
import './MenCategoryCSS/MenCategory.css'
import Sort from "../../Components/Items/Sort";
export default function Shoes(){
    return (
        <div className="men-shirts">
            <img className="men-shirts-banner" src="https://th.bing.com/th/id/R.e70226b7efdbf3258e83fd98150263cb?rik=PkXL3K%2f48fh8fw&riu=http%3a%2f%2fs7d4.scene7.com%2fis%2fimage%2fboombah%2ffootwear-mens-banner-2%3f%24fullsize%24&ehk=56wCulEgRtWoXOqW7lHar78OOl7J0B3XJZUlr3aGkkk%3d&risl=&pid=ImgRaw&r=0" alt="" />
            <div className="men-shirts-items">
            <Sort property="men-shoes" />
            </div>
        </div>
    )
}