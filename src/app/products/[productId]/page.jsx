"use client"
import React, { useEffect, useState } from "react";

export default function ProductDeatils({params}){
    const [singleData, setSingleData] = useState([]);
    
    const getSingleData =async()=>{
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${params.productId}`);
            const data = await res.json();
            setSingleData(data)
            console.log(data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getSingleData()
    },[])
    return(
        <div>
             <div style={{border: '1px solid grey', display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                        <img width={100} src={singleData.image}/>
                        <p>{singleData.title}</p>
                    </div>
        </div>
    )
}