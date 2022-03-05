import {
  CLEAR_STATE,
  ERROR_AUTH,
  FORGOT_PASSWORD,
  HIDDEN_MODAL,
  LOGIN_USER,
  REGISTER_USER,
  SHOW_MODAL,
  UPDATE_PROFILE
} from "../constants/users";
import axios from "axios";
import Cookies from "js-cookie";

export const registerUser = (payload) => async (dispatch) => {
  // loading
  dispatch({
    type: REGISTER_USER,
    payload: {
      loading: true,
      data: false,
      error: false,
      // redirect: false
    }
  })

  // post data
  await axios.post(`http://localhost:7000/api/register`, payload)
    .then((res) => {
      console.log("success: ", res);
      dispatch({
        type: REGISTER_USER,
        payload: {
          loading: false,
          data: res.data.data,
          error: false,
          // redirect: true
        }
      })
    })
    .catch((err) => {
      console.log("error: ", err.response.data);
      dispatch({
        type: REGISTER_USER,
        payload: {
          loading: false,
          data: false,
          error: err.response.data,
          // redirect: false
        }
      })
    })
}

export const loginUser = (payload) => async (dispatch) => {
  // loading
  dispatch({
    type: LOGIN_USER,
    payload: {
      loading: true,
      data: false,
      error: false,
      redirect: false
    }
  })

  // post data
  await axios.post(`http://localhost:7000/api/login`, payload)
    .then((res) => {
      console.log("res login: ", res);
      const token = res.data.accessToken;
      console.log('token:', token);
      Cookies.set('token', token)
      const userToken = Cookies.get("token");
      if (userToken) {
        Cookies.set("data", JSON.stringify(res.data));
      }
      dispatch({
        type: LOGIN_USER,
        payload: {
          loading: false,
          data: res.data.user,
          error: false,
          redirect: true
        }
      })
    })
    .catch((err) => {
      console.log('error: ', err.response.data.message);
      dispatch({
        type: LOGIN_USER,
        payload: {
          loading: false,
          data: false,
          error: err.response.data.message,
          redirect: false
        }
      })
    })
}

export const updateProfile = (payload) => (dispatch) => {
  // loading
  dispatch({
    type: UPDATE_PROFILE,
    payload: {
      loading: true,
      data: false,
      error: false,
      redirect: false
    }
  })

  axios
    .put(`http://localhost:7000/api/users/${payload.id}`, payload)
    .then((res) => {
      console.log('res update biodata:', res);
      Cookies.set('data', JSON.stringify(res.data))
      dispatch({
        type: UPDATE_PROFILE,
        payload: {
          loading: false,
          data: res.data.user,
          error: false,
          redirect: false
        }
      })
    })
    .catch((err) => {
      console.log("error: ", err);
      dispatch({
        type: UPDATE_PROFILE,
        payload: {
          loading: false,
          data: false,
          error: err.response,
          redirect: false
        }
      })
    });
}

export const forgotPassword = (payload) => (dispatch) => {
  // loading
  dispatch({
    type: FORGOT_PASSWORD,
    payload: {
      loading: true,
      data: false,
      error: false,
      redirect: false
    }
  })

  axios
    .put(`http://localhost:7000/api/forgot-password`, { email: payload })
    .then((res) => {
      console.log('res forgot-password:', res);
      dispatch({
        type: FORGOT_PASSWORD,
        payload: {
          loading: false,
          data: res.status,
          error: false,
          redirect: false
        }
      })
    })
    .catch((err) => {
      console.log("error: ", err);
      dispatch({
        type: FORGOT_PASSWORD,
        payload: {
          loading: false,
          data: false,
          error: err,
          redirect: false
        }
      })
    });
}

export const showModal = () => {
  return {
    type: SHOW_MODAL,
    payload: true
  }
}

export const hiddenModal = () => {
  return {
    type: HIDDEN_MODAL,
    payload: false
  }
}

export const clearState = () => {
  return {
    type: CLEAR_STATE,
    payload: {
      user: null,
      redirect: false
    }
  }
}