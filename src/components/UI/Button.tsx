import React from 'react';

// @ts-ignore
const Button = ({onClick, name}) => {
  return (
    <div>
      <button
      onClick={(e) => {onClick(e)}}
      >{name}</button>
    </div>
  );
};

export default Button;
