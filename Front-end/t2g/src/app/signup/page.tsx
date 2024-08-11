"use client";
import React, { useState } from "react";
import "./page.css";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
import { server_url } from "../page";


const SignUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const router = useRouter()

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleRePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRePassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (
      email.includes("@") &&
      password.length >= 8 &&
      password === repassword
    ) {
      console.log({ email, password })
      axios
        .post(`${server_url}/signup`, { email, password })
        .then((r) => {
          if (r.status == 200) {
            toast("Welcome To Graph Maker");
            localStorage.setItem('email',email)
            router.push('/confirmation')
          } else if (r.status == 201) {
            toast("there was a problem during creating account")
          }
        })
        .catch((e) => {
          console.log("axios error: ");
          console.log(e);
        });
    } else {
      if (email.includes("@") == false) {
        toast.error("email not valid");
      } else if (password.length < 8) {
        toast.error("password is too short");
      } else toast.error("please repeat the same password");
    }
  };

  return (
    <div className="containerlg">
      <div className="cntr">
        <h1>Sign Up</h1>
        <h4>Welcome To T2G!</h4>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="e-mail"
              value={email}
              placeholder="example@site.com"
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="pass"
              placeholder="Minimum 8 Characters"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <label htmlFor="password">Confirm Password</label>
            <input
              type="text"
              id="repass"
              placeholder="Minimum 8 Characters"
              value={repassword}
              onChange={handleRePasswordChange}
            />
          </div>
          <button className="sbmt" type="submit">
            SignUp
          </button>
        </form>
        <p className="ydh">
          Ready Have An Account?
          <p style={{ textDecoration: "underline" }}>
            <a href="/login">Login</a>
          </p>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
