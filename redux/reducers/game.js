export const gameState = {
  userFinger: "",
  computerFinger: "",
  result: "",
  score: 0,
};

export const gameReducer = (state = gameState, action) => {
  switch (action.type) {
    case "RESET":
      return {
        ...state,
        userFinger: "",
        computerFinger: "",
        result: "",
      };
    case "SET_USER_FINGER":
      return {
        ...state,
        userFinger: action.payload,
      };
    case "SET_COMPUTER_FINGER":
      return {
        ...state,
        computerFinger: action.payload,
      };
    case "CALCULATE_RESULT":
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
    case "SET_SCORE_FROM_LOCALSTORAGE":
      const score = localStorage.getItem("score");
      if (!score) localStorage.setItem("score", 0);
      return {
        ...state,
        score,
      };

    case "INCREMENT_SCORE":
      const newScore = state.score + 1;
      localStorage.setItem("score", newScore);
      return {
        ...state,
        score: newScore,
      };
    case "DECREMENT_SCORE":
      const newScore2 = state.score > 0 ? state.score - 1 : 0;
      localStorage.setItem("score", newScore2);
      return {
        ...state,
        score: newScore2,
      };
    default:
      return state;
  }
};
