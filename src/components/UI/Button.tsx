import React, {FC, FormEvent} from 'react';
import {ButtonInterface} from "../../interfaces/button-interface";


const Button: FC<ButtonInterface> = ({onClick, name}) => {
  return (
      <div>
        <button
            onClick={(e:FormEvent) => {
              onClick(e)
            }}
        >{name}</button>
      </div>
  );
};

export default Button;
