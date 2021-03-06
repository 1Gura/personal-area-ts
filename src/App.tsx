import './App.css';
import Desks from "./components/Desks/Desks";
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DesksList from "./components/DesksList";
import Main from "./components/Main";
import Cards from "./components/Cards";
import Tasks from "./components/Tasks";
import Auth from "./components/Auth";
import {useEffect, useState} from "react";
import axios from "axios";
import {CardVariant} from "./interfaces/CardPropsInterface";
import {Provider} from "react-redux";
import {store} from "./store";
import UserList from "./components/UserList/UserList";

function App() {
  const [apiToken, setToken] = useState('');
  const [authorize, setAuthorize] = useState(false);
  const [config, setConfig] = useState({
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('apiToken')
    }
  });

  const selectConfig = () => {
    setConfig({
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('apiToken')
      }
    });
  }

  const selectToken = (token: string) => {
    setToken(token);
    localStorage.setItem('apiToken', token);
    setAuthorize(true);
    selectConfig();
  }

  const checkedTicket = () => {
    axios.get('http://127.0.0.1:8000/api/auth/user-profile', config).then(() => {
          setAuthorize(true);
        }
    ).catch(e => {
      if (e && e.response && e.response.status === 401) {
        setAuthorize(false);
      }
    })
  }

  const test = (state: number): void => {
    console.log(`Hello ${state}`);
  }

  useEffect(() => {
    checkedTicket();
  }, [apiToken])

  return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="app">
            <Navbar authorize={authorize}/>
            <div className='container'>
              <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/users" element={<UserList config={config}/>}/>
                <Route path="/desks" element={<Desks config={config}/>}/>
                <Route path='/desks/:id' element={<Desks config={config}/>}/>
                <Route path="/desks-list" element={<DesksList/>}/>
                <Route path="/cards" element={
                  <Cards variant={CardVariant.primary} width={'300px'} height={'200px'} onClick={test}/>
                }/>
                <Route path="/tasks" element={<Tasks/>}/>
                <Route path="/auth" element={<Auth selectToken={selectToken}/>}/>
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
