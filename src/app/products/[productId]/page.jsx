import React from "react";

export default function ProductDeatils({params}){
    console.log(params)
    return(
        <div>
            <p>product page {params.productId}</p>
        </div>
    )
}