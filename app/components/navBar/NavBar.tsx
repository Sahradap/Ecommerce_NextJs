"use client";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import "./NavBar.css";
import { CartContext } from "../context/CartContext";
import { usePathname, useRouter } from "next/navigation";

export default function NavBar() {
  
  const cart = useContext(CartContext);

if (!cart) return null;

const { clearCart, totalItems } = cart;
  const router = useRouter();
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const [loggedUser, setLoggedUser] =useState<string | null>(null);;

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setLoggedUser(user);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setLoggedUser(null);
    router.push("/");
    clearCart();
  };

  // const isLoggedIn = !!loggedUser;
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-bg text-dark fs-5">
        <div className="container-fluid">
          <Image src={logo} alt="logo" width={50} height={50} />
          <span className="fw-bold text-light fs-3">Ecart</span>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                <Link
                  href="/"
                  className={`nav-link ${isActive("/") ? "active-tab" : ""}`}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  href="/products"
                  className={`nav-link ${isActive("/products") ? "active-tab" : ""}`}
                >
                  Products
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  href={"/about"}
                  className={`nav-link ${isActive("/about") ? "active-tab" : ""}`}
                >
                  About us
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  href={"/contact"}
                  className={`nav-link ${isActive("/contact") ? "active-tab" : ""}`}
                >
                  Contact Us
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  href={"/carts"}
                  className={`nav-link ${isActive("/carts") ? "active-tab" : ""}`}
                >
                  Cart
                  {totalItems > 0 && (
                    <span className="mb-1" style={{ fontSize: "1.2rem" }}>
                      <i className="bi bi-cart-fill"></i>
                      {totalItems}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
            <form className="d-flex ms-4" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success me-2" type="submit">
                Search
              </button>
            </form>

            {loggedUser ? (
              <>
                <p className="text-light me-3 mb-0">Hello, {loggedUser}</p>

                <button
                  className="btn btn-warning btn-sm"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                className="btn btn-primary mb-1 ps-3"
                onClick={() => router.push("/login")}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
