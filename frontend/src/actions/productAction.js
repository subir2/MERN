import axios from "axios";

import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ADMIN_PRODUCT_REQUEST,
  ADMIN_PRODUCT_SUCCESS,
  ADMIN_PRODUCT_FAIL,
  NEW_PRODUCT_REQUEST,
  NEW_PRODUCT_SUCCESS,
  NEW_PRODUCT_FAIL,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  NEW_REVIEW_FAIL,
  ALL_REVIEW_REQUEST,
  ALL_REVIEW_SUCCESS,
  ALL_REVIEW_FAIL,
  DELETE_REVIEW_REQUEST,
  DELETE_REVIEW_SUCCESS,
  DELETE_REVIEW_FAIL,
  CLEAR_ERRORS,
} from "../constants/productConstants";
import store from './../store';
//axios.defaults.baseURL = 'https://cryptic-eyrie-92448.herokuapp.com';
const {token} = store.getState().token;
// Get All Products
export const getProduct =(keyword = "",currentPage = 1,price = [0, 25000],category,ratings = 0)=>

  async (dispatch) => {
    try {
      const rootUrl = process.env.NODE_ENV === "production" ? "https://cryptic-eyrie-92448.herokuapp.com" : ""
      dispatch({ type: ALL_PRODUCT_REQUEST });
      let link = `${rootUrl}/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;

      if (category==="ALL") {
        link = `${rootUrl}/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;
      }

      if (category && category!="ALL" ) {
        link = `${rootUrl}/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
      }

     // let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;

      

      const { data } = await axios.get(link);
      //console.log(data);

      dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };


  // Get Products Details
export const getProductDetails = (id) => async (dispatch) => {
  try {
    const rootUrl = process.env.NODE_ENV === "production" ? "https://cryptic-eyrie-92448.herokuapp.com" : ""
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`${rootUrl}/api/v1/product/${id}`);

    //console.log({ data } );
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};


// Get All Products For Admin
export const getAdminProduct = () => async (dispatch) => {
  try {
    const rootUrl = process.env.NODE_ENV === "production" ? "https://cryptic-eyrie-92448.herokuapp.com" : ""
    dispatch({ type: ADMIN_PRODUCT_REQUEST });

    const { data } = await axios.get(`${rootUrl}/api/v1/admin/products`, {      headers: {
      'authorization':store.getState().token.token
    }
    });

    dispatch({
      type: ADMIN_PRODUCT_SUCCESS,
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};


// Update Product
export const updateProduct = (id, productData) => async (dispatch) => {
  try {
    const rootUrl = process.env.NODE_ENV === "production" ? "https://cryptic-eyrie-92448.herokuapp.com" : ""
    dispatch({ type: UPDATE_PRODUCT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json", 'authorization':store.getState().token.token},
      
    };

    const { data } = await axios.put(
      `${rootUrl}/api/v1/admin/product/${id}`,
      productData,
      config,
     
      
    );

    dispatch({
      type: UPDATE_PRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Product
export const deleteProduct = (id) => async (dispatch) => {
  try {
    const rootUrl = process.env.NODE_ENV === "production" ? "https://cryptic-eyrie-92448.herokuapp.com" : ""
    dispatch({ type: DELETE_PRODUCT_REQUEST });

    const { data } = await axios.delete(`${rootUrl}/api/v1/admin/product/${id}`,{
      headers: {
        'authorization':store.getState().token.token
      }

    });

    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};



// NEW REVIEW
export const newReview = (reviewData) => async (dispatch) => {
  try {
    const rootUrl = process.env.NODE_ENV === "production" ? "https://cryptic-eyrie-92448.herokuapp.com" : ""
    dispatch({ type: NEW_REVIEW_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json",
      'authorization':store.getState().token.token },
    };

    const { data } = await axios.put(`${rootUrl}/api/v1/review`, reviewData, config);

    dispatch({
      type: NEW_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Reviews of a Product
export const getAllReviews = (id) => async (dispatch) => {
  try {
    const rootUrl = process.env.NODE_ENV === "production" ? "https://cryptic-eyrie-92448.herokuapp.com" : ""
    dispatch({ type: ALL_REVIEW_REQUEST });

    const { data } = await axios.get(`${rootUrl}/api/v1/reviews?id=${id}`,{
      headers: {
        'authorization':store.getState().token.token
      }
    });

    dispatch({
      type: ALL_REVIEW_SUCCESS,
      payload: data.reviews,
    });
  } catch (error) {
    dispatch({
      type: ALL_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Review of a Product
export const deleteReviews = (reviewId, productId) => async (dispatch) => {
  try {
    const rootUrl = process.env.NODE_ENV === "production" ? "https://cryptic-eyrie-92448.herokuapp.com" : ""
    dispatch({ type: DELETE_REVIEW_REQUEST });

    const { data } = await axios.delete(
      `${rootUrl}/api/v1/reviews?id=${reviewId}&productId=${productId}`,{
        headers: {
          'authorization':store.getState().token.token
        }
      }
    );

    dispatch({
      type: DELETE_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};


// Create Product
export const createProduct = (productData) => async (dispatch) => {
  try {
    const rootUrl = process.env.NODE_ENV === "production" ? "https://cryptic-eyrie-92448.herokuapp.com" : "https://cryptic-eyrie-92448.herokuapp.com"
    dispatch({ type: NEW_PRODUCT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json",
      'authorization':store.getState().token.token },
    };

    const { data } = await axios.post(
      `${rootUrl}/api/v1/admin/product/new`,
      productData,
      config
    );

    dispatch({
      type: NEW_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};


// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};