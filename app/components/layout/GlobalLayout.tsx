"use client";

import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";
import { CartProvider } from "../context/CartContext";

export default function GlobalLayout({ children }: any) {
  return (
    <CartProvider>
      <NavBar />
      {children}
      <Footer />
    </CartProvider>
  );
}