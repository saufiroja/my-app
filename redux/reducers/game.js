import Cookies from "js-cookie";
import {
  CALCULATE_RESULT,
  CLEAR_STATE_GAME,
  DECREMENT_SCORE,
  INCREMENT_SCORE,
  PLAYED_GAME_1,
  PLAYED_GAME_2,
  PLAYED_GAME_3,
  PLAYED_GAME_4,
  PLAYED_GAME_5,
  PLAYED_GAME_6,
  RESET,
  SET_COMPUTER_FINGER,
  SET_SCORE_FROM_LOCALSTORAGE,
  SET_USER_FINGER
} from "../constants/game";

export const gameState = {
  userFinger: "",
  computerFinger: "",
  result: "",
  score: 0,
  played1: false,
  played2: false,
  played3: false,
  played4: false,
  played5: false,
  played6: false,
};

export const gameReducer = (state = gameState, action) => {
  switch (action.type) {
    case RESET:
      return {
        ...state,
        userFinger: "",
          computerFinger: "",
          result: "",
      };
      
    case SET_USER_FINGER:
      return {
        ...state,
        userFinger: action.payload,
      };

    case SET_COMPUTER_FINGER:
      return {
        ...state,
        computerFinger: action.payload,
      };

    case CALCULATE_RESULT:
      let result = "";
      switch (state.userFinger) {
        case state.computerFinger:
          result = "draw";
          break;
        case "rock":
          result = state.computerFinger === "paper" ? "lose" : "win";
          break;
        case "paper":
          result = state.computerFinger === "scissors" ? "lose" : "win";
          break;
        case "scissors":
          result = state.computerFinger === "rock" ? "lose" : "win";
          break;
      }
      return {
        ...state,
        result,
      };

    case SET_SCORE_FROM_LOCALSTORAGE:
      // const score = localStorage.getItem("score");
      // if (!score) localStorage.setItem("score", 0);
      const score = Cookies.get('score')
      if (!score) Cookies.set("score", 0);
      return {
        ...state,
        score: action.payload
      };

    case INCREMENT_SCORE:
      const newScore = state.score + 1;
      // localStorage.setItem("score", newScore);
      Cookies.set("score", newScore);
      return {
        ...state,
        score: newScore
      };

    case DECREMENT_SCORE:
      const newScore2 = state.score > 0 ? state.score - 1 : 0;
      // localStorage.setItem("score", newScore2);
      Cookies.set("score", newScore2);
      return {
        ...state,
        score: newScore2
      };

    case PLAYED_GAME_1:
      return{
        ...state,
        played1: action.payload
      }

    case PLAYED_GAME_2:
      return{
        ...state,
        played2: action.payload
      }

    case PLAYED_GAME_3:
    return{
      ...state,
      played3: action.payload
    }

    case PLAYED_GAME_4:
    return{
      ...state,
      played4: action.payload
    }

    case PLAYED_GAME_5:
    return{
      ...state,
      played5: action.payload
    }

    case PLAYED_GAME_6:
    return{
      ...state,
      played6: action.payload
    }

    case CLEAR_STATE_GAME:
      return{
        ...state,
        userFinger: action.payload.userFinger,
        computerFinger: action.payload.computerFinger,
        result: action.payload.result,
        score: action.payload.score,
        played1: action.payload.played1,
        played2: action.payload.played2,
        played3: action.payload.played3,
        played4: action.payload.played4,
        played5: action.payload.played5,
        played6: action.payload.played6,
      }

    default:
      return state;
  }
};