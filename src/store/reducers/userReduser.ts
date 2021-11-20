import {TypeEnum} from "../../type-enum";
import {UserAction, UserState} from "../../interfaces/UserAction";

const initialState: UserState = {
  users: [],
  loading: false,
  error:null
}


export const userReducer = (state: UserState = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case TypeEnum.FETCH_USERS:
      return {loading: true, error: null, users: []}
    case TypeEnum.FETCH_USERS_SUCCESS:
      return {loading: false, error: null, users: action.payload}
    case TypeEnum.FETCH_USERS_ERROR:
      return {loading: false, error: action.payload, users: []}
    default:
      return state;
  }
}
