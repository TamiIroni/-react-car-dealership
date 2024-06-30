import  { Avatar, Stack } from "@mui/material";
import "./ProductList.css";
import { useDispatch } from "react-redux";
import { addToCart } from "./features/productSlice/productSlice";

const imgCss = {
   width: "30px",
   height: "20px",
};

const ProductItem = ({ one, toggleCartVisibility} ) => {
   const dispatch = useDispatch();

   const handleAddToCart = () => {
      dispatch(addToCart(one));
      toggleCartVisibility(true);
      setTimeout(() => {
        toggleCartVisibility(false);
      }, 10000);
   };

   return (
      <div className="oneProduct">
         <Stack spacing={1}>
            <Stack spacing={7} direction="row" textAlign={"center"} >
               <h2>{one.prodName}</h2>
               <h2>{one.prodYear}</h2>
      
            </Stack>
            <img className="pic" src={one.picture} />
            <h2>{one.price}</h2>
            <button className="icon-hart" onClick={handleAddToCart}> <Avatar className="ruond"> ❤️ </Avatar></button>
         </Stack>
      </div>
   );
};

export default ProductItem;