import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const User = () => {
  const [users, setUser] = useState([]);
  const getUser = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await res.json();
    setUser(users);
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      {users.map(user => {
        return (
          <div key={user.id}>
            <h1>{user.username}</h1>
            <Link to = {`/${user.id}/details`}> User Info</Link>
          </div>
        );
      })}
    </div>
  );
};

export default User;
