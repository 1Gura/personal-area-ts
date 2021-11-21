import axios, {AxiosRequestConfig} from "axios";
import {Dispatch} from "redux";
import {DeskAction, DeskActionType, Page} from "../../types/DeskAction";
import {desksUrl} from "../../url-constants";

export const fetchDesks = (config: AxiosRequestConfig<any> | undefined, page: Page) => {
  return async (dispatch: Dispatch<DeskAction>) => {
    try {
      dispatch({type: DeskActionType.FETCH_DESKS})
      const response = await axios.get(desksUrl, config)
      dispatch({type: DeskActionType.FETCH_DESKS_SUCCESS, payload: response.data})
    } catch (e) {
      dispatch({
        type: DeskActionType.FETCH_DESKS_ERROR,
        payload: 'Произошла ошибка получения списка досок'
      })
    }
  }
}
