import React from "react";
import '../Pages/CSS/Categories.css';
import CategoryItem from "../Components/Items/CategoryItems";
import all_products from "../ContextAPI/All_Product";
import { Link } from "react-router-dom";
export default function WomenCategories(props){
    const dressesURL = "https://i.pinimg.com/736x/1a/e1/43/1ae14341b8d9573ecef88c454edca694.jpg"
    const topsURL = "https://i.pinimg.com/originals/16/96/d4/1696d40c051b038d4f56c8b91348a8fc.jpg"
    const kurtiURL = "https://urbanstree.com/cdn/shop/files/April23-351.jpg?v=1689345436"
    const jeans_URL = "https://d2j6dbq0eux0bg.cloudfront.net/images/21493407/3488072551.jpg"
    const heelsURL = "https://th.bing.com/th/id/OIP.JYcFWJJrRmiINXNCvy5bZQAAAA?w=385&h=385&rs=1&pid=ImgDetMain"
    const sareesURL = "https://i.pinimg.com/originals/e3/35/a9/e335a9861dc71a9c17f38e4817f0b496.jpg"
    const trousersURL = "https://th.bing.com/th/id/OIP.41aGWazIF_CdxOpV_DYLQAHaHa?pid=ImgDet&w=173&h=173&c=7&dpr=1.1"
    const sneakersURL = "https://ae01.alicdn.com/kf/HTB1_ECxaXkoBKNjSZFEq6zrEVXaB/Women-Running-Shoes-Krasovki-Womens-Sneakers-2018-Sneakers-Women-Zapatillas-Deportivas-Mujer-Running-Shoes-Pink-Size.jpg"
    const HandBagsURL = "https://th.bing.com/th/id/OIP.73ClGYHGReevkne1_hVF7AAAAA?rs=1&pid=ImgDetMain"
    const watches_URL = "https://img.joomcdn.net/8f3f0c280ce325d8756d88d2d5792e0a95dce3c7_original.jpeg"
    return(
        <div className="shop-category">
            <img src={props.banner} />
            <div className="men-shopcategory">
                <div className="men-categories">
                    <Link to="/women/watches"><img src={watches_URL} alt="" /></Link>
                    <p>Watches</p>
                </div>
                <div className="men-categories">
                    <Link to="/women/dresses"><img src={dressesURL}alt="" /></Link>
                    <p>Dresses</p>
                </div>
                <div className="men-categories">
                    <Link to="/women/tops"><img src={topsURL} alt="" /></Link>
                    <p>Tops & Tees</p>
                </div>
                <div className="men-categories">
                    <Link to="/women/kurtis"><img src={kurtiURL} alt="" /></Link>
                    <p>Kurtis</p>
                </div>
                <div className="men-categories">
                    <Link to="/women/jeans"><img src={jeans_URL} alt="" /></Link>
                    <p>Jeans</p>
                </div>
                <div className="men-categories">
                   <Link to="/women/flat&heels"><img src={heelsURL} alt="" /></Link>
                    <p>Flats & Heels</p>
                </div>
                <div className="men-categories">
                    <Link to="/women/sarees"><img src={sareesURL} alt="" /></Link>
                    <p>Sarees</p>
                </div>
                <div className="men-categories">
                    <Link to="/women/sneakers"><img src={sneakersURL} alt="" /></Link>
                    <p>Sneakers</p>
                </div>
                <div className="men-categories">
                    <Link to="/women/handbags"><img src={HandBagsURL} alt="" /></Link>
                    <p>HandBags</p>
                </div>
                <div className="men-categories">
                    <Link to="/women/trousers"><img src={trousersURL} alt="" /></Link>
                    <p>Trousers</p>
                </div>

            </div>
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