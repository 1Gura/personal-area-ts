import {BaseModel} from "./base-model";

export class DeskModel extends BaseModel{
  public name: string = '';
  public create_at: Date = new Date();
  public update_at: Date = new Date();
}
