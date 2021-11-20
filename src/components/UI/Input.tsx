import React, {FC} from 'react';
import {InputInterface} from "../interfaces/input-interface";


const Input: FC<InputInterface> = ({value, setValue, name, type}) => {
  return (
      <div>
        <input
            //@ts-ignore
            value={value[name]}
            onChange={(e) => {
              setValue({
                ...value, [name]: e.target.value
              })
            }}
            type={type}/>
      </div>
  );
};

export default Input;
