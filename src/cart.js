import React, { useState } from 'react';
import {useSelector} from "react-redux";

function Cart() {
  const items = useSelector ((state) => state.products )
  console.log (items.products)
  return (
     <div style = {{position: "fixed", backgroundColor: "white" ,overflow: "auto", maxHeight: "50vh", width: "25vw",   border: "1px solid black", marginTop: "20px"}}
      >
      <h2>המוצרים שאהבת</h2>
      <ul>
      {items.products.map(item => (
     <li key={item._id}>{item.prodName}: {item.price}: <img style= {{width: "50%"}} src={item.picture}></img></li>

      ))}       
      </ul>
    </div>
  );
}

export default Cart;