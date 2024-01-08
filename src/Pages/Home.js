import React from "react";
import Products from "../Components/Products";

const Home = () => {
  return (
    <div>
      Welcome to Redux toolkit
      <section>
        <h3>Products</h3>
        <Products />
      </section>
    </div>
  );
};

export default Home;
