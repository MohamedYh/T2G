"use client";
import axios from "axios";
import * as d3 from "d3";
import React, { useState, useEffect, useRef } from "react";
import { server_url } from "../page";
import { useRouter } from "next/navigation";
import "./page.css";

function Home() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const d3Container = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("hello");
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (d3Container.current && !loading) {
            const data = [10, 12, 35];
            const width = document.getElementById("svg1")?.clientWidth || 500;
            const height = document.getElementById("svg1")?.clientHeight || 500;;
            // maek d3 scale
            const x = d3.scaleLinear([10, 130], [0, 960]);
            const heightScale = d3.scaleLinear([0, 35], [0, height]);
            // add vertical axis
            const r = d3
                .select("#svg1")
                .attr("margin", 30);

            const axe = d3.axisLeft(heightScale);
            r.append("g")
                .call(axe)
                .attr("color", "red")
                .selectAll("g")
                .select("text")
                .attr("x", 20)

            r.selectAll("rect")
                .data(data)
                .enter()
                .append("rect")
                .attr("width", 60)
                .attr("height", function (d) {
                    return heightScale(d);
                })
                .attr("x", function (d, i) {
                    return i * 70;
                })
                .attr("y", function (d) {
                    return height - heightScale(d);
                })
                .attr("fill", "blue")
            // add d3 axe
        }
    }, [loading]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <svg id="svg1" ref={d3Container}></svg>
        </div>
    );
}

export default Home;
