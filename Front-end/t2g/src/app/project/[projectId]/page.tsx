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

    const ColumnGraph = () => {
        if (project && project.data && project.data[project.data_selected]) {
            d3.selectAll(".svgcntr").remove();

            const data = convertToSvgReadableData(
                JSON.parse(project.data[project.data_selected].data)
            );
            const width = 500 * scalCnvs;
            const height = 325 * scalCnvs;
            const marginTop = 10;
            const marginRight = 10;
            const marginBottom = 20;
            const marginLeft = 100;
            const barsMargin = {
                left: 10 * scalCnvs,
                right: 0,
                top: 0,
                bottom: 0,
            };

            const svg = d3
                .select(".mncntr")
                .append("svg")
                .attr("class", "svgcntr")
                .attr("height", height)
                .attr("viewBox", [0, 0, width, height])
                .append("g")
                .attr("class", "ghdr")
                .attr("transform", `translate(0,${marginTop})`); // Add transform to the 'g' element

            const numbers = Array.from(
                {
                    length: data[0].values.length,
                },
                (_, i) => i.toString()
            );

            const colorList = [
                "#6991d1",
                "#69d1b2",
                "#ff6241",
                "#e1c259",
                "#c7c2af",
                "#ffbe75",
                "#8B5855",
                "#FF8C8C",
                "#4A3F3F",
            ];

            var mx = 0;
            data.map((v, i) => {
                v.values.map((x, i) => {
                    mx = Math.max(mx, parseInt(x));
                });
            });

            const x = d3
                .scaleBand()
                .domain(new Set(data.map((v) => v.name)))
                .rangeRound([0, width + barsMargin.left])
                .paddingInner(0.1);

            const y = d3
                .scaleLinear()
                .domain([0, mx])
                .range([height - marginTop - marginBottom, 0]);

            const x1 = d3
                .scaleBand()
                .domain(numbers)
                .range([0, x.bandwidth()])
                .padding(project.Column.bar_spacing / 10);

            const colorScale = d3.scaleOrdinal(numbers, colorList);

            const xAxis = d3.axisBottom(x).tickSizeOuter(0);
            const yAxis = d3.axisLeft(y);

            // Add the x-axis
            svg.append("g")
                .attr("class", "x-axis")
                .attr(
                    "transform",
                    `translate(0,${height - marginTop - marginBottom})`
                )
                .call(xAxis);

            // Add the y-axis
            svg.append("g").attr("class", "y-axis").call(yAxis);

            const group = svg
                .append("g")
                // .attr("transform", `translate(${barsMargin.left},0)`)
                .selectAll(".gropes")
                .data(data)
                .join("g")
                .attr("width", 30)
                .attr("class", "gropes")
                .attr("transform", (d) => {
                    return `translate(${x(d.name)!},0)`;
                }); // Add class to the 'g' element
            const rx = Math.min(
                project.Column.border_radius,
                Math.round(x1.bandwidth() / 2)
            );
            const ry = Math.min(
                project.Column.border_radius,
                Math.round(x1.bandwidth() / 2)
            );

            group
                .selectAll(".bar")
                .data((d) => d.values)
                .enter()
                .append("path") // Use 'rect' instead of 'react'
                .attr(
                    "d",
                    (d, i) => `
                        M ${x1(i.toString())},${y(parseInt(d)) + rx}
                        a${rx},${ry} 0 0 1 ${rx},${-ry}
                        h${x1.bandwidth() - 2 * rx}
                        a${rx},${ry} 0 0 1 ${rx},${ry}
                        v${
                            height -
                            marginTop -
                            marginBottom -
                            y(parseInt(d)) -
                            ry
                        }
                        h${-x1.bandwidth()}Z
                    `
                )
                .attr("class", "bar") // Add class to the 'rect' element
                .attr("fill", (d, i) => colorScale(i.toString()))
                .transition()
                .duration(2000)
                .attr("y", (d) => y(parseInt(d)))
                .attr(
                    "height",
                    (d) => height - marginTop - marginBottom - y(parseInt(d))
                );
        }
    };

    const BarsGraph = () => {
        if (project && project.data && project.data[project.data_selected]) {
            d3.selectAll(".svgcntr").remove();

            const data = convertToSvgReadableData(
                JSON.parse(project.data[project.data_selected].data)
            );
            const width = 500 * scalCnvs;
            const height = 325 * scalCnvs;
            const marginTop = 10;
            const marginRight = 10;
            const marginBottom = 20;
            const marginLeft = 40;

            const svg = d3
                .select(".mncntr")
                .append("svg")
                .attr("class", "svgcntr")
                .attr("width", width + 50)
                .attr("height", height)
                .attr("viewBox", [0, 0, width, height])
                .append("g")
                .attr("class", "ghdr")
                .attr("transform", `translate(${marginLeft},${marginTop})`); // Add transform to the 'g' element
        }
    };

    const PieGraph = () => {
        if (project && project.data && project.data[project.data_selected]) {
            d3.selectAll(".svgcntr").remove();

            const data = convertToSvgReadableData(
                JSON.parse(project.data[project.data_selected].data)
            );
            const width = 500 * scalCnvs;
            const height = 325 * scalCnvs;
            const marginTop = 10;
            const marginRight = 10;
            const marginBottom = 20;
            const marginLeft = 40;

            const svg = d3
                .select(".mncntr")
                .append("svg")
                .attr("class", "svgcntr")
                .attr("width", width + 50)
                .attr("height", height)
                .attr("viewBox", [0, 0, width, height])
                .append("g")
                .attr("class", "ghdr")
                .attr("transform", `translate(${marginLeft},${marginTop})`); // Add transform to the 'g' element
        }
    };

    const DonutGraph = () => {
        if (project && project.data && project.data[project.data_selected]) {
            d3.selectAll(".svgcntr").remove();

            const data = convertToSvgReadableData(
                JSON.parse(project.data[project.data_selected].data)
            );
            const width = 500 * scalCnvs;
            const height = 325 * scalCnvs;
            const marginTop = 10;
            const marginRight = 10;
            const marginBottom = 20;
            const marginLeft = 40;

            const svg = d3
                .select(".mncntr")
                .append("svg")
                .attr("class", "svgcntr")
                .attr("width", width + 50)
                .attr("height", height)
                .attr("viewBox", [0, 0, width, height])
                .append("g")
                .attr("class", "ghdr")
                .attr("transform", `translate(${marginLeft},${marginTop})`); // Add transform to the 'g' element
        }
    };

    const LineGraph = () => {
        if (project && project.data && project.data[project.data_selected]) {
            d3.selectAll(".svgcntr").remove();

            const data = convertToSvgReadableData(
                JSON.parse(project.data[project.data_selected].data)
            );
            const width = 500 * scalCnvs;
            const height = 325 * scalCnvs;
            const marginTop = 10;
            const marginRight = 10;
            const marginBottom = 20;
            const marginLeft = 40;

            const svg = d3
                .select(".mncntr")
                .append("svg")
                .attr("class", "svgcntr")
                .attr("width", width + 50)
                .attr("height", height)
                .attr("viewBox", [0, 0, width, height])
                .append("g")
                .attr("class", "ghdr")
                .attr("transform", `translate(${marginLeft},${marginTop})`); // Add transform to the 'g' element
        }
    };

    const AreaGraph = () => {
        if (project && project.data && project.data[project.data_selected]) {
            d3.selectAll(".svgcntr").remove();

            const data = convertToSvgReadableData(
                JSON.parse(project.data[project.data_selected].data)
            );
            const width = 500 * scalCnvs;
            const height = 325 * scalCnvs;
            const marginTop = 10;
            const marginRight = 10;
            const marginBottom = 20;
            const marginLeft = 40;

            const svg = d3
                .select(".mncntr")
                .append("svg")
                .attr("class", "svgcntr")
                .attr("width", width + 50)
                .attr("height", height)
                .attr("viewBox", [0, 0, width, height])
                .append("g")
                .attr("class", "ghdr")
                .attr("transform", `translate(${marginLeft},${marginTop})`); // Add transform to the 'g' element
        }
    };

    const ColumnLineGraph = () => {
        if (project && project.data && project.data[project.data_selected]) {
            d3.selectAll(".svgcntr").remove();

            const data = convertToSvgReadableData(
                JSON.parse(project.data[project.data_selected].data)
            );
            const width = 500 * scalCnvs;
            const height = 325 * scalCnvs;
            const marginTop = 10;
            const marginRight = 10;
            const marginBottom = 20;
            const marginLeft = 40;

            const svg = d3
                .select(".mncntr")
                .append("svg")
                .attr("class", "svgcntr")
                .attr("width", width + 50)
                .attr("height", height)
                .attr("viewBox", [0, 0, width, height])
                .append("g")
                .attr("class", "ghdr")
                .attr("transform", `translate(${marginLeft},${marginTop})`); // Add transform to the 'g' element
        }
    };

    const ColumnAreaGraph = () => {
        if (project && project.data && project.data[project.data_selected]) {
            d3.selectAll(".svgcntr").remove();

            const data = convertToSvgReadableData(
                JSON.parse(project.data[project.data_selected].data)
            );
            const width = 500 * scalCnvs;
            const height = 325 * scalCnvs;
            const marginTop = 10;
            const marginRight = 10;
            const marginBottom = 20;
            const marginLeft = 40;

            const svg = d3
                .select(".mncntr")
                .append("svg")
                .attr("class", "svgcntr")
                .attr("width", width + 50)
                .attr("height", height)
                .attr("viewBox", [0, 0, width, height])
                .append("g")
                .attr("class", "ghdr")
                .attr("transform", `translate(${marginLeft},${marginTop})`); // Add transform to the 'g' element
        }
    };

    useEffect(() => {
        console.log(project.graph_selected);
        switch (project.graph_selected) {
            case 0:
                console.log("hfas");
                return ColumnGraph();
            case 1:
                return BarsGraph();
            case 2:
                return PieGraph();
            case 3:
                return DonutGraph();
            case 4:
                return LineGraph();
            case 5:
                return AreaGraph();
            case 6:
                return ColumnLineGraph();
            case 7:
                return ColumnAreaGraph();
        }
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
                ></div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Project;
