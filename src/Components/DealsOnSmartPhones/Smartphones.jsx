import React from "react";
import Deals from "./Deals";
import data_product from "./DATA/data";
export default function SmartPhones(){
    return (
        <>
        <Deals data={data_product} title={"Deals on Smartphones"}/>
        </>
    )
}