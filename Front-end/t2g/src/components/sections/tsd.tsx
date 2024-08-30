"use client";
import React, { useEffect, useState } from "react";
import "./page.css";
import {
    RiArrowDropDownLine,
    RiFileEditLine,
    RiFontSize2,
} from "react-icons/ri";
import axios from "axios";
import { server_url } from "@/app/page";
import { useRouter } from "next/navigation";
import ImgBig from "../../../../public/background.png";
import { Provider, useDispatch, useSelector, UseSelector } from "react-redux";
import { RootState } from "../../../store/reduxStore";
import { store } from "../../../store/reduxStore";
import { FaChevronDown, FaEdit } from "react-icons/fa";
import { LuTableProperties } from "react-icons/lu";
import { GoGraph } from "react-icons/go";
import { PiImagesFill } from "react-icons/pi";
import { IoCloudUploadOutline } from "react-icons/io5";
import { FiFile } from "react-icons/fi";
import { GrDocumentCsv } from "react-icons/gr";
import { toast, ToastContainer } from "react-toastify";
import Papa from "papaparse";
import { MdErrorOutline } from "react-icons/md";
import {
    AreaInterface,
    BarsInterface,
    Column_AreaInterface,
    Column_LineInterface,
    ColumnInterface,
    Data,
    DataObject,
    DonutInterface,
    LineInterface,
    PieInterface,
    ProjectData,
} from "@/interfaces/project";
import { RxColumnSpacing } from "react-icons/rx";
import { FaBorderTopLeft } from "react-icons/fa6";
import { IoMdColorFill } from "react-icons/io";
import { update } from "../../../store/slices/projectManger";
import * as d3 from "d3";
import Image from "next/image";
import { extname } from "path";
import { svgIcons } from "@/svg_icons/svg_icons";
import ProjectHeader from "@/components/prj_hdr";
import DataSection from "@/components/sections/data_table";
import ChoseGraphsSection from "@/components/sections/chose_graph";
import EditGraphsSection from "@/components/sections/edit_graph";
import BackgroundImagesSection from "@/components/sections/background_images";

interface SvgDataObject {
    name: string;
    values: string[];
}

function Project({ params }: { params: { projectId: string } }) {
    const router = useRouter();

    const project = useSelector((state: RootState) => state.updater);
    const [projectName, setProjectName] = useState(project?.name);
    const [selectedPg, setSelectedPg] = useState(0);
    const [tableDataMap, setTableDataMap] = useState<string[][]>([]);
    const [dataTable, setDataTable] = useState<Data | undefined>(undefined);
    const [headers, setHeaders] = useState<string[]>([]);
    const [table, setTable] = useState<DataObject[]>([]);
    const [uppercaseAlphabets, setUppercaseAlphabets] = useState<string[]>([]);
    const [typeError, setTypeError] = useState(false);
    const [projectDelay, setProjectDelay] = useState<ProjectData | undefined>(
        undefined
    );
    const [scalCnvs, setScalCnvs] = useState<number>(1);

    const email = localStorage.getItem("email") || "";
    const token = localStorage.getItem("token") || "";
    const projectId = parseInt(params.projectId);

    const rproject = useSelector((state: RootState) => state.updater);
    const dispatch = useDispatch();

    useEffect(() => {
        if (email && projectId && router && token) {
            axios
                .post(`${server_url}/get_project`, { email, token, projectId })
                .then((r) => {
                    if (r.status == 200) {
                        console.log(r.data);
                        dispatch(update(r.data));
                        setProjectName(r.data.name);
                        setProjectDelay(r.data);
                    } else if (r.status == 211) {
                        localStorage.clear();
                        router.push("/login");
                    } else if (r.status == 215) {
                        router.push("/home");
                    }
                })
                .catch((e) => {
                    console.log("error when getting project", e);
                });
        }
    }, [email, projectId, router, token]);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("jd");
            if (project && projectDelay) {
                if (project.data !== projectDelay.data && selectedPg == 0) {
                    console.log(project);
                    const dtId = project.data[project.data_selected].id;
                    axios
                        .post(`${server_url}/update_data`, {
                            email,
                            token,
                            dtId,
                            newData: project.data[project.data_selected],
                        })
                        .then((r) => {
                            if (r.status == 200) {
                                setProjectDelay({
                                    ...projectDelay,
                                    data: project.data,
                                });
                            } else if (r.status == 211) {
                                localStorage.clear();
                                router.push("/login");
                            }
                        });
                    console.log(project?.data[project.data_selected]);
                } else if (project != projectDelay) {
                    axios.post(`${server_url}/update_project`, {
                        email,
                        token,
                        projectId,
                        newData: project,
                    });
                    setProjectDelay({ ...project });
                }
            }
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [project, projectDelay]);

    useEffect(() => {
        if (project) {
            setTimeout(() => {
                console.log(project);
                const dtId = project.data[project.data_selected].id;
                axios
                    .post(`${server_url}/update_data`, {
                        email,
                        token,
                        dtId,
                        newData: project.data[project.data_selected],
                    })
                    .then((r) => {
                        if (r.status == 200) {
                        } else if (r.status == 211) {
                            localStorage.clear();
                            router.push("/login");
                        }
                    });
                console.log(project?.data[project.data_selected]);
            }, 2000);
        }
    }, [email, project, project.data, router, token]);

    useEffect(() => {
        document.onkeydown = function (event) {
            console.log(event.key);
            if (
                event.ctrlKey == true &&
                (event.keyCode == 61 ||
                    event.keyCode == 107 ||
                    event.keyCode == 173 ||
                    event.keyCode == 109 ||
                    event.keyCode == 187 ||
                    event.keyCode == 189)
            ) {
                event.preventDefault();
                if (event.key == "+" && event.ctrlKey) {
                    if (scalCnvs <= 1.9) {
                        setScalCnvs(scalCnvs + 0.1);
                    }
                } else if (event.key == "-" && event.ctrlKey) {
                    if (scalCnvs >= 0.6) {
                        setScalCnvs(scalCnvs - 0.1);
                    }
                }
            }
        };
    }, [scalCnvs]);

    const convertToSvgReadableData = (data: DataObject[]): SvgDataObject[] => {
        const lst: SvgDataObject[] = [];
        data.map((v, i) => {
            var obj: SvgDataObject = {
                name: Object.keys(v)[0],
                values: Object.values(v[Object.keys(v)[0]]),
            };
            lst.push(obj);
        });

        return lst;
    };

    useEffect(() => {
        const data = convertToSvgReadableData([
            { cars: { price: "1999", sales: "2583", value: "1245" } },
            { bicycle: { price: "2999", sales: "2893", value: "2492" } },
            { es: { price: "2999", sales: "2893", value: "2492" } },
            { ds: { price: "2999", sales: "2893", value: "2492" } },
        ]);
        const createGroupedBarChart = (data: SvgDataObject[]) => {
            // Set the dimensions and margins of the chart
            const margin = { top: 20, right: 20, bottom: 30, left: 40 };
            const width = 800 - margin.left - margin.right;
            const height = 450 - margin.top - margin.bottom;

            // Create the SVG element
            const svg = d3
                .select(".mncntr")
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", `translate(${margin.left},${margin.top})`);

            // Set the x and y scales
            const x0 = d3.scaleBand().rangeRound([0, width]).paddingInner(0.1);
            const x1 = d3.scaleBand().padding(0.05);
            const y = d3.scaleLinear().rangeRound([height, 0]);

            // Set the domains for the x and y scales

            x0.domain(data.map((d) => d.name));
            x1.domain(["0", "1", "2"]).rangeRound([0, x0.bandwidth()]);

            var mx = 0;
            data.map((v, i) => {
                v.values.map((x, i) => {
                    mx = Math.max(mx, parseInt(x));
                });
            });

            y.domain([0, mx]);

            // Create the x axis
            svg.append("g")
                .attr("class", "x-axis")
                .attr("transform", `translate(0, ${height})`)
                .call(d3.axisBottom(x0));

            // Create the y axis
            svg.append("g").attr("class", "y-axis").call(d3.axisLeft(y));

            // Create the grouped bars
            svg.selectAll(".bar-group")
                .data(data)
                .enter()
                .append("g")
                .attr("class", "bar-group")
                .attr("transform", (d) => `translate(${x0(d.name)}, 0)`)
                .selectAll("rect")
                .data((d) => d.values)
                .enter()
                .append("rect")
                .attr("class", "bar")
                .attr("x", (d, i) => x1(i.toString())!)
                .attr("y", (d) => y(parseInt(d)))
                .attr("width", x1.bandwidth())
                .attr("height", (d) => height - y(parseInt(d)))
                .attr("fill", (d) => d3.schemeCategory10[Number(d[0])]);

            // Add labels to the x axis
            svg.selectAll(".x-axis .tick text")
                .attr("transform", "rotate(-45)")
                .attr("text-anchor", "end")
                .attr("dx", "-.8em")
                .attr("dy", ".15em");

            // Add labels to the y axis
            svg.append("text")
                .attr("class", "y-axis-label")
                .attr("transform", "rotate(-90)")
                .attr("y", 0 - margin.left)
                .attr("x", 0 - height / 2)
                .attr("dy", "1em")
                .style("text-anchor", "middle")
                .text("Value");

            // Add a title to the chart
            svg.append("text")
                .attr("class", "chart-title")
                .attr("x", width / 2)
                .attr("y", 0 - margin.top / 2)
                .attr("text-anchor", "middle")
                .text("Grouped Bar Chart");
        };
        createGroupedBarChart(data);
    }, [project, scalCnvs]);

    return (
        <div className="tbd">
            <div className="hdrnv">
                <ProjectHeader />
                <div className="exprt">
                    <p>Export</p>
                    <FaChevronDown />
                </div>
            </div>
            <div className="drwfnc">
                <div
                    className="optdrw1"
                    onClick={() => {
                        setSelectedPg(0);
                    }}
                    id={selectedPg == 0 ? "selected_pg" : ""}
                >
                    <LuTableProperties />
                    <p>Data</p>
                </div>
                <div
                    id={selectedPg == 1 ? "selected_pg" : ""}
                    className="optdrw2"
                    onClick={() => {
                        setSelectedPg(1);
                    }}
                >
                    <GoGraph />
                    <p>Graphs</p>
                </div>
                <div
                    className="optdrw3"
                    onClick={() => {
                        setSelectedPg(2);
                    }}
                    id={selectedPg == 2 ? "selected_pg" : ""}
                >
                    <RiFileEditLine />
                    <p>Edit Graph</p>
                </div>
                <div
                    className="optdrw4"
                    onClick={() => {
                        setSelectedPg(3);
                    }}
                    id={selectedPg == 3 ? "selected_pg" : ""}
                >
                    <PiImagesFill />
                    <p>Background Images</p>
                </div>
            </div>
            <div className="ngbrcntr">
                <DataSection show={selectedPg == 0} />
                <ChoseGraphsSection show={selectedPg == 1} />
                <EditGraphsSection show={selectedPg == 2} />
                <BackgroundImagesSection show={selectedPg == 3} />
            </div>
            <div
                onKeyDown={(e) => {
                    console.log(e.key, e.ctrlKey);
                }}
                className="cnvs"
            >
                <div
                    style={{
                        height: 450 * scalCnvs,
                        width: 800 * scalCnvs,
                        transform:
                            scalCnvs * 450 < window.innerHeight - 100 ||
                            scalCnvs * 800 < window.innerWidth - 535
                                ? `translate(calc((100vw - 535px - ${
                                      scalCnvs * 800
                                  }px)/2),calc(50vh - 50px - ${
                                      225 * scalCnvs
                                  }px))`
                                : "",
                    }}
                    className="mncntr"
                >
                    {scalCnvs}
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Project;
