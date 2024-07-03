import React, { useState } from "react"
import './Content.css'
export default function Content(){
    const [currIdx,setCurrIdx]= useState(0);
    const contentBanners = [
        
        {url:"https://www.orchardtaunton.co.uk/app/uploads/2021/06/OSC-Summer-Generic-Website-Banner-01.jpg"},
        {url:"https://i.pinimg.com/originals/8f/8c/96/8f8c96d99932fce8c786b4130d624dca.jpg"},
        {url:"https://m.media-amazon.com/images/S/aplus-media/vc/85497716-3f9c-41f7-abf0-76003c76fa44.__CR0,0,970,300_PT0_SX970_V1___.jpg"},
        {url:"https://1.bp.blogspot.com/-tjmqXN7PvSA/YNBUBC4a_rI/AAAAAAAAE5U/HzjRrCB8rZwM-J2PVqh-84WrdO_33WvTwCNcBGAsYHQ/s1920/Laptop_banner.jpg"},
    ]
    const goToNext=()=>{
        const isLastSlide = currIdx===contentBanners.length-1;
        const newIdx = isLastSlide?0: currIdx+1;
        setCurrIdx(newIdx);
    }
    const goToPrevious=()=>{
        const isFirstSlide = currIdx===0;
        const newIdx = isFirstSlide?contentBanners.length-1: currIdx-1;
        setCurrIdx(newIdx);
    }
    let contentStyles = {
        height:"440px" ,
        paddingLeft: "20px",
        paddingRight: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundImage:`url(${contentBanners[currIdx].url})`,
        backgroundSize:"cover"
    }

    
    return(
        <div className="content" style={contentStyles}>
            <div><i class="fa-solid fa-chevron-left" onClick={goToPrevious}></i></div>
           <div><i class="fa-solid fa-chevron-right" onClick={goToNext}></i></div>
        </div>
       
        
    )
}