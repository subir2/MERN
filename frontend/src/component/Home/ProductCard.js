import React from "react";
import { Link } from "react-router-dom";
//import { Rating } from "@material-ui/lab";
import ReactStars from "react-rating-stars-component";

const ProductCard = ({product}) => {
  const options = {
    // value: product.ratings,
    // readOnly: true,
    // precision: 0.5,
    edit:false,
    color:"rgba(20,20,20,0.1)",
    activeColor:"tomato",
    value:product.ratings,
    isHalf:true,
  };
  //console.log(product?.images[0]?.url);
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
    <img src={product?.images[0]?.url} alt={product.name} />
    <p>{product.name}</p>
    <div>
      <ReactStars {...options} />{" "}
      <span className="productCardSpan">
        {" "}
        ({product.numOfReviews} Reviews)
      </span>
    </div>
    <span>{`BDT ${product.price}`}</span>
  </Link>
  );
};

export default ProductCard;