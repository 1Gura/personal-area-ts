import React, {FC, useEffect, useState} from 'react';
import Item from "./Item";
import axios, {AxiosResponse} from "axios";
import {desksUrl} from "../../url-constants";
import ModalWindow from "../ModalWindow";
import {useParams} from "react-router-dom";
import {BaseInterface} from "../../interfaces/base-interface";
import {DeskModel} from "../../models/desk-model";
import List from "../List";


const Desks: FC<BaseInterface> = ({config}) => {
  const params = useParams();
  let [desks, setDesks] = useState<DeskModel[]>([]);
  const [modalDesk, setModalDesk] = useState({});
  let [name, setName] = useState('');
  const [showModal, setShowModal] = useState(false);

  const getDesks = async (): Promise<void> => {
    axios.get(desksUrl, config).then((res: AxiosResponse<DeskModel[]>) => {
      setDesks(res.data);
    }).catch(e => {
      if (e && e.response && e.response.status) {
        console.error(e.response.status);
      } else {
        console.error('Ошибка получения списка досок');
      }
    })
  }

  const deleteDesk = (id: number) => {
    const deleteUrl = desksUrl + `/${id}`
    axios.delete(deleteUrl, config).then(result => {
      getDesks()
    }).catch(e => {
      console.error(e)
    });
  }

  const addDesk = async (event: any) => {
    event.preventDefault();
    axios.post(desksUrl, {name}, config).then((res: AxiosResponse<any>) => {
      const newDesks: any = [...desks];
      newDesks.push(res.data);
      setDesks(newDesks);
    })
  }

  useEffect(() => {
    // getDesks();
    if (params.id) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [params]);
  return (
      <div className='desks-container'>
        <div className="desks-container__desks">
          <h1>DESKS</h1>
          <button onClick={getDesks}>Получить...</button>
          <ul>
            {
              desks ? <List items={desks}
                            renderItem={(desk: DeskModel) =>
                                (<Item config={config}
                                       key={desk.id}
                                       getDesks={getDesks}
                                       desk={desk}
                                       deleteDesk={deleteDesk}/>)}/> : ''}


          </ul>
        </div>
        <div className="desks-container__form">
          <form onSubmit={(event) => {
            addDesk(event)
          }}>
            <label>Имя <input type="text" value={name} onChange={event => {
              setName(event.target.value)
            }}/></label>
            <button onClick={addDesk}>Добавитиь</button>
          </form>
        </div>
        {
          showModal ? <ModalWindow config={config}/> : ''
        }
      </div>
  );
}

export default Desks;
