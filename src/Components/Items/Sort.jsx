import React, { useContext, useState } from "react";
import "./Sort.css"
import { ShopContext } from "../../ContextAPI/ShopContext";
import CategoryItem from "./CategoryItems";
export default function Sort({property}){
    const {shirts_data} = useContext(ShopContext)
    let filtered_array = shirts_data.filter((obj) => obj.category === property)
    const [sortedItems,setSortedItems] = useState(filtered_array);
    const handleSortChange = (event) => {
        const selectedValue = event.target.value;
        let sortedArray = [...filtered_array];
    
        if (selectedValue === "lowest") {
          sortedArray.sort((a, b) => a.new_price - b.new_price);
        } 
        else if (selectedValue === "highest") {
          sortedArray.sort((a, b) => b.new_price - a.new_price);
        }
    
        setSortedItems(sortedArray);
      };
    
    
    return (
    <>
        <div className="item-sort">
            <h4>Sort Items</h4>
            <form action="#">
                <label htmlFor="sort"></label>
                <select name="sort" id="sort" onChange={handleSortChange}>
                    <option value="none">None</option>
                    <option value="#" disabled></option>
                    <option value="lowest" >Price(Low-High)</option>
                    <option value="#" disabled></option>
                    <option value="highest" >Price(High-Low)</option>
                </select>
            </form>
        </div>
        <div className="sorted-items">
        {sortedItems.map((item, i) => (
          <CategoryItem
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
            discount={item.discount}
          />
        ))}
      </div>
      </>
    )
}