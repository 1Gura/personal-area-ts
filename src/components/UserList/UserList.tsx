import React, {FC, useEffect} from 'react';
import {BaseInterface} from "../../interfaces/base-interface";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useDispatch} from "react-redux";
import {fetchUsers} from "../../store/action/user";
import List from "../List";
import UserItem from "./UserItem";
import {UserModel} from "../../models/UserModel";
import {useActions} from "../../hooks/useActions";

const UserList: FC<BaseInterface> = ({config}) => {
  const {users, loading, error} = useTypeSelector(state => state.user);
  const {fetchUsers} = useActions();
  useEffect(() => {
    fetchUsers(config)
  }, []);

  if (loading) {
    return <h1>Идет загрузка...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }
  return (
      <div>
        <h1>Список пользователей</h1>
        <List items={users} renderItem={(user: UserModel) =>
            <UserItem key={user.id} email={user.name} name={user.email} id={user.id}/>
        }/>
      </div>
  );
};

export default UserList;
