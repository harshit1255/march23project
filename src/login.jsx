import { useState } from "react";
import { useNavigate } from 'react-router-dom';
// import {useHistory} from 'react-router-dom'
import './login.css'
const Login = ({ setter }) => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const history = useNavigate();
  function onlogin(e) {
    e.preventDefault();
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: `${username}`,
        password: `${password}`,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        else throw "invalid user";
      })
      .then((res) => {setter(res)
        localStorage.setItem('token',res.token)   // saving in localstorage
        localStorage.setItem('id',res.id)
        history('/user')
        
    })
      .catch((e) => alert(e));
  }
  return (
    <div>
      <form onSubmit={onlogin}>
        <input
          type="text"
          value={username}
          placeholder="username"
          onChange={(e) => setusername(e.target.value)}
        ></input>
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setpassword(e.target.value)}
        ></input>
        <button>Login</button>
      </form>
    </div>
  );
};
export default Login;
