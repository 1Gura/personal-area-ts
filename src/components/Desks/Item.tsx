import React, {FC, useState} from 'react';
import axios, {AxiosResponse} from "axios";
import {desksUrl} from "../../url-constants";
import {NavLink} from "react-router-dom";
import {Desk} from "../interfaces/Desk";

const Item: FC<Desk> = ({config, getDesks, desk, deleteDesk}) => {
  const {id, name} = desk;
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(name);
  const changeName = (): void => {
    setEdit(!edit);
  }

  const submit = (e: any) => {
    e.preventDefault();
    const path = `${desksUrl}/${id}`;
    axios.post(path, {_method: 'PATCH', name: value}, config).then(() => {
      setEdit(false);
      getDesks();
    }).catch(error => {
      console.error(error);
    })
  }
  return (
      <div>
        <li>
          <p>{id}</p>
          {
            edit
                ?
                <form onSubmit={e => {
                  submit(e)
                }}>
                  <input value={value} onChange={event => {
                    setValue(event.target.value)
                  }}/>
                  <input type="submit" value='Изменить'/>
                </form>
                :
                <p>{name}</p>
          }

          <button onClick={() => {
            deleteDesk(id)
          }}>Удалить
          </button>
          <button onClick={() => {
            changeName()
          }}>{edit ? 'Отмена' : 'Редактировать'}
          </button>
          <NavLink to={`/desks/${id}`}>Показать</NavLink>
        </li>
      </div>
  )
      ;
}

export default Item;
