import React, {useState} from "react";

function Product() {
const[cart, setCart] = useState([]);
const [total, setTotal] = useState(0);
  return (
    <div className="wrapper-class">
      <h1>Product page</h1>
      <div>Cart: {cart.length}</div>
      <div className="total">0</div>
      <div className="product">
        <button>Add</button>
        <button>Remove</button>
      </div>
    </div>
  );
}
export default Product;
