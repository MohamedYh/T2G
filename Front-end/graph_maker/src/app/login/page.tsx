'use client'
import React, { useState } from 'react';
import './page.css'

const LoginPage: React.FC = () => {
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');

    const handleemailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setemail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(email,password)
        // Add your login logic here
    };

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        placeholder='example@site.com'
                        onChange={handleemailChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder='password'
                        value={password}
                        minLength={8}
                        onChange={handlePasswordChange}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;