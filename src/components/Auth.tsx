import React, {useState} from 'react';
import Input from "./UI/Input";
import Button from "./UI/Button";
import axios from "axios";

// @ts-ignore
const Auth = ({token, selectToken}) => {
  const [value, setValue] = useState({email: 'gura@gmail.com', password: 'ilya123'});
  const sendData = async (e: any) => {
    e.preventDefault();
    axios.post(`http://127.0.0.1:8000/api/auth/login`, {
      email: value.email,
      password: value.password
    }).then(res => {
      selectToken(res.data.access_token);
    })
  }
  return (
    <div>
      <h2>Вход</h2>
      <form>
        <div>
          <Input
            value={value}
            setValue={setValue}
            name='email'
            type="email"
          />
        </div>
        <div>
          <Input
            value={value}
            setValue={setValue}
            name='password'
            type="password"
          />
        </div>
        <Button
          name="Авторизоваться"
          onClick={sendData}
        />
      </form>
    </div>
  );
};

export default Auth;

