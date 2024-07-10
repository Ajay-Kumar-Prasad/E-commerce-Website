import React from "react";
import "./MiNotebook.css"
import all_products from "../../ContextAPI/All_Product";
import TechProductDetails from "../../Pages/TechProducts";
export default function MiNotebook(){
    let product = all_products.find((prod)=> prod.id===69);
    return (
        <>
        <div className="product-content">
            <p>Mi NoteBook 14</p>
            <a style={{fontSize:"30px",paddingLeft:"105px"}}>From ₹ 43,999</a>
            <p style={{fontSize:"20px",paddingTop:"30px"}}>10th Generation Intel® Core™ i5 <br />
               NVIDIA® GeForce® MX250 <br />
               512GB SATA SSD <br /> 8GB DDR4 RAM <br />
               Full HD Anti-glare Display 35.56cm (14) <br />1.5kg Light & Sleek</p>
        </div>
        <div className="product-features">
            <div style={{display:"flex",backgroundImage:`url("https://i01.appmifile.com/webfile/globalimg/products/pc/mi-notebook-14/section05.jpg")`,backgroundSize:"contain"}}>
            <div className="product-detail1">
                <p style={{fontSize:"40px",marginBottom:"220px",paddingLeft:"90px",paddingTop:"30px"}}>Turn Heads</p>
                <h4>1.5kg Light & Sleek</h4>
                <hr />
                <p style={{fontSize:"25px"}}>All-Metallic | 17.9mm  | Anodized </p>
                <p>Body | Thin | Sandblasted Coating</p>
            </div>
            <div style={{paddingTop:"110px"}}>
            <img src="https://i01.appmifile.com/webfile/globalimg/7/A45E48ED-31C2-E503-2D9C-BD28118AB3B4.png" alt="" />
            <br />
            <img src="https://i01.appmifile.com/webfile/globalimg/7/B0216B72-8E74-AE4D-DD99-37C7206D4F4D.png" alt="" />
            </div>
            </div>
            <div style={{backgroundImage:`url("https://i01.appmifile.com/webfile/globalimg/7/4E265947-1623-05D4-D588-A507BD2E11AD.jpg")`}}>
            <p style={{fontSize:"70px",margin:"20px",lineHeight:"70px",fontWeight:"500",paddingLeft:"40px"}}>Display of <br /> Exuberance</p>
            <hr />
            <div className="product-detail2">
            <ul>
                <li><a style={{fontSize:"22px"}}>178 Degrees</a><br /><a style={{fontSize:"13px"}}>Wide-Viewing Angle</a></li>
                <li><a style={{fontSize:"22px"}}>5.75 mm</a><br /><a style={{fontSize:"13px"}}>Thin bezels</a></li>
                <li><a style={{fontSize:"22px"}}>16:9</a><br /><a style={{fontSize:"13px"}}>Aspect Ratio</a></li>
                <li><a style={{fontSize:"22px"}}>FHD Anti-glare Display</a><br /><a style={{fontSize:"13px"}}>35.56cm(14)</a></li>
            </ul>
            <div style={{border:"0.5px solid white",padding:"30px"}}><p>This sleek and light device sports a 35.56cm FHD anti-glare display. Adding to that, the narrow bezels play a prominent role in giving you an immersive viewing experience, making your work and play grander and more pleasing to the eye</p></div>
            </div>
            </div>
            <div style={{backgroundImage:`url("https://th.bing.com/th/id/OIP.gXM-UIBcYGz3IS_kSo_vyQHaEP?rs=1&pid=ImgDetMain")`,backgroundSize:"contain",height:"360px"}}>
            <p style={{fontSize:"40px",margin:"0px",paddingLeft:"60px"}}>Go Faster, 4.2GHz at a Time</p>
            <p style={{fontSize:"20px",margin:"0px",paddingLeft:"150px"}}>10th Generation Intel Core i5</p>
            <p style={{paddingTop:"160px",padding:"30px"}}>Equipped with the latest Intel® Core™ i5-10210U Comet Lake processor and designed to accredit your creativity and skills, this device has your back for on-the-go multitasking, creating new content, working on your spreadsheets and watching webinars.</p>
            </div>
            <div style={{backgroundImage:`url("https://img.freepik.com/premium-photo/big-data-technology-background-generative-ai_100209-4300.jpg")`,backgroundSize:"contain",height:"360px"}}></div>
        </div>
        <div>
            <TechProductDetails product={product}/>
        </div>
        </>
    )
}