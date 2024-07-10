import React from "react";
import './Banner.css'
import { Link } from "react-router-dom";
export default function Banner(){
    return (
        <div className="Banners">
            <Link to="/product/75"><div className="FashionBanners"></div></Link>
            <div className="ElectronicsBanners"></div>
            <div className="KitchenBanners"></div>
        </div>
    )
}