import React from "react";
import '../CSS/Categories.css';
import CategoryItem from "../../Components/Items/CategoryItems";
import all_products from "../../ContextAPI/All_Product";
import { Link } from "react-router-dom";
export default function MenCategories(props){

    const shirtURL = "https://i.pinimg.com/originals/72/c6/be/72c6be72e26904f53f1a042057f01c61.jpg"
    const tshirtURL = "https://ae01.alicdn.com/kf/HTB1nR3uGWmWBuNjy1Xaq6xCbXXaE/casual-men-s-t-shirt-new-short-sleeved-Summer-Retro-Style-Synthwave-Graphic-Logo-Design-printing.jpg"
    const shoesURL = "https://ae01.alicdn.com/kf/H25a36e5dfdb243bf93a08b34bd3f41376/Men-Business-Casual-Shoes-PU-Leather-Running-Shoes-Fashion-Lace-Up-Casual-Sneakers-Male-Outdoor-Walking.jpg"
    const jeansURL = "https://martinvalen.com/5975-large_default/men-s-light-blue-jeans-with-rips.jpg"
    const ethnicURL = "https://shaadiwish.com/blog/wp-content/uploads/2023/10/2.-Samoh-India-Has-Chic-Festive-Season-Menswear-1-300x300.jpeg"
    const blazerURL="https://ae01.alicdn.com/kf/HTB1PMdeSVXXXXXNaXXXq6xXFXXXl/2017-designer-men-Suit-Jackets-Autumn-Slim-blazer-masculino-casual-Blazer-men-high-quality-Business-dress.jpg"
    const watchesURL = "https://ae01.alicdn.com/kf/HTB1kRYBXiHrK1Rjy0Flq6AsaFXa6/Geneva-Mens-Watch-Date-Stainless-Steel-Leather-Analog-Alloy-Quartz-Wrist-Watch-Waterproof-Military-Sports-Watches.jpg"
    const earbudsURL = "https://th.bing.com/th/id/OIP.L1nPeDeIff3iIdcthFnKVwAAAA?rs=1&pid=ImgDetMain"
    const formalURL = "https://th.bing.com/th/id/OIP.6qWCs4ZxoFj3rCInW9uuoAAAAA?rs=1&pid=ImgDetMain"
    const trousersURL = "https://ae01.alicdn.com/kf/HTB1c5R1QpXXXXanapXXq6xXFXXXo/Plus-Size-28-36-Men-s-Casual-Pants-Slim-Fit-Gray-Straight-Pants-Men-Fashion-Red.jpg"
    
    return(
        <div className="shop-category">
            <img src={props.banner} />
            <div className="men-shopcategory">
                <div className="men-categories">
                    <Link to="/men/shirts"><img src={shirtURL} alt="" /></Link>
                    <p>Shirts</p>
                </div>
                <div className="men-categories">
                    
                    <Link to="/men/tshirts"><img src={tshirtURL} alt="" /></Link>
                    <p>Tshirts</p>
                </div>
                <div className="men-categories">
                    <Link to="/men/shoes"><img src={shoesURL} alt="" /></Link>
                    <p>Shoes</p>
                </div>
                <div className="men-categories">
                    <Link to="/men/jeans"><img src={jeansURL} alt="" /></Link>
                    <p>Jeans</p>
                </div>
                <div className="men-categories">
                    <Link to="/men/ethnics"><img src={ethnicURL} alt="" /></Link>
                    <p>Ethnic Set</p>
                </div>
                <div className="men-categories">
                    <Link to="/men/blazers&suits"><img src={blazerURL} alt="" /></Link>
                    <p>Blazers & Suits</p>
                </div>
                <div className="men-categories">
                    <Link to="/men/watches"><img src={watchesURL} alt="" /></Link>
                    <p>Watches</p>
                </div>
                <div className="men-categories">
                    <Link to="/men/earbuds"><img src={earbudsURL} alt="" /></Link>
                    <p>Earphones</p>
                </div>
                <div className="men-categories">
                    <Link to="/men/formals"><img src={formalURL} alt="" /></Link>
                    <p>Formals</p>
                </div>
                <div className="men-categories">
                    <Link to="/men/trousers"><img src={trousersURL} alt="" /></Link>
                    <p>Trousers</p>
                </div>
        
            </div>
            <hr />
            <div className="SortByProducts">
                <h3>Showing all 8 results</h3>
            </div>
            <div className="category-products">
                {all_products.map((item,i)=>{
                    if(props.category===item.category){
                        return <CategoryItem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} discount={item.discount}/>
                    }
                    else{
                        return null;
                    }
                })}
            </div>
            <div className="more-items">
                <button>Explore More</button>
            </div>
        </div>
    )
}