'use client'
import React, { useContext } from 'react'
import { useRouter } from 'next/navigation'
import './SpecialButtons.css'
import { CartContext } from '../context/CartContext';

export default function DetailButton({ product }: any) {
  const cart = useContext(CartContext);
  const router = useRouter();

  if (!cart) return null;

  const { addToCart } = cart;

  const handleAddToCart = () => {
    addToCart(product);
    router.push('/carts')
  };

  return (
    <div>
      <button className="button me-3" onClick={handleAddToCart}>
        Add To Cart
      </button>

      <button className="button" onClick={() => router.back()}>
        Back
      </button>
    </div>
  );
}