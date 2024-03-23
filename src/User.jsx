import { useEffect } from "react";
import './user.css'
const User = ({ user }) => {
  const id = localStorage.getItem("id");
  useEffect(() => {
    (async () => {
      let response = await fetch(`https://dummyjson.com/users/${id}`);
      let res = await response.json();
      console.log(res);
    })();
  }, []);
  console.log(user);
  return (
    <div id='cont'>
        <img src={user.image}></img>
      <h1>User Details</h1>
      <p>hello {user.username}</p>
      <p>email: {user.email}</p>
      <p>first name: {user.firstName}</p>
      <p>last name: {user.lastName}</p>
      {/* <p>age: {user.age}</p> */}
      <p>gender: {user.gender}</p>
    </div>
  );
};
export default User;
