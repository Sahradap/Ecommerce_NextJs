"use client";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import "../special-buttons/SpecialButtons.css";
import { CartContext } from "../context/CartContext";

export default function ProductCard(props: any) {
  var prod = props.product;
  const cart = useContext(CartContext);
  if (!cart) return null;
  const { addToCart } = cart;

  const handleAddToCart = () => {
    addToCart(prod);
  };
  
  return (
    <div className="card" style={{ height: "410px", width: "300px" }}>
      <div>
        <Link href={"/products/" + prod.id}>
          <img
            src={prod.images?.[0]}
            className="card-img"
            style={{ height: "180px", objectFit: "contain" }}
          ></img>
        </Link>
      </div>
      <div className="card-body">
        <Link
          href={"/products/" + prod.id}
          className="text-dark text-decoration-none"
        >
          {" "}
          <h5 className="card-title" style={{ height: "70px" }}>
            {" "}
            {prod.title}
          </h5>{" "}
        </Link>

        <p className="card-text" style={{ overflow: "hidden", height: "30px" }}>
          {prod.description}
        </p>
        <p className="card-text text-center fw-semibold">AED {prod.price}</p>
        <button className="button mx-auto d-block" onClick={handleAddToCart}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}
