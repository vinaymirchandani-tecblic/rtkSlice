import React from "react";
import { Product } from "../components/Product";

export const Home = () => {
  return (
    <div>
      <h2>Welcome To RTK</h2>
      <section>
        <h3>Products</h3>

        <Product />
      </section>
    </div>
  );
};
