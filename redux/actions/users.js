import { CHANGE_LOADING, REGISTER_USER } from "../constants/users";
import axios from "axios";

export const registerUser = (payload) => async (dispatch) => {
    dispatch({
        type: REGISTER_USER,
        data: false
    })

    await axios.post(`https://impostorteam-app.herokuapp.com/api/register`, payload)
    .then((res) => {
      console.log("success: ", res);
    })
    .catch((err) => {
      console.log('error: ', err);
    })
}