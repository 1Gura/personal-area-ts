import React, {FC, useState} from 'react';
import {CardPropsInterface, CardVariant} from "../interfaces/CardPropsInterface";

const Cards: FC<CardPropsInterface> = ({width, height, variant, onClick}) => {
  const [state, setState] = useState(0);
  return (
      <div style={{width, height,
        border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
        background: variant === CardVariant.primary ? 'gray' : ''
      }}>
        <button onClick={() => {onClick(state)}}>TEST</button>
      </div>
  );
};

export default Cards;
