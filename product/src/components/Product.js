import React, { useState, useReducer } from "react";

const products = [
  { name: "Candy bars", price: 1.50 },
  { name: "Gummy bears", price: 3.99 },
  { name: "Juice", price: 2.00 },
];


const cartReducer = (state, item)=>{
return [...state, item];
}

const totalReducer = (state, price) =>{
return state + price;
}

function Product() {
  const [cart, setCart] = useReducer(cartReducer, []);
  const [total, setTotal] = useReducer(totalReducer, 0);

  const addToCart = (item) => {
    setCart(item.name);
    setTotal(item.price);
  };

  return (
    <div className="wrapper-class">
      <h1>Product page</h1>
      <div>Cart: {cart.length}</div>
      <div className="items">{cart}</div>
      <div className="total">Total: {total.toFixed(2)}</div>
      {products.map((item)=>(
          <div key={item.name} >
        <div className="product">
            {item.name}
        </div>
        <button onClick={()=>addToCart(item)}>Add</button>
        <button
          onClick={() => {
            setTotal(0);
            setCart([]);
          }}
        >
          Remove
        </button>
      </div>
      ))}
      
    </div>
  );
}
export default Product;
