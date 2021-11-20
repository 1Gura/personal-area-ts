import {TypeEnum} from "../../type-enum";
import {Dispatch} from "redux";
import {UserAction} from "../../interfaces/UserAction";
import axios, {AxiosRequestConfig} from "axios";

export const fetchUsers = (config: AxiosRequestConfig<any> | undefined) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({type: TypeEnum.FETCH_USERS})
      const response = await axios.get('http://localhost:8000/api/auth/users', config)
      dispatch({type: TypeEnum.FETCH_USERS_SUCCESS, payload: response.data})
    } catch (e) {
      dispatch({
        type: TypeEnum.FETCH_USERS_ERROR,
        payload: 'Произошла ошибка получения пользователей'
      })
    }
  }
}
