import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_FAIL,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL,
    ALL_USERS_REQUEST,
    ALL_USERS_SUCCESS,
    ALL_USERS_FAIL,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    TOKEN_USER_REQUEST,
   TOKEN_USER_SUCCESS,
    TOKEN_USER_FAIL,
    CLEAR_ERRORS,
  } from "../constants/userConstants";
  import axios from "axios";
  import store from './../store';
  //axios.defaults.baseURL = 'https://cryptic-eyrie-92448.herokuapp.com';
  
  // Login
  export const login = (email, password) => async (dispatch) => {
    try {
      const rootUrl = process.env.NODE_ENV === "production" ? "https://cryptic-eyrie-92448.herokuapp.com" : ""
      dispatch({ type: LOGIN_REQUEST });
     
  
      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.post(
        `${rootUrl}/api/v1/login`,
        { email, password },
        config
      );
  
      dispatch({ type: LOGIN_SUCCESS, payload: data.user});
      dispatch({ type: TOKEN_USER_SUCCESS, payload: data.token});
    

    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
      
    }
  };
  

  //  // token
  //  export const token = (email, password) => async (dispatch) => {
  //   try {
  //     const rootUrl = process.env.NODE_ENV === "production" ? "https://cryptic-eyrie-92448.herokuapp.com" : ""
  //     dispatch({ type: TOKEN_USER_REQUEST });
     
  
  //     const config = { headers: { "Content-Type": "application/json" } };
  
  //     const { data } = await axios.post(
  //       `${rootUrl}/api/v1/login`,
  //       { email, password },
  //       config
  //     );
  
  //     dispatch({ type: TOKEN_USER_SUCCESS, payload: data.token});
    

  //   } catch (error) {
  //     dispatch({ type: TOKEN_USER_FAIL, payload: error.response.data.message });
      
  //   }
  // };
  

  // Register
export const register = (userData) => async (dispatch) => {
    try {
      const rootUrl = process.env.NODE_ENV === "production" ? "https://cryptic-eyrie-92448.herokuapp.com" : ""
      dispatch({ type: REGISTER_USER_REQUEST });
      dispatch({ type: LOGIN_REQUEST });
  
      const config = { headers: { "Content-Type": "multipart/form-data" } };
  
      const { data } = await axios.post(`${rootUrl}/api/v1/register`, userData, config);
  
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
      dispatch({ type: TOKEN_USER_SUCCESS, payload: data.token});
    } catch (error) {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error.response.data.message,
      });
     
    }
  };
  
  // Load User
  export const loadUser = () => async (dispatch) => {
    try {
      const rootUrl = process.env.NODE_ENV === "production" ? "https://cryptic-eyrie-92448.herokuapp.com" : ""
      dispatch({ type: LOAD_USER_REQUEST });
  
      const { data } = await axios.get(`${rootUrl}/api/v1/me`);
  
      dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
    }
  };
  
  // Logout User
  export const logout = () => async (dispatch) => {
    try {
      const rootUrl = process.env.NODE_ENV === "production" ? "https://cryptic-eyrie-92448.herokuapp.com" : ""
      await axios.get(`${rootUrl}/api/v1/logout`);
  
      dispatch({ type: LOGOUT_SUCCESS });
    } catch (error) {
      dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
    }
  };

  // Update Profile
export const updateProfile = (userData) => async (dispatch) => {
  try {
    const rootUrl = process.env.NODE_ENV === "production" ? "https://cryptic-eyrie-92448.herokuapp.com" : ""
    dispatch({ type: UPDATE_PROFILE_REQUEST });

    const config = { headers: { "Content-Type": "multipart/form-data", 'authorization':store.getState().token.token } };

    const { data } = await axios.put(`${rootUrl}/api/v1/me/update`, userData, config,);

    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Password
export const updatePassword = (passwords) => async (dispatch) => {
  try {
    const rootUrl = process.env.NODE_ENV === "production" ? "https://cryptic-eyrie-92448.herokuapp.com" : ""
    dispatch({ type: UPDATE_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json"} };

    const { data } = await axios.put(
      `${rootUrl}/api/v1/password/update`,
      passwords,
      config,
    );

    dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Forgot Password
export const forgotPassword = (email) => async (dispatch) => {
  try {
    const rootUrl = process.env.NODE_ENV === "production" ? "https://cryptic-eyrie-92448.herokuapp.com" : ""
    dispatch({ type: FORGOT_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(`${rootUrl}/api/v1/password/forget`, email, config);

    dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Reset Password
export const resetPassword = (token, passwords) => async (dispatch) => {
  try {
    const rootUrl = process.env.NODE_ENV === "production" ? "https://cryptic-eyrie-92448.herokuapp.com" : ""
    dispatch({ type: RESET_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json"} };

    const { data } = await axios.put(
      `${rootUrl}/api/v1/password/reset/${token}`,
      passwords,
      config
    );

    dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

// get All Users
export const getAllUsers = () => async (dispatch) => {
  try {
    const rootUrl = process.env.NODE_ENV === "production" ? "https://cryptic-eyrie-92448.herokuapp.com" : ""
    dispatch({ type: ALL_USERS_REQUEST });
    const { data } = await axios.get(`${rootUrl}/api/v1/admin/users`,{
      headers: {
        'authorization':store.getState().token.token//token//`${token}`
      }
    });

    dispatch({ type: ALL_USERS_SUCCESS, payload: data.users });
  } catch (error) {
    dispatch({ type: ALL_USERS_FAIL, payload: error.response.data.message });
  }
};



// get  User Details
export const getUserDetails = (id) => async (dispatch) => {
  try {
    const rootUrl = process.env.NODE_ENV === "production" ? "https://cryptic-eyrie-92448.herokuapp.com" : ""
    dispatch({ type: USER_DETAILS_REQUEST });
    const { data } = await axios.get(`${rootUrl}/api/v1/admin/user/${id}`,{
      headers: {
        'authorization':store.getState().token.token//token//`${token}`
      }
    });

    dispatch({ type: USER_DETAILS_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: USER_DETAILS_FAIL, payload: error.response.data.message });
  }
};

// Update User
export const updateUser = (id, userData) => async (dispatch) => {
  try {
    const rootUrl = process.env.NODE_ENV === "production" ? "https://cryptic-eyrie-92448.herokuapp.com" : ""
    dispatch({ type: UPDATE_USER_REQUEST });

    const config = { headers: { "Content-Type": "application/json", 'authorization':store.getState().token.token } };

    const { data } = await axios.put(
      `${rootUrl}/api/v1/admin/user/${id}`,
      userData,
      config,
  
    );

    dispatch({ type: UPDATE_USER_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete User
export const deleteUser = (id) => async (dispatch) => {
  try {
    const rootUrl = process.env.NODE_ENV === "production" ? "https://cryptic-eyrie-92448.herokuapp.com" : ""
    dispatch({ type: DELETE_USER_REQUEST });

    const { data } = await axios.delete(`${rootUrl}/api/v1/admin/user/${id}`,{
      headers: {
        'authorization':store.getState().token.token//token//`${token}`
      }
    });

    dispatch({ type: DELETE_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DELETE_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};


  // Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };