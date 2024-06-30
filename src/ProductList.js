import { useEffect, useState } from "react"
import ProductItem from "./ProductItem";
import { getAllCarsFromServer } from "./ProductApi";
import "./ProductList.css";
import { useDispatch } from "react-redux";
import addToCart from "./features/productSlice/productSlice.js";
import Cart from "./cart";
import Pagination from "@mui/material/Pagination";
import { parsePath } from "react-router-dom";




function ProductList() {
    const [cartItems, setCartItems] = useState([]);
    const [perPage] = [6];
    const [page, setPage] = useState (1);
    const [no0Page] = useState (Math.ceil (ProductItem.length / perPage));

    const handleChange = ( value) => {setPage (value)};

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
            <h1>כל הרכבים</h1>
            <div>
                {isCartVisible && <Cart cartItems={cartItems} />}
                <ul>
                
                    <div className="product-list-container">
                        {arr.slice((page -1) * perPage, page * perPage).map(item => (
                            <ProductItem key={item._id} one={item} isCartVisible={isCartVisible} toggleCartVisibility={toggleCartVisibility} />
                        ))}
                    <Pagination count = {no0Page}  page = {page} onChange={handleChange} defaultPage={1} color="primary" size="large" showFirstButton showLastButton/>
                    </div>
                </ul>
            </div>
        </div>

    );
};


export default ProductList;