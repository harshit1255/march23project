import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./login.jsx";
import User from './User.jsx'

function App() {
  const [user, setuser] = useState({});
  // console.log(user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Login setter={setuser}></Login>}></Route>
        <Route path="/user" element={<User user={user}></User>}></Route>
      </Routes>
    </BrowserRouter>
    // <Login setter={setuser}></Login>
  );
}

export default App;
