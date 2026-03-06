"use client";

import { useContext } from "react";
import { CartContext } from "../components/context/CartContext";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const cart = useContext(CartContext);

  if (!cart) {
    throw new Error("CartContext must be used inside CartProvider");
  }

  const { cartItems, removeFromCart, totalPrice, totalItems } = cart;

  const router = useRouter();

  return (
    <div className="container mt-4">
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 && (
        <p className="text-success fs-3">
          Your shopping cart looks empty
        </p>
      )}

      {cartItems.map((item) => (
        <div key={item.id} className="card mb-3 p-3">
          <img src={item.images?.[0]} width={100} />
          <h5>{item.title}</h5>
          <p>AED {item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total: AED {(item.price * item.quantity)}</p>

          <div>
            <button
              className="btn btn-danger me-2"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>

            <button
              className="btn btn-secondary"
              onClick={() => router.back()}
            >
              Back
            </button>
          </div>
        </div>
      ))}

      {cartItems.length > 0 && (
        <div className="card p-3 mt-4">
          <h4>Order Summary ({totalItems} items)</h4>
          <h5>Subtotal: AED {totalPrice}</h5>

          <div className="text-center">
            <button className="btn btn-primary fw-bold mt-2">
              CHECKOUT
            </button>
          </div>
        </div>
      )}
    </div>
  );
}