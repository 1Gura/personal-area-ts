import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {deskReducer} from "./deskReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  desk: deskReducer
});

export type RootState = ReturnType<typeof rootReducer>;
