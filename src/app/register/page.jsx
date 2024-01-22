"use client";
import React, { useState } from "react";

import Link from "next/link";
import Welcome from "../../components/welcome";

export default function Register() {
  let [reference, setReference] = useState("/register");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = () => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const isEmailTaken = existingUsers.some((user) => user.email === email);

    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      alert("Please fill in all fields.");
      return;
    } else if (isEmailTaken) {
      alert("Email already registered. Please use a different email.");
      setName("");
      setEmail("");
      setPassword("");
      document.getElementById("form").reset();
      return;
    } else {
      const newUser = {
        name,
        email,
        password,
      };
      existingUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(existingUsers));

      setName("");
      setEmail("");
      setPassword("");
      setReference((reference = "/login"));

      return;
    }
  };

  return (
    <>
      <div
        className="container flex flex-row items-center justify-center text-center
        h-screen w-full relative bg-slate-50 z-0"
      >
        <div className="registerForm w-7/12 flex justify-center z-10">
          <form
            className="w-5/6 shadow-2xl rounded py-20 bg-white flex flex-col items-center"
            id="form"
          >
            <h1 className="text-4xl font-bold">Register</h1>
            <p className="my-4">
              Already have and account ?{" "}
              <Link href="/login" className="text-blue-600">
                Login
              </Link>
            </p>
            <div className="w-3/4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 text-left"
                htmlFor="Name"
              >
                Name
              </label>
              <input
                type="text"
                id="Name"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                className="shadow appearance-none border rounded w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-3/4 mt-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 text-left"
                htmlFor="Email"
              >
                Email
              </label>
              <input
                type="email"
                id="Email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-3/4 mt-4 mb-12">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 text-left"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="*********"
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button type="button" onClick={handleRegistration}>
              <a
                href={reference}
                className="w-3/4 border-solid border-white rounded m-2 p-4 text-white
                        bg-blue-600 hover:bg-blue-800 duration-500"
              >
                Register
              </a>
            </button>
          </form>
        </div>
        <Welcome></Welcome>
      </div>
    </>
  );
}
