import {BaseInterface} from "./base-interface";
import {DeskModel} from "../models/desk-model";

export interface Desk extends BaseInterface{
  getDesks:()=>void
  desk:DeskModel
  deleteDesk: (id:number)=>void
}
