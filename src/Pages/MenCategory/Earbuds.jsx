import React from "react";
import './MenCategoryCSS/MenCategory.css'
import Sort from "../../Components/Items/Sort";
export default function Earbuds(){
    return (
        <div className="men-shirts">
            <img className="men-shirts-banner" src="https://th.bing.com/th/id/R.90341f2ba8e49a1a2f8918ee9105e39f?rik=NyZaKQ%2b7kTeR%2bQ&riu=http%3a%2f%2fwww.llink-shangruo.com%2fimages%2fBanner_6_7.jpg&ehk=AZVXlMEnZDBnCDhse%2f8jF%2fEMqtkJXlEBiDgqFylDFq8%3d&risl=&pid=ImgRaw&r=0" alt="" />
            <div className="men-shirts-items">
            <Sort property="men-earbuds" />
            </div>
        </div>
    )
}