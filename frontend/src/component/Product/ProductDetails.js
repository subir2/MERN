import React, { Fragment, useEffect } from 'react';
import "./ProductDetails.css";
import ReviewCard from "./ReviewCard.js";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProductDetails } from '../../actions/productAction';
import { useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";


const ProductDetails = (props) => {
  const dispatch = useDispatch();
 // const alert = useAlert();
 const { id } = useParams();
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  
  
  const options = {
    size: "large",
    value: 3,//product.ratings,
    readOnly: true,
    precision: 0.5,
  };
   
    
    //console.log(id);

    useEffect(() => {
      if (error) {
        alert.error(error);
        dispatch(clearErrors());
      }
        dispatch(getProductDetails(id));
      }, [dispatch,id,error, alert]);

    return (
      <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
         
          <div className="ProductDetails">
            <div>
              
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              
            </div>

            <div>
              <div className="detailsBlock-1">
                <h2>{product.name}</h2>
                <p>Product # {product._id}</p>
              </div>
              <div className="detailsBlock-2">
                <ReactStars {...options} />
                <span className="detailsBlock-2-span">
                  {" "}
                  ({product.numOfReviews} Reviews)
                </span>
              </div>
              <div className="detailsBlock-3">
                <h1>{`₹${product.price}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button >-</button>
                    <input readOnly type="number"    value="1"  />
                    <button >+</button>
                  </div>
                  <button
                    disabled={product.Stock < 1 ? true : false}
                    
                  >
                    Add to Cart
                  </button>
                </div>

                <p>
                  Status:
                  <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                    {product.Stock < 1 ? "OutOfStock" : "InStock"}
                  </b>
                </p>
              </div>

              <div className="detailsBlock-4">
                Description : <p>{product.description}</p>
              </div>

              <button  className="submitReview">
                Submit Review
              </button>
            </div>
          </div>

          <h3 className="reviewsHeading">REVIEWS</h3>

          <Dialog
            aria-labelledby="simple-dialog-title"
            
            
          >
            <DialogTitle>Submit Review</DialogTitle>
            <DialogContent className="submitDialog">
              

              <textarea
                className="submitDialogTextArea"
                cols="30"
                rows="5"
               
               
              ></textarea>
            </DialogContent>
            <DialogActions>
              <Button  color="secondary">
                Cancel
              </Button>
              <Button  color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>

          {product.reviews && product.reviews[0] ? (
            <div className="reviews">
              {product.reviews &&
                product.reviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}
        </Fragment>
      )}
    </Fragment>

    );
};

export default ProductDetails;