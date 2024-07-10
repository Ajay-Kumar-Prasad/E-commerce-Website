import React, { useContext } from "react";
import { useState } from "react";
import "./NavBar.css"
import { Link } from "react-router-dom"
import { ShopContext } from "../../ContextAPI/ShopContext";
export default function NavBar(){
    let [menu,setMenu] = useState("")
    let [signTrue,setSignTrue] = useState(false);
    let [search,setSearch] = useState("")
    const {getTotalCartItem,shirts_data} = useContext(ShopContext);
    const handleSearchBar = (event) => {
        setSearch(event.target.value)
    }
    const onSearch = (searchItem) => {
        setSearch(searchItem);
        console.log('search', searchItem);
    }
    return (
        <div className="Nav-container">
        <div className="NavBar">
                <div className="NavLogo">
                    {/* <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/shopping-website-logo-design-template-3aee0a935db461ae9bc9389271418d9e_screen.jpg?ts=1689501622" alt="" /> */}
                </div>
                <div className="searchMenu">
                <input className="searchBox" type="text" placeholder="Search For Products" value={search} onChange={handleSearchBar}/>
                <div className="searchWidth"></div>
                <div className="searchOptionsBox">
                    {shirts_data.filter(item=>{
                        const searchItem = search.toLowerCase()
                        const full_name = item.full_name.toLowerCase()
                        return searchItem && full_name.startsWith(searchItem) && full_name !== searchItem
                        
                    }).slice(0,8)
                    .map((item)=>(
                        <Link to={`/product/${item.id}`}><div className="searchOptions" onClick={()=> onSearch(item.full_name)} key={item.full_name}>{item.full_name}</div></Link>
                   ))}
                </div>
                </div>
               <button className="searchBtn" onClick={()=> onSearch(search)}><i className="fa-solid fa-magnifying-glass"></i></button>
                
               
                <div className="MenuBar">
                    <ul>
                        <li onClick={()=>{setMenu("Home")}}><Link style={{textDecoration:'none',color:"white"}} to='/'>Home</Link>{menu==="All"?<hr/>:<></>}</li>
                        <li onClick={()=>{setMenu("Men")}}> <Link style={{textDecoration:'none',color:"white"}} to='/men'>Men</Link> {menu==="Men"?<hr/>:<></>}</li>
                        <li onClick={()=>{setMenu("Women")}}> <Link style={{textDecoration:'none',color:"white"}} to='/women'>Women</Link>{menu==="Women"?<hr/>:<></>}</li>
                        <li onClick={()=>{setMenu("Kids")}}><Link style={{textDecoration:'none',color:"white"}} to='/kids'>Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
                        {/* <li onClick={()=>{setMenu("My Orders")}}><Link style={{textDecoration:'none'}} to=''>All</Link> {menu==="My Orders"?<hr/>:<></>}</li> */}
                        
                    </ul>
                    
                    <div className="Signup">
                        {signTrue===false?<Link to="/signin"><button className="signup">Sign in</button></Link>:<Link to="/profile"><button className="signup">Profile</button></Link>}
                    </div>
                    <div className="cart">
                        <Link to="/cart"><i className="fa-solid fa-cart-shopping" style={{color:"white"}}></i></Link>
                        <div className="cartNum">{getTotalCartItem()}</div>
                    </div>
                </div>
            </div>
        <div className="line"></div>
        <div className="menu">
            <ul>
                <Link to="/Best-Deals"><li>Today's Deals</li></Link>
                <Link to="/bestsellers"><li>BestSellers</li></Link>
                <Link to="/smartphones"><li>Mobiles</li></Link>
                <Link to="/fashion"><li>Fashion</li></Link>
                <Link to="/electronics"><li>Electronics</li></Link> 
            </ul>
        </div> 
        </div>
        

    )
}
