import { useEffect, useState } from "react"
import ProductItem from "./ProductItem";
import { getAllCarsFromServer } from "./ProductApi";
import "./ProductList.css";
import { useDispatch } from "react-redux";
import addToCart from "./features/productSlice/productSlice.js";
import Cart from "./cart";
import { Pagination } from "@mui/material";





function ProductList() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (ProductItem) => {
        setCartItems([...cartItems, ProductItem]);
    };
    const [isCartVisible, setIsCartVisible] = useState(false);

    const toggleCartVisibility = (isVisible) => {
        setIsCartVisible(isVisible);
    };



    let [arr, setArr] = useState([]);

    useEffect(() => {
        getAllCarsFromServer().then(res => {
            console.log(res)
            if (Array.isArray(res.data)) {
                setArr(res.data);
            }
        }).catch(err => {
            console.log(err)
            alert("מצטערים לא הצלחנו להביא מהשרת את המוצר המבוקש")
        })
    }, [])

    return (

        <div >
            {/* <div >         
                   <Cart />
            </div> */}
            <h1>כל הרכבים</h1>
            <div>
                {isCartVisible && <Cart cartItems={cartItems} />}
                <ul>
                    <div className="product-list-container">
                        {arr.map(item => (
                            <ProductItem key={item._id} one={item} isCartVisible={isCartVisible} toggleCartVisibility={toggleCartVisibility} />
                        ))}
                    
                    <Pagination count = {3} variant = "outlined"/>
                    </div>
                </ul>
            </div>
        </div>

    );
};


export default ProductList;