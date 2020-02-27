import React from "react";
import { useParams } from 'react-router'
import { useEffect, useState } from "react";



function UserInfo(){

    let {id} = useParams()
    const [info, setInfo] = useState({});
    const newInfo = async () => {
        let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        let info = await res.json();
        setInfo(info);
    }

    useEffect(() => {
        newInfo();
      }, []);

    return(
      <div key ={info.id}>
        <h1>{info.name}</h1>
        <p>{info.username}</p>
        <p>{info.email}</p>
        
        </div>
    )
} 


export default UserInfo;
