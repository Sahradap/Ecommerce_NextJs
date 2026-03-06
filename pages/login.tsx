"use client";
import { useRouter } from "next/router";
import React, { use, useEffect, useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState("");

  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
      setLoggedUser(user);
    }
  }, []);

  function handleLogin() {
    if (username && password) {
      localStorage.setItem("user", username);
      setIsLoggedIn(true);
      setLoggedUser(username);
      alert("Login successful");
    }
  }

  function handleLogout() {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setLoggedUser("");
    alert("Logged out");
  }

  return (
    <div className="container d-flex justify-content-center align-items-center mt-4">
      <div className="col-12 col-md-6 col-lg-4 p-4 border rounded shadow-sm bg-light">
        <h3 className="mb-4">Login</h3>

        {!isLoggedIn ? (
          <>
            <div className="mb-3 row">
              <label className="col-sm-4 col-form-label">Username</label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={($e) => setUsername($e.target.value)}
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-4 col-form-label">Password</label>
              <div className="col-sm-8">
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={($e) => setPassword($e.target.value)}
                />
              </div>
            </div>

            <div className="mt-4">
              <button className="btn btn-warning me-2" onClick={handleLogin}>
                Login
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => router.push("/")}
              >
                Back
              </button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <p className="text-success">
              Logged in as <span className="fw-bold">{loggedUser}</span>
            </p>
            <button className="btn btn-success me-2" onClick={handleLogout}>
              Logout
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => router.push("/")}
            >
              Go Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
