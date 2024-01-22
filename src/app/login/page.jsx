"use client";
import React, { useState } from "react";
import Button from "../../components/buttuon";
import Welcome from "../../components/welcome";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [reference, setReference] = useState("/login");

  const handleLogin = () => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = existingUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      alert("Login successful!");
      setReference((reference = "/dashboard"));
    } else {
      alert("Invalid email or password. Please try again.");
    }

    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div
        className="container flex flex-row items-center justify-center text-center
         h-screen w-full relative bg-slate-50 z-0"
      >
        <div className="registerForm w-7/12 flex justify-center z-10">
          <form className="w-5/6 shadow-2xl rounded py-20 bg-white flex flex-col items-center">
            <h1 className="text-4xl font-bold">Login</h1>
            <p className="my-4">
              New to XOrithm ?{" "}
              <Link href="/register" className="text-blue-600">
                Register for new Account
              </Link>
            </p>
            <div className="w-3/4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2 text-left"
                for="Email"
              >
                Email
              </label>
              <input
                type="email"
                id="Email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-3/4 mt-4 mb-12">
              <label
                class="block text-gray-700 text-sm font-bold mb-2 text-left"
                for="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="*********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button type="button" onClick={handleLogin}>
              <a
                href={reference}
                className="w-3/4 border-solid border-white rounded m-2 p-4 text-white
                        bg-blue-600 hover:bg-blue-800 duration-500"
              >
                Login
              </a>
            </button>
          </form>
        </div>
        <Welcome></Welcome>
      </div>
    </>
  );
}
