"use client";
import React, { useEffect, useRef, useState } from "react";
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
import html2canvas from "html2canvas";
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

interface LegendObject {
    size: number;
    color: string;
    style: string;
    weight: string;
}
interface AreaData {
    name: string;
    month: number;
    value: number;
}
interface AreaChartProps {
    data: AreaData[];
    width: number;
    height: number;
    margin?: { top: number; right: number; bottom: number; left: number };
}

interface SvgDataObject {
    name: string;
    values: string[];
}

interface PieDataObject {
    name: string;
    value: number;
}

interface LineDataObject {
    name: string;
    keyIndex: number;
    value: number;
}

interface ColumnLineObject {
    name: string;
    value: number;
}

function Project({ params }: { params: { projectId: string } }) {
    const router = useRouter();

    const project = useSelector((state: RootState) => state.updater);
    const action = useSelector((state: RootState) => state.updateAction);

    const [selectedPg, setSelectedPg] = useState(0);
    const [internalKeys, setInternalKeys] = useState<string[]>([]);
    const [projectDelay, setProjectDelay] = useState<ProjectData | undefined>(
        undefined
    );
    const [backgroundImageUrl, setBackgroundImageUrl] = useState("");
    const [scalCnvs, setScalCnvs] = useState<number>(1);
    const [xAxisFontSize, setXAxisFontSize] = useState(10);

    const email = localStorage.getItem("email") || "";
    const token = localStorage.getItem("token") || "";
    const projectId = Number(params.projectId);

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
        "#d251bb",
    ];

    const rproject = useSelector((state: RootState) => state.updater);
    const dispatch = useDispatch();

    const ContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (email && projectId && router && token) {
            axios
                .post(`${server_url}/get_project`, { email, token, projectId })
                .then((r) => {
                    if (r.status == 200) {
                        console.log(r.data);
                        dispatch(update(r.data));
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
                    console.log(project);
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
        console.log(action);
        if (action.action != 0) {
            handleExportAsImage();
        }
    }, [action]);

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
        setBackgroundImageUrl("");
        project.background_images.map((v, i) => {
            if (v.is_set) {
                const typ = extname(v.image_name);
                console.log(
                    `${server_url}/ImageDb/${v.image_name.slice(
                        0,
                        -typ.length
                    )}_${v.Date}${typ}`
                );
                setBackgroundImageUrl(
                    `${server_url}/ImageDb/${v.image_name.slice(
                        0,
                        -typ.length
                    )}_${v.Date}${typ}`
                );
            }
        });
    }, [project.background_images]);

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
                    if (scalCnvs <= 1.7) {
                        setScalCnvs(scalCnvs + 0.05);
                    }
                } else if (event.key == "-" && event.ctrlKey) {
                    if (scalCnvs >= 0.8) {
                        setScalCnvs(scalCnvs - 0.05);
                    }
                }
            }
        };
        console.log(scalCnvs);
    }, [scalCnvs]);

    const parseDataToSvgReadableData = (
        data: DataObject[]
    ): SvgDataObject[] => {
        const lst: SvgDataObject[] = data.map((v, i) => {
            return {
                name: Object.keys(v)[0],
                values: Object.values(v[Object.keys(v)[0]]),
            };
        });

        return lst;
    };

    const parseDataToColumnLineData = (
        data: DataObject[]
    ): ColumnLineObject[] => {
        const lst: ColumnLineObject[] = data.map((v, i) => {
            return {
                name: Object.keys(v)[0],
                value: Number(Object.values(v[Object.keys(v)[0]])[0]),
            };
        });

        return lst;
    };

    const ParseDataToPieData = (data: DataObject[]): PieDataObject[] => {
        const dt = data[0][Object.keys(data[0])[0]];
        const lst: PieDataObject[] = Object.keys(dt).map((v, i) => {
            return {
                name: v,
                value: Number(dt[v]),
            };
        });

        return lst;
    };

    const ParseDataToLineData = (data: DataObject[]): LineDataObject[] => {
        const arr = data.map((v, i) => {
            return Object.keys(v)[0];
        });
        const internalkys = Object.keys(data[0][Object.keys(data[0])[0]]);

        return internalkys
            .map((v, i) => {
                return arr.map((x, j) => {
                    return {
                        name: v,
                        keyIndex: j + 1,
                        value: Number(
                            data[j][x as keyof object][v as keyof object]
                        ),
                    };
                });
            })
            .flat();
    };

    const ColumnGraph = () => {
        if (project && project.data && project.data[project.data_selected]) {
            d3.selectAll(".svgcntr").remove();

            const prdt = JSON.parse(project.data[project.data_selected].data);

            const data = parseDataToSvgReadableData(prdt);
            const internal_keys = Object.keys(prdt[0][Object.keys(prdt[0])[0]]);

            const width = 470 * scalCnvs;
            const height = 235 * scalCnvs;
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
                .attr("transform", `translate(${30 * scalCnvs},0)`);

            const numbers = Array.from(
                {
                    length: data[0].values.length,
                },
                (_, i) => i.toString()
            );

            var mx = 0;
            data.map((v, i) => {
                v.values.map((x, i) => {
                    mx = Math.max(mx, Number(x));
                });
            });

            const x = d3
                .scaleBand()
                .domain(new Set(data.map((v) => v.name)))
                .rangeRound([0, width])
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

            const xAxis = d3.axisBottom(x);
            const yAxis = d3.axisLeft(y);

            const sumOfChars = d3.sum(data.map((v, i) => v.name.length));
            var fontSizeForXaxis = xAxisFontSize + 0;
            setXAxisFontSize(
                Math.min(10, Math.round((width / sumOfChars) * 2) / 2)
            );
            fontSizeForXaxis = Math.min(
                10,
                Math.round((width / sumOfChars) * 2) / 2
            );

            // Add the x-axis
            const xAxisSvg = svg
                .append("g")
                .attr("class", "x-axis")
                .attr(
                    "transform",
                    `translate(0,${height - marginTop - marginBottom})`
                )
                .call(xAxis)
                .attr("font-size", `${fontSizeForXaxis}px`);

            xAxisSvg
                .select(".domain")
                .attr(
                    "stroke",
                    project.Column.border_bld != 0
                        ? project.Column.border_color
                        : "#000"
                )
                .attr("stroke-width", Math.max(1, project.Column.border_bld));

            // Add the y-axis
            svg.append("g").attr("class", "y-axis").call(yAxis);
            // --------------Axis's Labels----------------

            var axisLabelX =
                -Math.max(
                    ...data.map((v) =>
                        Math.max(
                            ...v.values.map((x) => {
                                return Number(x);
                            })
                        )
                    )
                ).toString().length *
                    7 -
                25;
            var axisLabelY = (height - marginTop - marginBottom) / 2;

            svg.append("text")
                .attr("class", "x-axis-label")
                .attr("text-anchor", "middle")
                .attr("x", width / 2) // Center the label horizontally
                .attr("y", height + 12 * scalCnvs) // Position below the axis
                .text(project.Column.axisX)
                .style("fill", project.Column.axis_txt_color)
                .attr(
                    "font-size",
                    Math.min(
                        project.Column.axis_txt_size * scalCnvs,
                        22 * scalCnvs
                    ) + "px"
                )
                .attr("font-family", "Lexend")
                .attr(
                    "font-weight",
                    project.Column.is_axis_txt_bold ? "700" : "500"
                )
                .attr(
                    "font-style",
                    project.Column.is_axis_txt_italic ? "italic" : "normal"
                );

            svg.append("g")
                .attr(
                    "transform",
                    "translate(" + axisLabelX + ", " + axisLabelY + ")"
                )
                .append("text")
                .attr("text-anchor", "middle")
                .attr("transform", "rotate(-90)")
                .text(project.Column.axisY)
                .style("fill", project.Column.axis_txt_color)
                .attr(
                    "font-size",
                    Math.min(
                        project.Column.axis_txt_size * scalCnvs,
                        22 * scalCnvs
                    ) + "px"
                )
                .attr("font-family", "Lexend")
                .attr(
                    "font-weight",
                    project.Column.is_axis_txt_bold ? "700" : "500"
                )
                .attr(
                    "font-style",
                    project.Column.is_axis_txt_italic ? "italic" : "normal"
                );

            const group = svg
                .append("g")
                .selectAll(".gropes")
                .data(data)
                .join("g")
                .attr("width", x.bandwidth())
                .attr("class", "gropes")
                .attr("transform", (d) => {
                    return `translate(${x(d.name)!},0)`;
                }); // Add class to the 'g' element
            const radius = Math.min(
                project.Column.border_radius * scalCnvs,
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
                        M ${x1(i.toString())},${y(Number(d)) + radius}
                        a${radius},${radius} 0 0 1 ${radius},${-radius}
                        h${x1.bandwidth() - 2 * radius}
                        a${radius},${radius} 0 0 1 ${radius},${radius}
                        v${
                            height -
                            marginTop -
                            marginBottom -
                            y(Number(d)) -
                            radius
                        }
                        h${-x1.bandwidth()}Z
                    `
                )
                .attr("stroke", project.Column.border_color)
                .attr("stroke-width", project.Column.border_bld)
                .attr("class", "bar") // Add class to the 'rect' element
                .attr("fill", (d, i) => colorScale(i.toString()))
                .attr("y", (d) => y(Number(d)))
                .attr(
                    "height",
                    (d) => height - marginTop - marginBottom - y(Number(d))
                );
        }
    };

    const BarsGraph = () => {
        if (project && project.data && project.data[project.data_selected]) {
            d3.selectAll(".svgcntr").remove();

            const prdt = JSON.parse(project.data[project.data_selected].data);

            const data = parseDataToSvgReadableData(prdt);

            const width = 375 * scalCnvs;
            const height = 210 * scalCnvs;
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

            const rwsvg = d3
                .select(".mncntr")
                .append("svg")
                .attr("class", "svgcntr")
                .attr("height", height)
                .attr("viewBox", [0, 0, width, height]);

            const svg = rwsvg.append("g").attr("class", "ghdr");

            // Clear any previous content in the svg
            svg.selectAll("*").remove();

            // Create a group element inside the SVG to account for margins
            const chart = svg.append("g");

            const colorScale = d3.scaleOrdinal(
                Array.from(
                    {
                        length: data[0].values.length,
                    },
                    (_, i) => i.toString()
                ),
                colorList
            );

            // Set the scales
            const x = d3
                .scaleLinear()
                .domain([
                    0,
                    Math.max(
                        ...data.map((d) =>
                            Math.max(...d.values.map((v) => Number(v)))
                        )
                    ),
                ])
                .range([0, width]);

            const y = d3
                .scaleBand()
                .domain(data.map((d) => d.name))
                .range([0, height])
                .padding(0.1);

            const y1 = d3
                .scaleBand()
                .domain(
                    Array.from(
                        {
                            length: data[0].values.length,
                        },
                        (_, i) => i.toString()
                    )
                )
                .range([0, y.bandwidth()])
                .padding(project.Bars.bar_spacing / 10);

            // Add the x-axis
            chart
                .append("g")
                .attr("transform", `translate(0,${height})`)
                .call(d3.axisBottom(x));

            // Add the y-axis
            const yAxisSvg = chart.append("g").call(d3.axisLeft(y));

            yAxisSvg
                .select(".domain")
                .attr(
                    "stroke",
                    project.Bars.border_bld != 0
                        ? project.Bars.border_color
                        : "#000"
                )
                .attr("stroke-width", Math.max(1, project.Bars.border_bld));

            // ---------------------Axis's Label---------------------
            var axisLabelX =
                -Math.max(...data.map((v) => v.name.length)) * 7 - 25;
            console.log(Math.max(...data.map((v) => v.name.length)));
            var axisLabelY = (height - marginTop - marginBottom) / 2;

            svg.append("text")
                .attr("class", "x-axis-label")
                .attr("text-anchor", "middle")
                .attr("x", width / 2) // Center the label horizontally
                .attr("y", height + 43 * scalCnvs) // Position below the axis
                .text(project.Bars.axisX)
                .style("fill", project.Bars.axis_txt_color)
                .attr(
                    "font-size",
                    Math.min(
                        project.Bars.axis_txt_size * scalCnvs,
                        22 * scalCnvs
                    ) + "px"
                )
                .attr("font-family", "Lexend")
                .attr(
                    "font-weight",
                    project.Bars.is_axis_txt_bold ? "700" : "500"
                )
                .attr(
                    "font-style",
                    project.Bars.is_axis_txt_italic ? "italic" : "normal"
                );

            svg.append("g")
                .attr(
                    "transform",
                    "translate(" + axisLabelX + ", " + axisLabelY + ")"
                )
                .append("text")
                .attr("text-anchor", "middle")
                .attr("transform", "rotate(-90)")
                .text(project.Bars.axisY)
                .style("fill", project.Bars.axis_txt_color)
                .attr(
                    "font-size",
                    Math.min(
                        project.Bars.axis_txt_size * scalCnvs,
                        22 * scalCnvs
                    ) + "px"
                )
                .attr("font-family", "Lexend")
                .attr(
                    "font-weight",
                    project.Bars.is_axis_txt_bold ? "700" : "500"
                )
                .attr(
                    "font-style",
                    project.Bars.is_axis_txt_italic ? "italic" : "normal"
                );

            // Add the bars

            const radius = Math.min(
                project.Column.border_radius * scalCnvs,
                Math.round(y1.bandwidth() / 2)
            );
            console.log(y1.bandwidth());
            chart
                .selectAll(".groupes")
                .data(data)
                .join("g")
                .attr("height", y.bandwidth())
                .attr("transform", (d) => {
                    return `translate(0,${y(d.name)!})`;
                })
                .attr("class", "gropes")
                .selectAll(".bar")
                .data((d) => d.values)
                .enter()
                .append("path")
                .attr(
                    "d",
                    (d, i) =>
                        `M 0 0
                        H ${x(Number(d)) - radius} 
                        Q ${x(Number(d))} 0, ${x(Number(d))} ${radius}
                        V ${y1.bandwidth() - radius} 
                        Q ${x(Number(d))} ${y1.bandwidth()}, ${
                            x(Number(d)) - radius
                        } ${y1.bandwidth()}
                        H 0 V 0 Z`
                )
                .attr("class", "bar")
                .attr(
                    "transform",
                    (d, i) => `translate(0,${y1(i.toString())!})`
                )
                .attr("stroke", project.Bars.border_color)
                .attr("stroke-width", project.Bars.border_bld)
                .attr("fill", (d, i) => colorScale(i.toString()));
        }
    };

    const PieGraph = () => {
        if (project && project.data && project.data[project.data_selected]) {
            d3.selectAll(".svgcntr").remove();

            const width = 400 * scalCnvs;
            const height = 227 * scalCnvs;
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
                .attr(
                    "transform",
                    `rotate(${project.Pie.start_angle},${width / 2},${
                        height / 2
                    })`
                );

            // Clear any previous content in the svg
            svg.selectAll("*").remove();

            const chart = svg
                .append("g")
                .attr("transform", `translate(${width / 2}, ${height / 2})`);

            const rawData = JSON.parse(
                project.data[project.data_selected].data
            );
            const pieData = ParseDataToPieData(rawData);

            const radius = Math.min(width, height) / 2;

            const colorScale = d3.scaleOrdinal(
                Array.from(
                    {
                        length: pieData.length,
                    },
                    (_, i) => i.toString()
                ),
                colorList
            );

            const pie = d3
                .pie<PieDataObject>()
                .value((d) => d.value)
                .sort(null);

            const arc = d3
                .arc<d3.PieArcDatum<PieDataObject>>()
                .innerRadius(0)
                .outerRadius(radius);

            const arcs = chart
                .selectAll("arc")
                .data(pie(pieData))
                .enter()
                .append("g")
                .attr("class", "arc");

            arcs.append("path")
                .attr("d", arc)
                .attr("fill", (d) => colorScale(d.index.toString()));

            const sumOfValues = d3.sum(
                pieData.map((v) => {
                    return v.value;
                })
            );

            if (project.Pie.show_percentage) {
                arcs.append("text")
                    .attr("transform", (d) => {
                        const [x, y] = arc.centroid(d);
                        return `translate(${x},${y}) rotate(${-project.Pie
                            .start_angle})`;
                    })
                    .attr("text-anchor", "middle")
                    .text((d) => {
                        return (
                            ((d.data.value / sumOfValues) * 100).toFixed() + "%"
                        );
                    })
                    .style("font-family", "Lexend")
                    .style("font-weight", "bold")
                    .style("font-size", `${11.5 * scalCnvs}px`)
                    .style("fill", "rgba(255,255,255,0.8)");
            }
        }
    };

    const DonutGraph = () => {
        if (project && project.data && project.data[project.data_selected]) {
            d3.selectAll(".svgcntr").remove();

            const width = 400 * scalCnvs;
            const height = 227 * scalCnvs;
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
                .attr(
                    "transform",
                    `rotate(${project.Donut.start_angle},${width / 2},${
                        height / 2
                    })`
                );

            // Clear any previous content in the svg
            svg.selectAll("*").remove();

            const chart = svg
                .append("g")
                .attr("transform", `translate(${width / 2}, ${height / 2})`);

            const rawData = JSON.parse(
                project.data[project.data_selected].data
            );
            const pieData = ParseDataToPieData(rawData);

            const radius = Math.min(width, height) / 2;

            const colorScale = d3.scaleOrdinal(
                Array.from(
                    {
                        length: pieData.length,
                    },
                    (_, i) => i.toString()
                ),
                colorList
            );

            const pie = d3
                .pie<PieDataObject>()
                .value((d) => d.value)
                .sort(null);

            const arc = d3
                .arc<d3.PieArcDatum<PieDataObject>>()
                .innerRadius(project.Donut.inner_radius)
                .outerRadius(radius);

            const arcs = chart
                .selectAll("arc")
                .data(pie(pieData))
                .enter()
                .append("g")
                .attr("class", "arc");

            arcs.append("path")
                .attr("d", arc)
                .attr("fill", (d) => colorScale(d.index.toString()));

            const sumOfValues = d3.sum(
                pieData.map((v) => {
                    return v.value;
                })
            );

            if (project.Donut.show_percentage) {
                arcs.append("text")
                    .attr("transform", (d) => {
                        const [x, y] = arc.centroid(d);
                        return `translate(${x},${y}) rotate(${-project.Donut
                            .start_angle})`;
                    })
                    .attr("text-anchor", "middle")
                    .text((d) => {
                        return (
                            ((d.data.value / sumOfValues) * 100).toFixed() + "%"
                        );
                    })
                    .style("font-family", "Lexend")
                    .style("font-weight", "bold")
                    .style("font-size", `${11.5 * scalCnvs}px`)
                    .style("fill", "rgba(255,255,255,0.8)");
            }
        }
    };

    const LineGraph = () => {
        if (project && project.data && project.data[project.data_selected]) {
            d3.selectAll(".svgcntr").remove();

            const data = ParseDataToLineData(
                JSON.parse(project.data[project.data_selected].data)
            );
            console.log(data);
            const width = 380 * scalCnvs;
            const height = 213 * scalCnvs;

            const svg = d3
                .select(".mncntr")
                .append("svg")
                .attr("class", "svgcntr")
                .attr("width", width + 50)
                .attr("height", height)
                .attr("viewBox", [0, 0, width, height])
                .append("g")
                .attr("class", "ghdr");

            console.log(data);
            const dt: DataObject[] = JSON.parse(
                project.data[project.data_selected].data
            );
            const KeyNames = dt.map((v, i) => {
                return Object.keys(v)[0];
            });
            // Define scales
            const x = d3
                .scaleBand()
                .domain(KeyNames) // x-axis for months
                .range([0, width]);

            const y = d3
                .scaleLinear()
                .domain([
                    d3.min(data, (d) => d.value)! -
                        Math.pow(
                            10,
                            Math.floor(d3.min(data, (d) => d.value)!).toString()
                                .length - 1
                        ),
                    d3.max(data, (d) => d.value)!,
                ]) // y-axis for value
                .nice()
                .range([height, 0]);

            const color = d3.scaleOrdinal(
                data.map((v, i) => {
                    return v.name;
                }),
                colorList
            );
            // Assign colors to names

            // Define axes
            const xAxis = d3.axisBottom(x);

            const yAxis = d3.axisLeft(y).ticks(6);

            const sumOfChars = d3.sum(KeyNames.map((v, i) => v.length));
            var fontSizeForXaxis = xAxisFontSize + 0;
            setXAxisFontSize(
                Math.min(10, Math.round((width / sumOfChars) * 2) / 2)
            );
            fontSizeForXaxis = Math.min(
                10,
                Math.round((width / sumOfChars) * 2) / 2
            );

            // Append x-axis
            svg.append("g")
                .attr("transform", `translate(0, ${height})`)
                .attr("class", "x-axis")
                .call(xAxis)
                .attr("font-size", fontSizeForXaxis + "px");

            // Append y-axis
            svg.append("g").attr("class", "y-axis").call(yAxis);
            // Group data by name
            const KeyData = d3.group(data, (d) => d.name);
            console.log(KeyData);
            // Line generator
            // Use value for y-axis
            const line = d3
                .line<LineDataObject>()
                .x((d) => x(KeyNames[d.keyIndex - 1])! + x.bandwidth() / 2) // Place line in the middle of each band
                .y((d) => y(d.value));

            project.Line.is_line_smoth && line.curve(d3.curveMonotoneX);

            // Append lines for each name
            for (const [name, brandPoints] of KeyData) {
                console.log(name, brandPoints);
                svg.append("path")
                    .datum(brandPoints)
                    .attr("fill", "none")
                    .attr("stroke", color(name)!)
                    .attr("stroke-width", project.Line.thickness)
                    .attr("d", line);

                if (project.Line.show_pointer_mark) {
                    svg.selectAll(`circle-${name.replace(" ", "_")}`)
                        .data(brandPoints)
                        .enter()
                        .append("circle")
                        .attr(
                            "cx",
                            (d) =>
                                x(KeyNames[d.keyIndex - 1])! + x.bandwidth() / 2
                        )
                        .attr("cy", (d) => y(d.value))
                        .attr("r", project.Line.thickness * 1.5)
                        .attr("fill", color(name)!);
                }
            }

            // ----------------Axis Labeling------------------
            var axisLabelX =
                (-Math.max(...data.map((v) => v.value)).toString().length * 7 -
                    25) *
                scalCnvs;
            var axisLabelY = height / 2;

            svg.append("text")
                .attr("class", "x-axis-label")
                .attr("text-anchor", "middle")
                .attr("x", width / 2) // Center the label horizontally
                .attr("y", height + 43 * scalCnvs) // Position below the axis
                .text(project.Line.axisX)
                .style("fill", project.Line.axis_txt_color)
                .attr(
                    "font-size",
                    Math.min(
                        project.Line.axis_txt_size * scalCnvs,
                        22 * scalCnvs
                    ) + "px"
                )
                .attr("font-family", "Lexend")
                .attr(
                    "font-weight",
                    project.Line.is_axis_txt_bold ? "700" : "500"
                )
                .attr(
                    "font-style",
                    project.Line.is_axis_txt_italic ? "italic" : "normal"
                );

            svg.append("g")
                .attr(
                    "transform",
                    "translate(" + axisLabelX + ", " + axisLabelY + ")"
                )
                .append("text")
                .attr("text-anchor", "middle")
                .attr("transform", "rotate(-90)")
                .text(project.Line.axisY)
                .style("fill", project.Line.axis_txt_color)
                .attr(
                    "font-size",
                    Math.min(
                        project.Line.axis_txt_size * scalCnvs,
                        22 * scalCnvs
                    ) + "px"
                )
                .attr("font-family", "Lexend")
                .attr(
                    "font-weight",
                    project.Line.is_axis_txt_bold ? "700" : "500"
                )
                .attr(
                    "font-style",
                    project.Line.is_axis_txt_italic ? "italic" : "normal"
                );
        }
    };

    const AreaGraph = () => {
        if (project && project.data && project.data[project.data_selected]) {
            d3.selectAll(".svgcntr").remove();

            const data = ParseDataToLineData(
                JSON.parse(project.data[project.data_selected].data)
            );
            console.log(data);
            const width = 460 * scalCnvs;
            const height = 213 * scalCnvs;

            const svg = d3
                .select(".mncntr")
                .append("svg")
                .attr("class", "svgcntr")
                .attr("width", width + 50)
                .attr("height", height)
                .attr("viewBox", [0, 0, width, height])
                .append("g")
                .attr("class", "ghdr");

            console.log(data);
            const dt: DataObject[] = JSON.parse(
                project.data[project.data_selected].data
            );
            const KeyNames = dt.map((v, i) => {
                return Object.keys(v)[0];
            });
            // Define scales
            console.log(KeyNames);

            const x = d3
                .scaleBand()
                .domain(KeyNames) // x-axis for months
                .range([0, width]);

            const y = d3
                .scaleLinear()
                .domain([0, d3.max(data, (d) => d.value)!]) // y-axis for value
                .nice()
                .range([height - project.Area.thickness * 0.5, 0]);

            const color = d3.scaleOrdinal(
                data.map((v, i) => {
                    return v.name;
                }),
                colorList
            );
            // Assign colors to names

            // Define axes
            const xAxis = d3.axisBottom(x).ticks(6);

            const yAxis = d3.axisLeft(y).ticks(6);

            const sumOfChars = d3.sum(KeyNames.map((v, i) => v.length));
            var fontSizeForXaxis = xAxisFontSize + 0;
            setXAxisFontSize(
                Math.min(10, Math.round((width / sumOfChars) * 2) / 2)
            );
            fontSizeForXaxis = Math.min(
                10,
                Math.round((width / sumOfChars) * 2) / 2
            );

            // Append x-axis
            svg.append("g")
                .attr("transform", `translate(0, ${height})`)
                .attr("class", "x-axis")
                .call(xAxis)
                .attr("font-size", fontSizeForXaxis + "px");

            // Append y-axis
            svg.append("g").attr("class", "y-axis").call(yAxis);
            // Group data by name
            const KeyData = d3.group(data, (d) => d.name);

            // Line generator
            // Use value for y-axis
            const area = d3
                .area<LineDataObject>()
                .x((d) => x(KeyNames[d.keyIndex - 1])! + x.bandwidth() / 2) // Place line in the middle of each band
                .y0(y(0))
                .y1((d) => y(d.value));

            project.Area.is_line_smoth && area.curve(d3.curveMonotoneX);

            // Append lines for each name
            KeyData.forEach((values, name) => {
                svg.append("path")
                    .datum(values)
                    .attr("fill", () => {
                        const clr = color(name);
                        const clrs = d3.color(clr)?.brighter(0.5);
                        return clrs ? clrs.toString() : "";
                    })
                    .attr("stroke", color(name))
                    .attr("stroke-width", project.Area.thickness)
                    .attr("d", area);

                if (project.Area.show_pointer_mark) {
                    svg.selectAll(`circle-${name.replace(" ", "_")}`)
                        .data(values)
                        .enter()
                        .append("circle")
                        .attr(
                            "cx",
                            (d) =>
                                x(KeyNames[d.keyIndex - 1])! + x.bandwidth() / 2
                        )
                        .attr("cy", (d) => y(d.value))
                        .attr("r", project.Area.thickness * 1.25)
                        .attr("fill", color(name));
                }
            });

            // ----------------Axis Labeling------------------
            var axisLabelX =
                (-Math.max(...data.map((v) => v.value)).toString().length * 7 -
                    25) *
                scalCnvs;
            var axisLabelY = height / 2;

            svg.append("text")
                .attr("class", "x-axis-label")
                .attr("text-anchor", "middle")
                .attr("x", width / 2) // Center the label horizontally
                .attr("y", height + 43 * scalCnvs) // Position below the axis
                .text(project.Area.axisX)
                .style("fill", project.Area.axis_txt_color)
                .attr(
                    "font-size",
                    Math.min(
                        project.Area.axis_txt_size * scalCnvs,
                        22 * scalCnvs
                    ) + "px"
                )
                .attr("font-family", "Lexend")
                .attr(
                    "font-weight",
                    project.Area.is_axis_txt_bold ? "700" : "500"
                )
                .attr(
                    "font-style",
                    project.Area.is_axis_txt_italic ? "italic" : "normal"
                );

            svg.append("g")
                .attr(
                    "transform",
                    "translate(" + axisLabelX + ", " + axisLabelY + ")"
                )
                .append("text")
                .attr("text-anchor", "middle")
                .attr("transform", "rotate(-90)")
                .text(project.Area.axisY)
                .style("fill", project.Area.axis_txt_color)
                .attr(
                    "font-size",
                    Math.min(
                        project.Area.axis_txt_size * scalCnvs,
                        22 * scalCnvs
                    ) + "px"
                )
                .attr("font-family", "Lexend")
                .attr(
                    "font-weight",
                    project.Area.is_axis_txt_bold ? "700" : "500"
                )
                .attr(
                    "font-style",
                    project.Area.is_axis_txt_italic ? "italic" : "normal"
                );
        }
    };

    const ColumnLineGraph = () => {
        if (project && project.data && project.data[project.data_selected]) {
            d3.selectAll(".svgcntr").remove();

            const prdt = JSON.parse(project.data[project.data_selected].data);

            const data = parseDataToColumnLineData(prdt);
            const internal_keys = Object.keys(prdt[0][Object.keys(prdt[0])[0]]);

            const width = 450 * scalCnvs;
            const height = 235 * scalCnvs;
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
                .attr("transform", `translate(${30 * scalCnvs},0)`);

            const numbers = ["0"];

            var mx = Math.max(...data.map((v) => v.value));
            console.log(data);

            const x = d3
                .scaleBand()
                .domain(new Set(data.map((v) => v.name)))
                .rangeRound([0, width])
                .padding(project.Column_Line.b_bar_spacing / 10);

            const y = d3
                .scaleLinear()
                .domain([0, mx])
                .range([height - marginTop - marginBottom, 0]);

            const colorScale = d3.scaleOrdinal(numbers, colorList);

            const xAxis = d3.axisBottom(x);
            const yAxis = d3.axisLeft(y);

            const sumOfChars = d3.sum(data.map((v, i) => v.name.length));
            var fontSizeForXaxis = xAxisFontSize + 0;
            setXAxisFontSize(
                Math.min(10, Math.round((width / sumOfChars) * 2) / 2)
            );
            fontSizeForXaxis = Math.min(
                10,
                Math.round((width / sumOfChars) * 2) / 2
            );

            // Add the x-axis
            const xAxisSvg = svg
                .append("g")
                .attr("class", "x-axis")
                .attr(
                    "transform",
                    `translate(0,${height - marginTop - marginBottom})`
                )
                .call(xAxis)
                .attr("font-size", fontSizeForXaxis + "px");

            xAxisSvg
                .select(".domain")
                .attr(
                    "stroke",
                    project.Column_Line.b_border_bld != 0
                        ? project.Column_Line.b_border_color
                        : "#000"
                )
                .attr(
                    "stroke-width",
                    Math.max(1, project.Column_Line.b_border_bld)
                );

            // Add the y-axis
            svg.append("g").attr("class", "y-axis").call(yAxis);
            // --------------Axis's Labels----------------

            var axisLabelX = -mx.toString().length * 7 - 25;
            var axisLabelY = (height - marginTop - marginBottom) / 2;

            svg.append("text")
                .attr("class", "x-axis-label")
                .attr("text-anchor", "middle")
                .attr("x", width / 2) // Center the label horizontally
                .attr("y", height + 12 * scalCnvs) // Position below the axis
                .text(project.Column_Line.axisX)
                .style("fill", project.Column_Line.axis_txt_color)
                .attr(
                    "font-size",
                    Math.min(
                        project.Column_Line.axis_txt_size * scalCnvs,
                        22 * scalCnvs
                    ) + "px"
                )
                .attr("font-family", "Lexend")
                .attr(
                    "font-weight",
                    project.Column_Line.is_axis_txt_bold ? "700" : "500"
                )
                .attr(
                    "font-style",
                    project.Column_Line.is_axis_txt_italic ? "italic" : "normal"
                );

            svg.append("g")
                .attr(
                    "transform",
                    "translate(" + axisLabelX + ", " + axisLabelY + ")"
                )
                .append("text")
                .attr("text-anchor", "middle")
                .attr("transform", "rotate(-90)")
                .text(project.Column_Line.axisY)
                .style("fill", project.Column_Line.axis_txt_color)
                .attr(
                    "font-size",
                    Math.min(
                        project.Column_Line.axis_txt_size * scalCnvs,
                        22 * scalCnvs
                    ) + "px"
                )
                .attr("font-family", "Lexend")
                .attr(
                    "font-weight",
                    project.Column_Line.is_axis_txt_bold ? "700" : "500"
                )
                .attr(
                    "font-style",
                    project.Column_Line.is_axis_txt_italic ? "italic" : "normal"
                );

            const radius = Math.min(
                project.Column_Line.b_border_radius * scalCnvs,
                Math.round(x.bandwidth() / 2)
            );

            svg.append("g")
                .selectAll(".bar")
                .data(data)
                .enter()
                .append("path") // Use 'rect' instead of 'react'
                .attr(
                    "d",
                    (d, i) => `
                        M ${x(d.name)},${y(Number(d.value.toString())) + radius}
                        a${radius},${radius} 0 0 1 ${radius},${-radius}
                        h${x.bandwidth() - 2 * radius}
                        a${radius},${radius} 0 0 1 ${radius},${radius}
                        v${
                            height -
                            marginTop -
                            marginBottom -
                            y(Number(d.value.toString())) -
                            radius
                        }
                        h${-x.bandwidth()}Z
                    `
                )
                .attr("stroke", project.Column_Line.b_border_color)
                .attr("stroke-width", project.Column_Line.b_border_bld)
                .attr("class", "bar") // Add class to the 'rect' element
                .attr("fill", colorList[0])
                .attr("y", (d) => y(Number(d.value.toString())))
                .attr(
                    "height",
                    (d) => height - marginTop - marginBottom - y(d.value)
                ); // Add class to the 'g' element

            const line = d3
                .line<ColumnLineObject>()
                .x((d) => x(d.name)! + x.bandwidth() / 2) // Place line in the middle of each band
                .y((d) => y(d.value));

            project.Column_Line.l_is_line_smoth &&
                line.curve(d3.curveMonotoneX);

            // Append lines for each name
            svg.append("path")
                .datum(data)
                .attr("fill", "none")
                .attr("stroke", () => {
                    const clr = colorList[0];
                    const clrs = d3.color(clr)?.brighter(1.5);
                    return clrs ? clrs.toString() : "";
                })
                .attr("stroke-width", project.Column_Line.l_thickness)
                .attr("d", line);

            if (project.Column_Line.l_show_pointer_mark) {
                svg.selectAll(`circle`)
                    .data(data)
                    .enter()
                    .append("circle")
                    .attr("cx", (d) => x(d.name)! + x.bandwidth() / 2)
                    .attr("cy", (d) => y(d.value))
                    .attr("r", project.Column_Line.l_thickness * 1.5)
                    .attr("fill", () => {
                        const clr = colorList[0];
                        const clrs = d3.color(clr)?.brighter(0.75);
                        return clrs ? clrs.toString() : "";
                    });
            }
        }
    };

    const ColumnAreaGraph = () => {
        if (project && project.data && project.data[project.data_selected]) {
            d3.selectAll(".svgcntr").remove();

            const prdt = JSON.parse(project.data[project.data_selected].data);

            const data = parseDataToColumnLineData(prdt);
            const internal_keys = Object.keys(prdt[0][Object.keys(prdt[0])[0]]);

            const width = 450 * scalCnvs;
            const height = 235 * scalCnvs;
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
                .attr("transform", `translate(${30 * scalCnvs},0)`);

            const numbers = ["0"];

            var mx = Math.max(...data.map((v) => v.value));
            console.log(data);

            const x = d3
                .scaleBand()
                .domain(new Set(data.map((v) => v.name)))
                .rangeRound([0, width])
                .padding(project.Column_Area.b_bar_spacing / 10);

            const y = d3
                .scaleLinear()
                .domain([0, mx])
                .range([height - marginTop - marginBottom, 0]);

            const ay = d3
                .scaleLinear()
                .domain([0, mx])
                .range([height - marginTop - marginBottom, 0]);

            const xAxis = d3.axisBottom(x);
            const yAxis = d3.axisLeft(y);

            const sumOfChars = d3.sum(data.map((v, i) => v.name.length));
            var fontSizeForXaxis = xAxisFontSize + 0;
            setXAxisFontSize(
                Math.min(10, Math.round((width / sumOfChars) * 2) / 2)
            );
            fontSizeForXaxis = Math.min(
                10,
                Math.round((width / sumOfChars) * 2) / 2
            );

            // Add the x-axis
            const xAxisSvg = svg
                .append("g")
                .attr("class", "x-axis")
                .attr(
                    "transform",
                    `translate(0,${height - marginTop - marginBottom})`
                )
                .call(xAxis)
                .attr("font-size", fontSizeForXaxis + "px");

            xAxisSvg
                .select(".domain")
                .attr(
                    "stroke",
                    project.Column_Area.b_border_bld != 0
                        ? project.Column_Area.b_border_color
                        : "#000"
                )
                .attr(
                    "stroke-width",
                    Math.max(1, project.Column_Area.b_border_bld)
                );

            const area = d3
                .area<ColumnLineObject>()
                .x((d) => x(d.name)! + x.bandwidth() / 2) // Place line in the middle of each band
                .y0(height - marginTop - marginBottom)
                .y1((d) => ay(d.value));

            project.Column_Area.a_is_line_smoth &&
                area.curve(d3.curveMonotoneX);

            // Append lines for each name
            svg.append("path")
                .datum(data)
                .attr("fill", () => {
                    const clr = colorList[0];
                    const clrs = d3.color(clr)?.brighter(1.5);
                    return clrs ? clrs.toString() : "";
                })
                .attr("stroke", () => {
                    const clr = colorList[0];
                    const clrs = d3.color(clr)?.brighter(1.25);
                    return clrs ? clrs.toString() : "";
                })
                .attr("stroke-width", project.Column_Area.a_thickness)
                .attr("d", area);

            // Add the y-axis
            svg.append("g").attr("class", "y-axis").call(yAxis);
            // --------------Axis's Labels----------------

            var axisLabelX = -mx.toString().length * 7 - 25;
            var axisLabelY = (height - marginTop - marginBottom) / 2;

            svg.append("text")
                .attr("class", "x-axis-label")
                .attr("text-anchor", "middle")
                .attr("x", width / 2) // Center the label horizontally
                .attr("y", height + 12 * scalCnvs) // Position below the axis
                .text(project.Column_Area.axisX)
                .style("fill", project.Column_Area.axis_txt_color)
                .attr(
                    "font-size",
                    Math.min(
                        project.Column_Area.axis_txt_size * scalCnvs,
                        22 * scalCnvs
                    ) + "px"
                )
                .attr("font-family", "Lexend")
                .attr(
                    "font-weight",
                    project.Column_Area.is_axis_txt_bold ? "700" : "500"
                )
                .attr(
                    "font-style",
                    project.Column_Area.is_axis_txt_italic ? "italic" : "normal"
                );

            svg.append("g")
                .attr(
                    "transform",
                    "translate(" + axisLabelX + ", " + axisLabelY + ")"
                )
                .append("text")
                .attr("text-anchor", "middle")
                .attr("transform", "rotate(-90)")
                .text(project.Column_Area.axisY)
                .style("fill", project.Column_Area.axis_txt_color)
                .attr(
                    "font-size",
                    Math.min(
                        project.Column_Area.axis_txt_size * scalCnvs,
                        22 * scalCnvs
                    ) + "px"
                )
                .attr("font-family", "Lexend")
                .attr(
                    "font-weight",
                    project.Column_Area.is_axis_txt_bold ? "700" : "500"
                )
                .attr(
                    "font-style",
                    project.Column_Area.is_axis_txt_italic ? "italic" : "normal"
                );

            const radius = Math.min(
                project.Column_Area.b_border_radius * scalCnvs,
                Math.round(x.bandwidth() / 2)
            );

            svg.append("g")
                .selectAll(".bar")
                .data(data)
                .enter()
                .append("path") // Use 'rect' instead of 'react'
                .attr(
                    "d",
                    (d, i) => `
                        M ${x(d.name)},${y(Number(d.value.toString())) + radius}
                        a${radius},${radius} 0 0 1 ${radius},${-radius}
                        h${x.bandwidth() - 2 * radius}
                        a${radius},${radius} 0 0 1 ${radius},${radius}
                        v${
                            height -
                            marginTop -
                            marginBottom -
                            y(Number(d.value.toString())) -
                            radius
                        }
                        h${-x.bandwidth()}Z
                    `
                )
                .attr("stroke", project.Column_Area.b_border_color)
                .attr("stroke-width", project.Column_Area.b_border_bld)
                .attr("class", "bar") // Add class to the 'rect' element
                .attr("fill", colorList[0])
                .attr("y", (d) => y(Number(d.value.toString())))
                .attr(
                    "height",
                    (d) => height - marginTop - marginBottom - y(d.value)
                ); // Add class to the 'g' element

            if (project.Column_Area.a_show_pointer_mark) {
                svg.selectAll(`circle`)
                    .data(data)
                    .enter()
                    .append("circle")
                    .attr("cx", (d) => x(d.name)! + x.bandwidth() / 2)
                    .attr("cy", (d) => ay(d.value))
                    .attr("r", project.Column_Area.a_thickness * 1.5)
                    .attr("fill", () => {
                        const clr = colorList[0];
                        const clrs = d3.color(clr)?.brighter(0.75).rgb();
                        return clrs
                            ? `rgba(${clrs.r},${clrs.g},${clrs.b},0.75)`
                            : "";
                    });
            }
        }
    };

    useEffect(() => {
        console.log(project.graph_selected);
        if (project.data[project.data_selected]) {
            console.log(
                ParseDataToLineData(
                    JSON.parse(project.data[project.data_selected].data)
                )
            );

            const prdt = JSON.parse(project.data[project.data_selected].data);
            setInternalKeys(Object.keys(prdt[0][Object.keys(prdt[0])[0]]));
        }
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

    function slctdLgnd(): LegendObject {
        var lgnd: LegendObject = {
            size: 0,
            color: "",
            style: "",
            weight: "",
        };
        console.log(scalCnvs, project.Bars.legend_size, project.graph_selected);
        switch (project.graph_selected) {
            case 0:
                lgnd.size = Math.min(project.Column.legend_size, 20) * scalCnvs;
                lgnd.color = project.Column.legend_color;
                lgnd.style = project.Column.is_legend_italic
                    ? "italic"
                    : "normal";
                lgnd.weight = project.Column.is_legend_bold ? "bold" : "400";
                break;
            case 1:
                lgnd.size = Math.min(project.Bars.legend_size, 20) * scalCnvs;
                lgnd.color = project.Bars.legend_color;
                lgnd.style = project.Bars.is_legend_italic
                    ? "italic"
                    : "normal";
                lgnd.weight = project.Bars.is_legend_bold ? "bold" : "normal";
                break;
            case 2:
                lgnd.size = Math.min(project.Pie.legend_size, 20) * scalCnvs;
                lgnd.color = project.Pie.legend_color;
                lgnd.style = project.Pie.is_legend_italic ? "italic" : "normal";
                lgnd.weight = project.Pie.is_legend_bold ? "bold" : "normal";
                break;
            case 3:
                lgnd.size = Math.min(project.Donut.legend_size, 20) * scalCnvs;
                lgnd.color = project.Donut.legend_color;
                lgnd.style = project.Donut.is_legend_italic
                    ? "italic"
                    : "normal";
                lgnd.weight = project.Donut.is_legend_bold ? "bold" : "normal";
                break;
            case 4:
                lgnd.size = Math.min(project.Line.legend_size, 20) * scalCnvs;
                lgnd.color = project.Line.legend_color;
                lgnd.style = project.Line.is_legend_italic
                    ? "italic"
                    : "normal";
                lgnd.weight = project.Line.is_legend_bold ? "bold" : "normal";
                break;
            case 5:
                lgnd.size = Math.min(project.Area.legend_size, 20) * scalCnvs;
                lgnd.color = project.Area.legend_color;
                lgnd.style = project.Area.is_legend_italic
                    ? "italic"
                    : "normal";
                lgnd.weight = project.Area.is_legend_bold ? "bold" : "normal";
                break;
            case 6:
                lgnd.size =
                    Math.min(project.Column_Line.legend_size, 20) * scalCnvs;
                lgnd.color = project.Column_Line.legend_color;
                lgnd.style = project.Column_Line.is_legend_italic
                    ? "italic"
                    : "normal";
                lgnd.weight = project.Column_Line.is_legend_bold
                    ? "bold"
                    : "normal";
                break;
            case 7:
                lgnd.size =
                    Math.min(project.Column_Area.legend_size, 20) * scalCnvs;
                lgnd.color = project.Column_Area.legend_color;
                lgnd.style = project.Column_Area.is_legend_italic
                    ? "italic"
                    : "normal";
                lgnd.weight = project.Column_Area.is_legend_bold
                    ? "bold"
                    : "normal";
                break;
        }
        return lgnd;
    }

    const handleExportAsImage = () => {
        const element = ContainerRef.current;
        console.log("fsd", element);

        if (element) {
            html2canvas(element).then((canvas) => {
                const image = canvas.toDataURL("image/png");
                const link = document.createElement("a");
                link.href = image;
                link.download = `${project.title.replace(" ", "_")}.png`;
                link.click();
            });
        }
    };

    useEffect(() => {
        console.log(backgroundImageUrl);
    }, [backgroundImageUrl]);

    return (
        <div className="tbd">
            <div className="hdrnv">
                <ProjectHeader />
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
                        backgroundColor: project.background_color,
                        height: 450 * scalCnvs,
                        width: 800 * scalCnvs,
                        backgroundImage: `url("${backgroundImageUrl}")`,
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
                    ref={ContainerRef}
                    className="mncntr"
                >
                    <input
                        id="projectTitle"
                        type="text"
                        maxLength={46}
                        onChange={(e) => {
                            dispatch(
                                update({ ...project, title: e.target.value })
                            );
                        }}
                        value={project.title}
                        style={{ order: "1", fontSize: `${25 * scalCnvs}px` }}
                    />
                    <div
                        style={{
                            width: `${600 * scalCnvs}px`,
                            marginTop: `${10 * scalCnvs}px`,
                        }}
                        className="lgndcntr"
                    >
                        {internalKeys.map((v, i) => {
                            return (
                                <div
                                    style={{
                                        margin: `${10 * scalCnvs}px`,
                                        marginTop: `${7 * scalCnvs}px`,
                                        marginBottom: `${3 * scalCnvs}px`,
                                    }}
                                    key={i}
                                    className="grplgnd"
                                >
                                    <div
                                        style={{
                                            width: `${
                                                ((slctdLgnd().size * 2) / 3) *
                                                scalCnvs
                                            }px`,
                                            height: `${
                                                ((slctdLgnd().size * 2) / 3) *
                                                scalCnvs
                                            }px`,
                                            marginRight: `${5 * scalCnvs}px`,
                                            backgroundColor:
                                                colorList[i % colorList.length],
                                        }}
                                        className="rectlegend"
                                    ></div>
                                    <p
                                        style={{
                                            color: slctdLgnd().color,
                                            fontWeight: slctdLgnd().weight,
                                            fontStyle: slctdLgnd().style,
                                            fontSize: `${slctdLgnd().size}px`,
                                        }}
                                    >
                                        {v}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Project;
