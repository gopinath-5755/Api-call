import React, { useState } from "react";
import { useEffect } from "react";
export default function Apicall(){
    const [abc,setAbc] = useState([]);
    useEffect(()=>{
        // const data = fetch("https://jsonplaceholder.typicode.com/posts");
        const data = fetch("https://jsonplaceholder.typicode.com/posts");
        const value = data.then((item)=>item.json());
        value.then((apiData)=>setAbc(apiData));
    },[]);
    console.log(abc);
    return(
        <>
         {abc.map((item,i)=>{
            return(
                <div class="box" key={i}>
                <p><b>title:</b>{item.title}</p>
                <p><b>body:</b>{item.body}</p>

                </div>
            
            )
         })}
        </>
    )
};