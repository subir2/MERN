import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL,
    MY_ORDERS_REQUEST,
    MY_ORDERS_SUCCESS,
    MY_ORDERS_FAIL,
    ALL_ORDERS_REQUEST,
    ALL_ORDERS_SUCCESS,
    ALL_ORDERS_FAIL,
    UPDATE_ORDER_REQUEST,
    UPDATE_ORDER_SUCCESS,
    UPDATE_ORDER_FAIL,
    DELETE_ORDER_REQUEST,
    DELETE_ORDER_SUCCESS,
    DELETE_ORDER_FAIL,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,
    CLEAR_ERRORS,
  } from "../constants/orderConstants";
  import {
    
    TOKEN_USER_REQUEST,
    TOKEN_USER_SUCCESS,
    TOKEN_USER_FAIL,
    
  } from "../constants/userConstants";


  import store from './../store';
  import axios from "axios";
import { connect, useSelector } from "react-redux";

  //axios.defaults.baseURL = 'https://cryptic-eyrie-92448.herokuapp.com';
  // Create Order
 // const token = store.getState().token;
  const {token} = store.getState().token;
  // const state = store.getState()
  // let {token} = state?.token;
  // store.dispatch({ type: 'TOKEN_USER_SUCCESS' });


 //console.log(token);


// get current state
//console.log('what is currently in store', store.getState());
 
// store.subscribe(()=>  {token} = store.getState().token)
  export const createOrder = (order) => async (dispatch) => {
    
    try {
      dispatch({ type: CREATE_ORDER_REQUEST });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          'authorization':store.getState().token.token
        },
      };
      const { data } = await axios.post(`/api/v1/order/new`, order, config);
  
      dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: CREATE_ORDER_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
//  //My Orders
  export const myOrders = (token) => async (dispatch) => {
   // const {token} = useSelector((state) => state.token);
    const rootUrl = process.env.NODE_ENV === "production" ? "https://cryptic-eyrie-92448.herokuapp.com" : "https://cryptic-eyrie-92448.herokuapp.com"
    try {
      dispatch({ type: MY_ORDERS_REQUEST });
     
     
      //console.log(user.token);
  
      const { data } = await  axios.get(`${rootUrl}/api/v1/orders/me`,{
        headers: {
          'authorization':store.getState().token.token//token//`${token}`
        }
      });
     // console.log(token);
      //console.log('what is currently in store', store.getState().token.token);
  
      dispatch({ type: MY_ORDERS_SUCCESS, payload: data.orders });
   
    
    
    } catch (error) {
      dispatch({
        type: MY_ORDERS_FAIL,
        payload: error.response.data.message,
      });
    }
  };


  

//   export const myOrders = () => {
//     return (dispatch) => {
//         return axios.get(`/api/v1/orders/me`)
//             .then(response => {
//                 return response.data
//             })
//             .then(data => {
//                 dispatch({
//                     type: MY_ORDERS_SUCCESS,
//                     payload: data.orders
//                 })
//             })
//             .catch(error => {
//                 throw (error);
//             });
//     };
// };

  // export function myOrders() {
  //   return function(dispatch) {
  //     return axios.get("https://cryptic-eyrie-92448.herokuapp.com/api/v1/orders/me")
  //       .then(({ data }) => {
  //       dispatch({ type: MY_ORDERS_SUCCESS, payload: data.orders });
  //     });
  //   };
  // }

//   export const myOrders = () => async dispatch => {
    
//     try{
//         dispatch({ type: MY_ORDERS_REQUEST });
//         const res = await axios.get(`https://cryptic-eyrie-92448.herokuapp.com/api/v1/orders/me`);
//         console.log(res);
//         dispatch( {
//           type: MY_ORDERS_SUCCESS, payload: res.orders 
//         })
//     }
//     catch(e){
//         dispatch( {
//           type: MY_ORDERS_FAIL,
//           payload: e.response.res.message,
//         })
//     }

// }
  
  //Get All Orders (admin)
  export const getAllOrders = () => async (dispatch) => {
    try {
     // const { user} = useSelector((state) => state.user);
      const rootUrl = process.env.NODE_ENV === "production" ? "https://cryptic-eyrie-92448.herokuapp.com" : ""
      dispatch({ type: ALL_ORDERS_REQUEST });
  
      const { data } = await axios.get(`${rootUrl}/api/v1/admin/orders`,{
        headers: {
          'authorization':store.getState().token.token
        }

      });
  
      dispatch({ type: ALL_ORDERS_SUCCESS, payload: data.orders });
    } catch (error) {
      dispatch({
        type: ALL_ORDERS_FAIL,
        payload: error.response.data.message,
      });
    }
  };


  // export function getAllOrders() {
  //   return function(dispatch) {
  //     return axios.get("https://cryptic-eyrie-92448.herokuapp.com/api/v1/admin/orders")
  //       .then(({ data }) => {
  //       dispatch({ type: ALL_ORDERS_SUCCESS, payload: data.orders });
  //     });
  //   };
  // }
  
  // Update Order
  export const updateOrder = (id, order) => async (dispatch) => {
    try {
     // const { user} = useSelector((state) => state.user);
      const rootUrl = process.env.NODE_ENV === "production" ? "https://cryptic-eyrie-92448.herokuapp.com" : ""
      dispatch({ type: UPDATE_ORDER_REQUEST });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          'authorization':store.getState().token.token
        },
      };
      const { data } = await axios.put(
        `${rootUrl}/api/v1/admin/order/${id}`,
        order,
        config
      );
  
      dispatch({ type: UPDATE_ORDER_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: UPDATE_ORDER_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  // Delete Order
  export const deleteOrder = (id) => async (dispatch) => {
    try {
      //const { user} = useSelector((state) => state.user);
      const rootUrl = process.env.NODE_ENV === "production" ? "https://cryptic-eyrie-92448.herokuapp.com" : ""
      dispatch({ type: DELETE_ORDER_REQUEST });
  
      const { data } = await axios.delete(`${rootUrl}/api/v1/admin/order/${id}`,{
        
 headers: {
  'authorization':store.getState().token.token
}
      });
  
      dispatch({ type: DELETE_ORDER_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: DELETE_ORDER_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  // Get Order Details
  export const getOrderDetails = (id) => async (dispatch) => {
    try {
    //  const { user} = useSelector((state) => state.user);
      const rootUrl = process.env.NODE_ENV === "production" ? "https://cryptic-eyrie-92448.herokuapp.com" : ""
      dispatch({ type: ORDER_DETAILS_REQUEST });
  
      const { data } = await axios.get(`${rootUrl}/api/v1/order/${id}`,{
        headers: {
          'authorization':store.getState().token.token
        }

      });
  
      dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data.order });
    } catch (error) {
      dispatch({
        type: ORDER_DETAILS_FAIL,
        payload: error.response.data.message,
      });
    }
  };


// function mapStateToProps(state) {
//   return { token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWUzYTI4YzQyOWRkYmI4YmI4ZmYyOCIsImlhdCI6MTY1MjE3OTIwMSwiZXhwIjoxNjUyNjExMjAxfQ.yH--PKd63X8jw9QUoo9AzTEP-RoF8ze1Y0KYehqoMl8' //state.token
//            };
// } 
// export default connect(mapStateToProps)(myOrders);
  // Clearing Errors
  export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };