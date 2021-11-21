import {BaseType} from "./baseType";
import {DeskModel} from "../models/desk-model";

export interface DeskState extends BaseType {
  desks: DeskModel[];
  page: Page
}

export interface Page {
  page: number,
  limit: number,
}

export enum DeskActionType {
  FETCH_DESKS = 'FETCH_DESKS',
  FETCH_DESKS_SUCCESS = 'FETCH_DESKS_SUCCESS',
  FETCH_DESKS_ERROR = 'FETCH_DESKS_ERROR',
  SET_DESK_PAGE = 'SET_DESK_PAGE'
}

interface FetchDeskAction {
  type: DeskActionType.FETCH_DESKS
}

interface FetchDesksSuccessAction {
  type: DeskActionType.FETCH_DESKS_SUCCESS,
  payload: DeskModel[]
}

interface FetchDeskErrorAction {
  type: DeskActionType.FETCH_DESKS_ERROR,
  payload: string
}

interface FetchDeskSetPageAction {
  type: DeskActionType.SET_DESK_PAGE
  payload: Page
}

export type DeskAction = FetchDeskAction | FetchDeskSetPageAction | FetchDesksSuccessAction | FetchDeskErrorAction;
