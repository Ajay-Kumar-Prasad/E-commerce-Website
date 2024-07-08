import React from "react";
import './MenCategoryCSS/MenCategory.css'
import Sort from "../../Components/Items/Sort";
export default function TShirts(){
    return (
        <div className="men-shirts">
            <img className="men-shirts-banner" src="https://th.bing.com/th/id/R.6111cf010cfbf5630c2fd0abb09a4d82?rik=uacjQCWdEbmQ7w&riu=http%3a%2f%2fwww.fashionnova.com%2fcdn%2fshop%2fcollections%2f09.21.21_Novamen_CollectionBanner_2048x550_Graphics_1200x1200.jpg%3fv%3d1632271300&ehk=FkblnISJzempmgWR7%2b2RautnsDhPZjOcoMFGakoCR98%3d&risl=&pid=ImgRaw&r=0" alt="" />
            <div className="men-shirts-items">
            <Sort property="men-tshirts" />
            </div>
        </div>
    )
}