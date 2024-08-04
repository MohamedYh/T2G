"use client";
import React, { useEffect, useState } from "react";
import "./page.css";
import { ToastContainer } from "react-toastify";

const LoginPage: React.FC = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const handleemailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setemail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add your login logic here
  };

return (
    <div className="containerlg">
        <div className="cntr">
            <h1>Login</h1>
            <h4>Welcome Back!</h4>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="e-mail"
                        value={email}
                        placeholder="example@site.com"
                        onChange={handleemailChange}
                        autoComplete="off" // Add this line to disable autocomplete
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="text"
                        id="password"
                        placeholder="password"
                        value={password}
                        minLength={8}
                        onChange={handlePasswordChange}
                        autoComplete="off" // Add this line to disable autocomplete
                    />
                    <p className="fmp">Forgot Password?</p>
                </div>
                <button className="sbmt" type="submit">Login</button>
            </form>
            <p className="ydh">
                Don&apos;t have an account?
                <p style={{ textDecoration: 'underline' }}>
                    <a href="/signup">Sign up</a>
                </p>
            </p>
        </div>
        <ToastContainer />
    </div>
);
};

export default LoginPage;
