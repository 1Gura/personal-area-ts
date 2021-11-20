import {BaseInterface} from "./base-interface";
import {Desk} from "./Desk";

export interface DeskList extends BaseInterface {
  desks: Desk[];
}
