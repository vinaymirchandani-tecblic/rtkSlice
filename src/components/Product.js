import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProduct, STATUSES } from "../store/productSlice";

export const Product = () => {
  const disptach = useDispatch();
  // const [products, setProducts] = useState([]);
  const { data: products, status } = useSelector((state) => state.product);
  useEffect(() => {
    disptach(fetchProduct());

    // const fetchProduct = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   console.log(data);
    //   setProducts(data);
    // };
    // fetchProduct();
  }, []);

  const handleAdd = (product) => {
    disptach(add(product));
  };
  if (status === STATUSES.LOADING) {
    return <h2>Loading.....</h2>;
  }
  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong</h2>;
  }

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h4>{product.price} $</h4>
          <button className="btn" onClick={() => handleAdd(product)}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};
