import {DeskAction, DeskActionType, DeskState} from "../../types/DeskAction";

const initialState: DeskState = {
  desks: [],
  loading: false,
  error: '',
  page: {page: 1, limit: 10}
}
export const deskReducer = (state: DeskState = initialState, action: DeskAction): DeskState => {
  switch (action.type) {
    case DeskActionType.FETCH_DESKS:
      return {...state, loading: true};
    case DeskActionType.FETCH_DESKS_SUCCESS:
      return {...state, loading: false, desks: action.payload};
    case DeskActionType.FETCH_DESKS_ERROR:
      return {...state, loading: false, error: 'Ошибка получения списка досок'};
    case DeskActionType.SET_DESK_PAGE:
      return {...state, loading: false, page:action.payload};
    default:
      return state;
  }
}
