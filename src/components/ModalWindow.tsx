import React, {ChangeEvent, FC, InputHTMLAttributes, useEffect, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import axios from "axios";
import {desksUrl} from "../url-constants";
import {BaseInterface} from "./interfaces/base-interface";


const ModalWindow: FC<BaseInterface> = ({config}) => {
  const [desk, setDesk] = useState();
  const [valueName, setValueName] = useState();
  const params = useParams();
  const {id} = params;
  const getDesk = () => {
    axios.get(`${desksUrl}/${id}`, config).then(result => {
      setDesk(result.data);
      setValueName(result.data.name);
    }).catch(e => {
      console.error(e)
    });
  }
  useEffect(() => {
    getDesk();
  }, [desk]);

  return (
    <div className='container-modal'>
      <div className="modal-window">
      </div>
      <div className="modal-window__form">
        <div>
          <NavLink to={'/desks'}>Вернуться</NavLink>
        </div>
        <div>
          <form>
            <label>Имя:<input value={valueName} onChange={(event:any) => {
              setValueName(event.target.value)
            }} type="text"/></label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
