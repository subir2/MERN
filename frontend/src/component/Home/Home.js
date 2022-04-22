import React, { Fragment, useEffect } from "react";

import "./Home.css";
import ProductCard from "./ProductCard.js";

import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";

// const products={
//     name:"Blue t-SHIRT",
//     images:[{url:"https://cdn.shopify.com/s/files/1/2526/8658/products/image_757205aa-07ff-4c80-8e71-e2e5cd5739bb.jpg?v=1574095588"}],
//     price:"BDT3000",
//     _id:"shawon",
// };




const Home = () => {

  const dispatch = useDispatch();
  const {  products } = useSelector((state) => state.products);

  useEffect(() => {
  
      dispatch(clearErrors());
 
    dispatch(getProduct());
  }, [dispatch]);

  return (
  
        <Fragment>
         

          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll 
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

<div className="container" id="container">
  {products &&
    products.map((product) => (
      <ProductCard product={product} />
    ))}
</div>
        </Fragment>
    
   
  );
};

export default Home;