import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

function UserInfo() {
  let { id } = useParams();
  const [info, setInfo] = useState({});
  
  useEffect(() => {
      const newInfo = async () => {
        let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        let info = await res.json();
        setInfo(info);
      };
      
    newInfo();
  }, [id]);

  return (
    <div key={info.id} className="container">
      <div className="card-deck">
        <div className="card col-8 m-3" style ={{backgroundColor: '#2B7A78'}}>
          <h1 className="card-title mt-2 mb-0 " style ={{color: '#17252A', fontFamily: 'Josefin Sans'}}>{info.name}</h1>
          <p className="card-body mt-0 ml-2 mb-0 p-0"style ={{color: '#DEF2F1'}}>{info.username}</p>
          <p className="card-body mt-0 ml-2 p-0"style ={{color: '#DEF2F1'}}>{info.email}</p>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
