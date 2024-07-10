import './App.css';
import React from 'react';
import NavBar from './Components/NavBar/NavBar.jsx';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Pages/Home.jsx';
import Cart from "./Pages/CartItems.jsx"
import Categories from "./Pages/Categories"
import Product from "./Pages/Products.jsx"
import SignIn from "./Pages/SignIn"
import MenCategories from './Pages/MenCategory/MenCategories.jsx';
import WomenCategories from './Pages/WomenCategories.jsx';
import Shirts from './Pages/MenCategory/Shirts.jsx';
import Tshirts from './Pages/MenCategory/Tshirts.jsx';
import Shoes from './Pages/MenCategory/Shoes.jsx';
import Jeans from './Pages/MenCategory/Jeans.jsx';
import Ethnics from './Pages/MenCategory/Ethnics.jsx';
import Watches from './Pages/MenCategory/Watches.jsx';
import Trousers from './Pages/MenCategory/Trousers.jsx';
import Formals from './Pages/MenCategory/Formals.jsx';
import Earbuds from './Pages/MenCategory/Earbuds.jsx';
import Blazers from './Pages/MenCategory/Blazers.jsx';
import MiNotebook from './Components/Banners/MiNotebook.jsx';
import Headphones from './Components/Banners/BoatHeadphones.jsx';
function App() {
  let men_banner = "https://shopify-ecommerce-university.s3.amazonaws.com/production/images/success_story/banner_image/699/mens_fashion_shopify_success_stories_Banner.jpg"
  let women_banner = "https://globus.greenhonchos.in/media/mageplaza/bannerslider/banner/image/1/_/1.jpg"
  let kids_banner = "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Fashion/KA/AUG_ART/Cat-header_kids-clothing-3._CB439714309_.jpg"
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <div className='Nav-hidden'></div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/men' element={<MenCategories banner={men_banner} category="men"/>}/>
          <Route path='/women' element={<WomenCategories banner={women_banner} category="women"/>}/>
          <Route path='/kids' element={<Categories banner={kids_banner} category="kids"/>}/>
          <Route path='/product' element={<Product/>}>
          <Route path=":productId" element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          {/* MenCategories */}
          <Route path='/Mi-Notebook' element={<MiNotebook/>}></Route>
          <Route path='/boat-headphones' element={<Headphones/>}></Route>
          <Route path='/men/shirts' element={<Shirts/>}/>
          <Route path='/men/tshirts' element={<Tshirts/>}/>
          <Route path='/men/shoes' element={<Shoes/>}/>
          <Route path='/men/jeans' element={<Jeans/>}/>
          <Route path='/men/ethnics' element={<Ethnics/>}/>
          <Route path='/men/blazers&suits' element={<Blazers/>}/>
          <Route path='/men/earbuds' element={<Earbuds/>}/>
          <Route path='/men/formals' element={<Formals/>}/>
          <Route path='/men/trousers' element={<Trousers/>}/>
          <Route path='/men/watches' element={<Watches/>}/>
          
          {/* WomenCategories */}
          {/* <Route path='/men/shirts' element={<Shirts/>}/>
          <Route path='/men/tshirts' element={<Tshirts/>}/>
          <Route path='/men/shoes' element={<Shoes/>}/>
          <Route path='/men/jeans' element={<Jeans/>}/>
          <Route path='/men/ethnics' element={<Ethnics/>}/>
          <Route path='/men/blazers&suits' element={<Blazers/>}/>
          <Route path='/men/earbuds' element={<Earbuds/>}/>
          <Route path='/men/formals' element={<Formals/>}/>
          <Route path='/men/trousers' element={<Trousers/>}/>
          <Route path='/men/watches' element={<Watches/>}/> */}

        </Routes>
      </BrowserRouter>
      

      
      
    </div>
  );
}

export default App;

