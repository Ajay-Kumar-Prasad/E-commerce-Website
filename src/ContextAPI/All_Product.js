let all_products = [
    {
        id:1,
        name:"BLIVE Men Striped..",
        full_name:"Men Striped Round Neck Cotton Blend Multicolor T-Shirt",
        brand_name:"BLIVE",
        description:"The BLIVE Men's Round Neck T-shirt offers a blend of style, comfort, and versatility. Crafted from high-quality cotton fabric, this t-shirt ensures all-day comfort and breathability. Whether you're lounging at home or heading out for casual outings, this t-shirt is an ideal choice. Its simple yet stylish design makes it easy to pair with jeans, shorts, or casual trousers for various occasions.",
        category:"men",
        image:"https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/r/s/z/l-bmrgyrn-dp-z12-blive-original-imahyvz9dknwfvuf.jpeg?q=70",
        new_price:299,
        old_price:1999,
        discount:"85% off",
        rating:3.8
    },
    {
        id:2,
        name:"BEWAKOOF Men Full S..",
        full_name:"Oversized Men Graphic Print Round Neck Pure Cotton Brown T-Shirt",
        brand_name:"BEWAKOOF",
        description:"Strike a balance between being young, wild and free with this Beast Within 2.0 Men's Oversized Full Sleeve T-shirt. Pair this brown t-shirt with denim, a varsity jacket and sneakers for a dapper appeal",
        category:"men",
        image:"https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/l/4/n/s-581508-bewakoof-original-imah2e4q8gkhcet5.jpeg?q=70",
        image_1:"https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/o/r/1/s-581508-bewakoof-original-imah2e4q7wzpcasw.jpeg?q=70",
        image_2:"https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/k/r/3/s-581508-bewakoof-original-imah2e4qpfhr8y2b.jpeg?q=70&crop=false",
        new_price:494,
        old_price:1499,
        discount:"67% off",
        rating:3.8
    },
    {
        id:3,
        name:"Dennis Lingo Men Fit..",
        full_name:"Women Printed Viscose Rayon Straight Kurta(Blue)",
        brand_name:"Sanvi Fashion",
        category:"men",
        image:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/b/w/o/s-c301-white-dennis-lingo-original-imafw2ggrk5epcfu-bb.jpeg?q=70",
        new_price:499,
        old_price:1899,
        discount:"80% off",
        rating:4.5
    },
    {
        id:4,
        name:"UNITED DENIM Men Re..",
        full_name:"Women Printed Viscose Rayon Straight Kurta(Blue)",
        brand_name:"Sanvi Fashion",
        category:"men",
        image:"https://rukminim2.flixcart.com/image/612/612/xif0q/jean/h/0/a/34-united192-united-denim-original-imagyvu67vpm68dh.jpeg?q=70",
        new_price:449,
        old_price:2999,
        discount:"85% off",
        rating:3.9
    },
    {
        id:5,
        name:"WROGN Men Solid Denim",
        full_name:"Women Printed Viscose Rayon Straight Kurta(Blue)",
        brand_name:"Sanvi Fashion",
        category:"men",
        image:"https://rukminim2.flixcart.com/image/612/612/kvtuxe80/jacket/g/j/g/xxl-no-14296102-wrogn-original-imag8nyybzwqe7kv.jpeg?q=70",
        new_price:2394,
        old_price:3799,
        discount:"36% off",
        rating:4.1
    },
    {
        id:6,
        name:"Sanvi Fashion Women P..",
        full_name:"Women Printed Viscose Rayon Straight Kurta(Blue)",
        brand_name:"Sanvi Fashion",
        category:"women",
        image:"https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/z/o/e/s-trishul-01-sanvi-fashion-original-imahfu37gzxrsag4.jpeg?q=70",
        new_price:240,
        old_price:1399,
        discount:"82% off",
        rating:3.9
    },
    {
        id:7,
        name:"Selvia Women Printed..",
        full_name:"Women Printed Viscose Rayon Straight Kurta(Blue)",
        brand_name:"Sanvi Fashion",
        category:"women",
        image:"https://rukminim2.flixcart.com/image/612/612/xif0q/blazer/q/u/7/l-658tk11404-selvia-original-imahfs6grhfvakgt.jpeg?q=70",
        new_price:919,
        old_price:3063,
        discount:"69% off",
        rating:3.9
    },
    {
        id:8,
        name:"BLACK SCISSOR Women",
        full_name:"Women Printed Viscose Rayon Straight Kurta(Blue)",
        brand_name:"Sanvi Fashion",
        category:"women",
        image:"https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/d/i/e/m-bs-3114-black-scissor-original-imagxffqhphptzhy.jpeg?q=70",
        new_price:909,
        old_price:6363,
        discount:"85% off"
    },
    {
        id:9,
        name:"KASHIAN Women..",
        full_name:"Women Printed Viscose Rayon Straight Kurta(Blue)",
        brand_name:"Sanvi Fashion",
        category:"women",
        image:"https://rukminim2.flixcart.com/image/612/612/xif0q/jean/2/k/g/32-j-1320-blue-kashian-original-imagz9cwk22hhgxv.jpeg?q=70",
        new_price:455,
        old_price:1499,
        discount:"69% off"
    },
    {
        id:10,
        name:"Leotude Women Typogr..",
        full_name:"Women Printed Viscose Rayon Straight Kurta(Blue)",
        brand_name:"Sanvi Fashion",
        category:"women",
        image:"https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/d/w/e/3xl-grl-fs49-purpl-dragonn-leotude-original-imaghgpurfugegzb.jpeg?q=70",
        new_price:299,
        old_price:1099,
        discount:"72% off",
        rating:4.5
    },
    {
        id:11,
        name:"BLIVE Men Striped..",
        full_name:"Men Striped Round Neck Cotton Blend Multicolor T-Shirt",
        brand_name:"BLIVE",
        category:"men",
        image:"https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/r/s/z/l-bmrgyrn-dp-z12-blive-original-imahyvz9dknwfvuf.jpeg?q=70",
        new_price:299,
        old_price:1999,
        discount:"85% off"
    },
    {
        id:12,
        name:"BEWAKOOF Men Full S..",
        full_name:"Women Printed Viscose Rayon Straight Kurta(Blue)",
        brand_name:"Sanvi Fashion",
        category:"men",
        image:"https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/k/d/f/l-625420-bewakoof-original-imagwbg8paahpfup.jpeg?q=70",
        new_price:1049,
        old_price:2699,
        discount:"61% off"
    },
    {
        id:13,
        name:"Dennis Lingo Men Fit..",
        full_name:"Women Printed Viscose Rayon Straight Kurta(Blue)",
        brand_name:"Sanvi Fashion",
        category:"men",
        image:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/b/w/o/s-c301-white-dennis-lingo-original-imafw2ggrk5epcfu-bb.jpeg?q=70",
        new_price:499,
        old_price:1899,
        discount:"80% off"
    },
    {
        id:14,
        name:"UNITED DENIM Men Re..",
         full_name:"Women Printed Viscose Rayon Straight Kurta(Blue)",
        brand_name:"Sanvi Fashion",
        category:"men",
        image:"https://rukminim2.flixcart.com/image/612/612/xif0q/jean/h/0/a/34-united192-united-denim-original-imagyvu67vpm68dh.jpeg?q=70",
        new_price:449,
        old_price:2999,
        discount:"85% off"
    },
    {
        id:15,
        name:"WROGN Men Solid Denim",
        full_name:"Women Printed Viscose Rayon Straight Kurta(Blue)",
        brand_name:"Sanvi Fashion",
        category:"men",
        image:"https://rukminim2.flixcart.com/image/612/612/kvtuxe80/jacket/g/j/g/xxl-no-14296102-wrogn-original-imag8nyybzwqe7kv.jpeg?q=70",
        new_price:2394,
        old_price:3799,
        discount:"36% off"
    }
    

]
export default all_products;