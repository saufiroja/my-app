import axios from "axios";
import {
  CALCULATE_RESULT,
  DECREMENT_SCORE,
  INCREMENT_SCORE,
  RESET,
  SET_COMPUTER_FINGER,
  SET_SCORE_FROM_LOCALSTORAGE,
  SET_USER_FINGER
} from "../constants/game";

export const reset = () => {
  return {
    type: RESET,
  };
};

export const setUserFinger = (payload) => {
  return {
    type: SET_USER_FINGER,
    payload,
  };
};

export const setComputerFinger = (payload) => {
  return {
    type: SET_COMPUTER_FINGER,
    payload,
  };
};

export const calculateResult = () => {
  return {
    type: CALCULATE_RESULT,
  };
};

export const setScoreFromLocalStorage = (payload) => async (dispatch) => {
  const myProfile = JSON.parse(localStorage.getItem('data'))
  const data = myProfile.data.data
  const newData = {
    score: payload,
    id: data.id
  };
  await axios
    .put(`https://impostorteam-app.herokuapp.com/api/users/score/${newData.id}`, newData)
    .then((res) => {
      localStorage.setItem('data', JSON.stringify(res))
      dispatch({
        type: SET_SCORE_FROM_LOCALSTORAGE,
        payload: res.data.data.score
      })
    })
    .catch((err) => {
      console.log("error: ", err);
    });
};

export const incrementScore = () => {
  return {
    type: INCREMENT_SCORE,
  };
};

export const decrementScore = () => {
  return {
    type: DECREMENT_SCORE,
  };
};