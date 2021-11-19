import React, {FC, useEffect, useState} from 'react';
import Item from "./Item";
import axios, {AxiosResponse} from "axios";
import {desksUrl} from "../../url-constants";
import ModalWindow from "../ModalWindow";
import {useParams} from "react-router-dom";
import {BaseInterface} from "../interfaces/base-interface";


const Desks: FC<BaseInterface> = ({config}) => {
  const params = useParams();
  useEffect(() => {
    if (params.id) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [params]);
  let [desks, setDesks] = useState([]);
  const [modalDesk, setModalDesk] = useState({});
  let [name, setName] = useState('');
  const [showModal, setShowModal] = useState(false);

  const getDesks = async () => {
    axios.get(desksUrl, config).then(res => {
      setDesks(res.data);
    }).catch(e => {
      console.log(e.response.status);
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

  const showModalWindow = (deskId: number): void => {
    const desk: any = desks.find((item: any) => item.id === deskId);
    setModalDesk(desk);
    setShowModal(true);
  }

  const addDesk = async (event: any) => {
    event.preventDefault();
    axios.post(desksUrl, {name}, config).then((res: AxiosResponse<any>) => {
      const newDesks: any = [...desks];
      newDesks.push(res.data);
      setDesks(newDesks);
    })
  }

  return (
      <div className='desks-container'>
        <div className="desks-container__desks">
          <h1>DESKS</h1>
          <button onClick={getDesks}>Получить...</button>
          <ul>
            {
              desks.map((item, index) => (
                  <Item config={config} getDesks={getDesks} desk={item} key={index}
                        deleteDesk={deleteDesk}/>
              ))
            }
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
