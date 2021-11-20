import React, {FC} from 'react';
import {UserItemInterface} from "../../interfaces/user-item-interface";

const UserItem:FC<UserItemInterface> = ({name,email,id}) => {
  return (
      <div className='user-item'>
        <div>{id}</div>
        <div>{name}</div>
        <div>{email}</div>
      </div>
  );
};

export default UserItem;
