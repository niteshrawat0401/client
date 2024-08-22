"use client"; // This is a client component 👈🏽

import React, { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProductList(){
    const [data, setData] = useState([]);
    const router = useRouter();

    const getData = async ()=>{
        try {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json();
            setData(data)
            // console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getData()
    },[])

    return(
        <div>
            <p>product List</p>
            {data?.map((e)=>{
                return(
                    <div onClick={()=>router.push(`/products/${e.id}`)} key={e.id} style={{border: '1px solid grey', display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                        <img width={100} src={e.image}/>
                        <p>{e.title}</p>
                    </div>
                )
            })
            }
        </div>
    )
}