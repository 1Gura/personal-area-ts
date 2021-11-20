import {combineReducers} from "redux";
import {userReducer} from "./userReduser";

export const rootReducer = combineReducers({
  user: userReducer
});

export type RootState = ReturnType<typeof rootReducer>;
