"use client";
import { useState, useEffect, useRef } from "react";
import React from "react";
import "./globals.css";

export default function Home() {
  return (
    <main>
      <div className="scn">
        <div className="bcks"></div>
        <div className="navbar">
          <h1 className={"title"}>GraphMaker</h1>
          <div className="btns">
            <button className="bt1">Login</button>
            <button className="bt2">Sign Up</button>
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
    </main>
  );
}
