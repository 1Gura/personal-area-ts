import React, {FC} from 'react';
import {ButtonInterface} from "../interfaces/button-interface";


const Button: FC<ButtonInterface> = ({onClick, name}) => {
  return (
      <div>
        <button
            onClick={(e:any) => {
              onClick(e)
            }}
        >{name}</button>
      </div>
  );
};

export default Button;
