import {Log} from "./log";
import {Dispatch, SetStateAction} from "react";

export interface InputInterface {
  value: Log;
  setValue: (log:Log)=>Dispatch<SetStateAction<Log>>;
  name: string;
  type: string;
}
