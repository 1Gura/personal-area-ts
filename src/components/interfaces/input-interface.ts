import {Log} from "./log";
import {Dispatch, SetStateAction} from "react";

export interface InputInterface {
  value: Log;
  setValue: Dispatch<SetStateAction<Log>>;
  name: string;
  type: string;
}
