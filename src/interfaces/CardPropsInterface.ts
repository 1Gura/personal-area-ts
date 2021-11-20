import {ReactChild, ReactNode} from "react";

export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary',
}
export interface CardPropsInterface {
  width?: string;
  height?: string;
  variant?: CardVariant,
  onClick: (state: number) => void,
}
