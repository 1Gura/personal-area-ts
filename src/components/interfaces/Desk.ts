import {BaseInterface} from "./base-interface";

export interface Desk extends BaseInterface{
  getDesks:()=>void
  desk:any
  key: number,
  deleteDesk: (id:number)=>void
}
