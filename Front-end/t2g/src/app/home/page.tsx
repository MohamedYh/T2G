"use client";
import axios from "axios";
import * as d3 from "d3";
import React, { useState, useEffect, useRef } from "react";
import { server_url } from "../page";
import { useRouter } from "next/navigation";
import "./page.css";
import { cookies } from "next/headers";
import { BiSearch } from "react-icons/bi";
import { MdDelete, MdLogout, MdOutlineUploadFile } from "react-icons/md";
import { IoCreate } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";

function Home() {
    const router = useRouter();

    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([
        "BLa Bla BLa ljfldasj fladjslkfjd as Bejrk JFKDS",
        "Bar ChartsOfCutedTreesInUSA2",
    ]);
    const d3Container = useRef(null);

    const email = localStorage.getItem("email");

    useEffect(() => {
        axios
            .post(`${server_url}/check_token`, {
                email,
                token: localStorage.getItem("token"),
            })
            .then((r) => {
                if (r.status == 200) {
                    setLoading(false);
                }
            })
            .catch((e) => {
                router.push("/login");
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    function mxlnt(lst: String[]) {
        var mx = false;
        var lt = 0;
        for (let index = 0; index < lst.length; index++) {
            if (lst[index].length > 21) {
                lt += 19;
                mx = true;
                break;
            } else {
                lt += lst[index].length;
            }
        }
        return { mx, lt };
    }

    return (
        <div className="cntrv">
            <nav>
                <div className="hlw">
                    <div className="acnt">
                        <p>
                            {localStorage
                                .getItem("email")
                                ?.charAt(0)
                                .toUpperCase()}
                        </p>
                        <p className="hlu">Hello!</p>
                    </div>
                </div>
                <div className="srchcntr">
                    <input
                        onFocus={() => {
                            var srh = document.getElementById("srchp");
                            var sri = document.getElementById("srchi");
                            if (srh) {
                                srh.style.display = "none";
                            }
                            if (sri) {
                                sri.style.display = "none";
                            }
                        }}
                        onBlur={(e) => {
                            if (e.target.value.length == 0) {
                                var srh = document.getElementById("srchp");
                                var sri = document.getElementById("srchi");
                                if (srh) {
                                    console.log(srh);
                                    srh.style.display = "block";
                                }
                                if (sri) {
                                    sri.style.display = "block";
                                }
                            }
                        }}
                        id="inptsrch"
                        type="text"
                    />
                    <BiSearch
                        id="srchi"
                        onClick={() => {
                            document.getElementById("inptsrch")?.focus();
                        }}
                    />
                    <p
                        id="srchp"
                        onClick={() => {
                            document.getElementById("inptsrch")?.focus();
                        }}
                    >
                        search
                    </p>
                </div>
                <div
                    onClick={() => {
                        localStorage.clear();
                    }}
                    className="lgot"
                >
                    <MdLogout />
                    <p>Logout</p>
                </div>
            </nav>
            <div className="functionsmenu">
                <div className="fnct1">
                    <IoCreate />
                    <p>Create New Project</p>
                </div>
                <div className="fnct2">
                    <MdOutlineUploadFile />
                    <p>Upload CSV File</p>
                </div>
                <div className="fnct3">
                    <FaFilter />
                    <p>Filter</p>
                </div>
                <div className="fnct4">
                    <MdDelete />
                    <p>Delete Projects</p>
                </div>
            </div>
            <h1>Projects</h1>
            <div className="projects">
                {projects.map((x, i) => {
                    var mxlntvr = mxlnt(x.split(" "));
                    return (
                        <>
                            <div>
                                <div className="shw"></div>
                                <p title={x} className="prjtitle">
                                    {x.length > 46
                                        ? mxlntvr.mx == false
                                            ? x.slice(0, 44) + "..."
                                            : x.slice(0, 19) + "..."
                                        : mxlntvr.mx == false
                                        ? x
                                        : x.slice(0, mxlntvr.lt) + "..."}
                                </p>
                            </div>
                        </>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;
