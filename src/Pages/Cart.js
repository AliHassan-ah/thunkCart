import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {products?.map((product, index) => (
          <div className="" key={index}>
            <div className="cartCard">
              <img src={product?.image} alt="img" />
              <h5>{product?.title}</h5>
              <h5>{product?.price}</h5>
              <h5>{product?.id}</h5>
              <button onClick={() => handleRemove(product.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
