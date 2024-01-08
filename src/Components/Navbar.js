import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="logo">Redux Store </span>
      <div className=" " style={{ paddingLeft: "10px" }}>
        <Link
          className="navLink"
          to="/"
          style={{ paddingLeft: "10px", paddingRight: "30px" }}
        >
          Home
        </Link>
        <Link
          className="navLink"
          to="/cart"
          style={{ paddingLeft: "10px", paddingRight: "30px" }}
        >
          Cart
        </Link>
        <span className="cartCount" style={{ fontWeight: "700" }}>
          Cart Items : {items?.length}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
