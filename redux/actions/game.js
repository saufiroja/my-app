export const reset = () => {
  return {
    type: "RESET",
  };
};

export const setUserFinger = (payload) => {
  return {
    type: "SET_USER_FINGER",
    payload,
  };
};

export const setComputerFinger = (payload) => {
  return {
    type: "SET_COMPUTER_FINGER",
    payload,
  };
};

export const calculateResult = () => {
  return {
    type: "CALCULATE_RESULT",
  };
};

export const setScoreFromLocalStorage = () => {
  return {
    type: "SET_SCORE_FROM_LOCALSTORAGE",
  };
};

export const incrementScore = () => {
  return {
    type: "INCREMENT_SCORE",
  };
};

export const decrementScore = () => {
  return {
    type: "DECREMENT_SCORE",
  };
};
