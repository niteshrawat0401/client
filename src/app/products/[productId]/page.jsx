"use client";
import React, { useEffect, useState } from "react";

export default function ProductDeatils({ params }) {
  const [singleData, setSingleData] = useState([]);

  const getSingleData = async () => {
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products/${params.productId}`
      );
      const data = await res.json();
      setSingleData(data);
      // console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleData();
  }, []);
  return (
    <div>
        <h2>Product Deatils</h2>
      <div
        style={{
          border: "1px solid grey",
          display: "flex",
          alignItems: "center",
          background: '#eef9f9'
        }}
      >
        <img width={100} src={singleData.image} />
        <div>
        <p>  Title: {singleData.title}</p>
        <p>  Price: {singleData.price}</p>
        <p>  Category: {singleData.category}</p>
        </div>
      </div>
    </div>
  );
}
