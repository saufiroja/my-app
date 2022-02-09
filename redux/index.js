import { createStore, combineReducers, applyMiddleware } from "redux";
import { usersReducer } from "./reducers/users";
import { gameReducer } from "./reducers/game";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  users: usersReducer,
  game: gameReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
