"use client";
import { useState, useEffect, useRef } from "react";
import React from "react";
import { useRouter } from "next/navigation";

import "./page.css";
export const server_url = "http://localhost:3001";

export default function Home() {
    const router = useRouter();

    return (
        <div className="bdlw">
            <div className="scn">
                <div className="bcks"></div>
                <div className="navbar">
                    <div className="titlecntr">
                        <h1 id="ttl1"></h1>
                        <h1 id="ttl2"></h1>
                        <h1 id="ttl3"></h1>
                    </div>
                    <div className="btns">
                        <button
                            onClick={() => {
                                router.push("/login");
                            }}
                            className="bt1"
                        >
                            Login
                        </button>
                        <button
                            onClick={() => {
                                router.push("/signup");
                            }}
                            className="bt2"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
                <h1 className="hdr">
                    Free, Easy, Fast, Efficient, Flexible Design, Attractive.
                </h1>
                <div className="gst">
                    <button className="g1">Upload CSV File</button>
                    <button className="g2">Create New Graph</button>
                </div>
            </div>
        </div>
    );
}
