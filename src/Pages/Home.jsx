import React from "react";
import Content from "../Components/Contents/Content";
import Banner from "../Components/Banners/Banner";
import SmartPhones from "../Components/DealsOnSmartPhones/Smartphones";
import Fashion from "../Components/DealsOnSmartPhones/Fashions";
import BestDeals from "../Components/DealsOnSmartPhones/BestDeals";
export default function Home(){
    return(
        <div>
            <Content/>
            <SmartPhones/>
            <Banner/>
            <Fashion/>
            <BestDeals/>
        </div>
    )
}