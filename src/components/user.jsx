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
          <div key={user.id} className="conatiner-fluid">
            <div className="row m-3">
              <div className="card col-5 m-3"style ={{backgroundColor: '#2B7A78'}}>
                <h1 className="card-title mt-2 mb-0 " style ={{color: '#17252A', fontFamily: 'Josefin Sans'}}>
                  {user.username}
                </h1>
                <Link className="mb-3 mt-0" style ={{color: '#DEF2F1'}} to={`/${user.id}/details`}>
                  User Info
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default User;
