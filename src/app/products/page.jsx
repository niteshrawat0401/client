"use client";

import React, { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProductList() {
  const [data, setData] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();


  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const buttonStyle = {
    background: isHovered ? '#eef9f9' : '#f7f6f3',
    border: '1px solid black',
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    transition: 'background 0.3s',
    cursor: 'pointer',
  };

  const getData = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setData(data);
      // console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      {data?.map((e) => {
        return (
          <div
            onClick={() => router.push(`/products/${e.id}`)}
            key={e.id}
            style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
          >
            <img width={100} src={e.image} />
            <p> Title: {e.title}</p>
          </div>
        );
      })}
    </div>
  );
}
