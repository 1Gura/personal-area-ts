import {BaseInterface} from "./base-interface";

export interface ButtonInterface extends BaseInterface {
  onClick: (e:any) => void;
  name: string
}
