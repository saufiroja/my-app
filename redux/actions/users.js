import {
  LOGIN_USER,
  REGISTER_USER
} from "../constants/users";
import axios from "axios";

export const registerUser = (payload) => async (dispatch) => {
  // loading
  dispatch({
    type: REGISTER_USER,
    payload: false
  })

  // post data
  await axios.post(`https://impostorteam-app.herokuapp.com/api/register`, payload)
    .then((res) => {
      console.log("success: ", res);
      dispatch({
        type: REGISTER_USER,
        payload: res.data
      })
    })
    .catch((err) => {
      console.log('error: ', err);
    })
}

export const loginUser = (payload) => async (dispatch) => {
  // loading
  dispatch({
    type: LOGIN_USER,
    payload: false
  })

  // post data
  await axios.post(`https://impostorteam-app.herokuapp.com/api/login`, payload)
    .then((res) => {
      console.log("success: ", res);
      console.log("res login: ", res);
      const token = res.data.token;
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("username", res.data.data.data.username);
      const userToken = sessionStorage.getItem("token");
      if (userToken) {
        localStorage.setItem("data", JSON.stringify(res.data));
        // localStorage.setItem("userId", res.data.data.user.id);
        // setRedirect(true);
      } else {
        console.log("you haven't token");
      }
    })
    .catch((err) => {
      console.log('error: ', err);
    })
}