"use client";
import { RootState } from "@/store/reduxStore";
import { update } from "@/store/slices/projectManger";
import React, { useState } from "react";
import { FaBorderTopLeft } from "react-icons/fa6";
import { IoMdColorFill } from "react-icons/io";
import { RiFontSize2 } from "react-icons/ri";
import { RxColumnSpacing } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";

function EditGraphsSection(params: { show: boolean }) {
    const project = useSelector((state: RootState) => state.updater);
    const dispatch = useDispatch();

    const [isPoint, setisPoint] = useState(false);

    const ColumnPart = () => {
        return (
            <div className="clmn_prt">
                <h1
                    style={{
                        fontFamily: "Lexend",
                        marginLeft: 0,
                        fontWeight: 550,
                        marginTop: "10px",
                    }}
                >
                    Column
                </h1>
                <label>Bar Spacing</label>
                <div className="inpt_rng_cntr">
                    <p>1</p>
                    <input
                        type="range"
                        min={1}
                        max={5}
                        step={0.1}
                        title={project.Column.bar_spacing.toString()}
                        onChange={(e) => {
                            dispatch(
                                update({
                                    ...project,
                                    Column: {
                                        ...project.Column,
                                        bar_spacing: parseFloat(e.target.value),
                                    },
                                })
                            );
                        }}
                        value={project?.Column.bar_spacing}
                    />
                    <p>5</p>
                </div>
                <label>Border</label>
                <div className="cntredtprt">
                    <FaBorderTopLeft />
                    <input
                        title="border radius"
                        onChange={(e) => {
                            if (
                                parseInt(e.target.value) <= 24 ||
                                e.target.value == ""
                            ) {
                                if (project && e.target.value != "") {
                                    dispatch(
                                        update({
                                            ...project,
                                            Column: {
                                                ...project.Column,
                                                border_radius: parseInt(
                                                    e.target.value
                                                ),
                                            },
                                        })
                                    );
                                } else if (project && e.target.value == "") {
                                    dispatch(
                                        update({
                                            ...project,
                                            Column: {
                                                ...project.Column,
                                                border_radius: 0,
                                            },
                                        })
                                    );
                                }
                            }
                        }}
                        max={10}
                        value={project?.Column.border_radius}
                    />
                    <p id="icon_thickness">T</p>
                    <input
                        title="border thickness"
                        onChange={(e) => {
                            if (
                                parseInt(e.target.value) <= 24 ||
                                e.target.value == ""
                            ) {
                                if (project && e.target.value != "") {
                                    dispatch(
                                        update({
                                            ...project,
                                            Column: {
                                                ...project.Column,
                                                border_bld: parseInt(
                                                    e.target.value
                                                ),
                                            },
                                        })
                                    );
                                } else if (project && e.target.value == "") {
                                    dispatch(
                                        update({
                                            ...project,
                                            Column: {
                                                ...project.Column,
                                                border_bld: 0,
                                            },
                                        })
                                    );
                                }
                            }
                        }}
                        value={project?.Column.border_bld}
                    />

                    <div className="clr_cntr">
                        <label htmlFor="inptclrgrph">
                            <IoMdColorFill />
                        </label>
                        <input
                            id="inptclrgrph"
                            value={project?.Column.border_color}
                            type="color"
                            onChange={(e) => {
                                const color = e.target.value;
                                if (project) {
                                    dispatch(
                                        update({
                                            ...project,
                                            Column: {
                                                ...project.Column,
                                                border_color: color,
                                            },
                                        })
                                    );
                                }
                            }}
                        />
                    </div>
                </div>
                <label>Legend</label>
                <div className="cntredtprt">
                    <RiFontSize2 />
                    <input
                        title="legend size"
                        onChange={(e) => {
                            if (
                                parseInt(e.target.value) <= 24 ||
                                e.target.value == ""
                            ) {
                                if (project && e.target.value != "") {
                                    dispatch(
                                        update({
                                            ...project,
                                            Column: {
                                                ...project.Column,
                                                legend_size: parseInt(
                                                    e.target.value
                                                ),
                                            },
                                        })
                                    );
                                } else if (project && e.target.value == "") {
                                    dispatch(
                                        update({
                                            ...project,
                                            Column: {
                                                ...project.Column,
                                                legend_size: 0,
                                            },
                                        })
                                    );
                                }
                            }
                        }}
                        value={project?.Column.legend_size}
                    />
                    <div
                        onClick={() => {
                            if (project) {
                                dispatch(
                                    update({
                                        ...project,
                                        Column: {
                                            ...project.Column,
                                            is_legend_italic:
                                                !project.Column
                                                    .is_legend_italic,
                                        },
                                    })
                                );
                            }
                        }}
                        style={{
                            color: project?.Column.is_legend_italic
                                ? "white"
                                : "rgba(0,0,0,0.7)",
                            fontStyle: project?.Column.is_legend_italic
                                ? "italic"
                                : "italic",
                            backgroundColor: project?.Column.is_legend_italic
                                ? "#6991D1"
                                : "rgba(216, 216, 216, 0.16)",
                        }}
                        className="isItalic"
                    >
                        I
                    </div>
                    <div
                        onClick={() => {
                            if (project) {
                                dispatch(
                                    update({
                                        ...project,
                                        Column: {
                                            ...project.Column,
                                            is_legend_bold:
                                                !project.Column.is_legend_bold,
                                        },
                                    })
                                );
                            }
                        }}
                        style={{
                            color: project?.Column.is_legend_bold
                                ? "white"
                                : "rgba(0,0,0,0.7)",

                            fontWeight: project?.Column.is_legend_bold
                                ? "bold"
                                : "bold",
                            backgroundColor: project?.Column.is_legend_bold
                                ? "#6991D1"
                                : "rgba(216, 216, 216, 0.16)",
                        }}
                        className="isBold"
                    >
                        B
                    </div>

                    <div className="clr_cntr">
                        <label htmlFor="inptclrgrph">
                            <IoMdColorFill />
                        </label>
                        <input
                            id="inptclrgrph"
                            value={project?.Column.legend_color}
                            type="color"
                            onChange={(e) => {
                                const color = e.target.value;
                                if (project) {
                                    dispatch(
                                        update({
                                            ...project,
                                            Column: {
                                                ...project.Column,
                                                legend_color: color,
                                            },
                                        })
                                    );
                                }
                            }}
                        />
                    </div>
                </div>
                <label>Axis</label>
                <div className="cntredtprt">
                    <RiFontSize2 />
                    <input
                        title="axis text size"
                        onChange={(e) => {
                            if (
                                parseInt(e.target.value) <= 32 ||
                                e.target.value == ""
                            ) {
                                if (project && e.target.value != "") {
                                    dispatch(
                                        update({
                                            ...project,
                                            Column: {
                                                ...project.Column,
                                                axis_txt_size: parseInt(
                                                    e.target.value
                                                ),
                                            },
                                        })
                                    );
                                } else if (project && e.target.value == "") {
                                    dispatch(
                                        update({
                                            ...project,
                                            Column: {
                                                ...project.Column,
                                                axis_txt_size: 0,
                                            },
                                        })
                                    );
                                }
                            }
                        }}
                        value={project?.Column.axis_txt_size}
                    />
                    <div
                        onClick={() => {
                            if (project) {
                                dispatch(
                                    update({
                                        ...project,
                                        Column: {
                                            ...project.Column,
                                            is_axis_txt_italic:
                                                !project.Column
                                                    .is_axis_txt_italic,
                                        },
                                    })
                                );
                            }
                        }}
                        style={{
                            color: project?.Column.is_axis_txt_italic
                                ? "white"
                                : "rgba(0,0,0,0.7)",

                            fontStyle: project?.Column.is_axis_txt_italic
                                ? "italic"
                                : "italic",
                            backgroundColor: project?.Column.is_axis_txt_italic
                                ? "#6991D1"
                                : "rgba(216, 216, 216, 0.16)",
                        }}
                        className="isItalic"
                    >
                        I
                    </div>
                    <div
                        onClick={() => {
                            if (project) {
                                dispatch(
                                    update({
                                        ...project,
                                        Column: {
                                            ...project.Column,
                                            is_axis_txt_bold:
                                                !project.Column
                                                    .is_axis_txt_bold,
                                        },
                                    })
                                );
                            }
                        }}
                        style={{
                            color: project?.Column.is_axis_txt_bold
                                ? "white"
                                : "rgba(0,0,0,0.7)",

                            fontWeight: project?.Column.is_axis_txt_bold
                                ? "bold"
                                : "bold",
                            backgroundColor: project?.Column.is_axis_txt_bold
                                ? "#6991D1"
                                : "rgba(216, 216, 216, 0.16)",
                        }}
                        className="isBold"
                    >
                        B
                    </div>

                    <div className="clr_cntr">
                        <label htmlFor="inptclrgrph">
                            <IoMdColorFill />
                        </label>
                        <input
                            id="inptclrgrph"
                            value={project?.Column.axis_txt_color}
                            type="color"
                            onChange={(e) => {
                                const color = e.target.value;
                                if (project) {
                                    dispatch(
                                        update({
                                            ...project,
                                            Column: {
                                                ...project.Column,
                                                axis_txt_color: color,
                                            },
                                        })
                                    );
                                }
                            }}
                        />
                    </div>
                </div>
                <div className="aixs_text">
                    <div>
                        <label>Axis X</label>
                        <input
                            title="axis X text"
                            onChange={(e) => {
                                if (project) {
                                    console.log(e.target.value);
                                    dispatch(
                                        update({
                                            ...project,
                                            Column: {
                                                ...project.Column,
                                                axisX: e.target.value,
                                            },
                                        })
                                    );
                                }
                            }}
                            value={project?.Column.axisX}
                            type="text"
                            placeholder="Default"
                        />
                    </div>
                    <div>
                        <label>Axis Y</label>
                        <input
                            title="axis Y text"
                            onChange={(e) => {
                                if (project) {
                                    dispatch(
                                        update({
                                            ...project,
                                            Column: {
                                                ...project.Column,
                                                axisY: e.target.value,
                                            },
                                        })
                                    );
                                }
                            }}
                            value={project?.Column.axisY}
                            type="text"
                            placeholder="Default"
                        />
                    </div>
                </div>
            </div>
        );
    };

    const BarsPart = () => {
        return (
            <div className="clmn_prt">
                <h1
                    style={{
                        fontFamily: "Lexend",
                        marginLeft: 0,
                        fontWeight: 550,
                        marginTop: "10px",
                    }}
                >
                    Bars
                </h1>
                <label>Bar Spacing</label>
                <div className="cntredtprt">
                    <RxColumnSpacing />
                    <input
                        max={10}
                        onChange={(e) => {
                            if (
                                parseInt(e.target.value) <= 24 ||
                                e.target.value == ""
                            ) {
                                if (
                                    e.target.value.at(
                                        e.target.value.length - 1
                                    ) == "." &&
                                    !`${project?.Bars.bar_spacing}`.includes(
                                        "."
                                    )
                                ) {
                                    console.log("ha");
                                    setisPoint(true);
                                } else if (project && e.target.value != "") {
                                    const inputValue = isPoint
                                        ? e.target.value.slice(
                                              0,
                                              e.target.value.length - 1
                                          ) +
                                          "." +
                                          e.target.value.charAt(
                                              e.target.value.length - 1
                                          )
                                        : e.target.value;
                                    console.log(isPoint, inputValue);
                                    setisPoint(false);
                                    dispatch(
                                        update({
                                            ...project,
                                            Bars: {
                                                ...project.Bars,
                                                bar_spacing:
                                                    parseFloat(inputValue),
                                            },
                                        })
                                    );
                                } else if (e.target.value == "" && project) {
                                    dispatch(
                                        update({
                                            ...project,
                                            Bars: {
                                                ...project.Bars,
                                                bar_spacing: 0,
                                            },
                                        })
                                    );
                                }
                            }
                        }}
                        value={project?.Bars.bar_spacing}
                    />
                </div>
                <label>Border</label>
                <div className="cntredtprt">
                    <FaBorderTopLeft />
                    <input
                        title="border radius"
                        onChange={(e) => {
                            if (
                                parseInt(e.target.value) <= 24 ||
                                e.target.value == ""
                            ) {
                                if (project && e.target.value != "") {
                                    dispatch(
                                        update({
                                            ...project,
                                            Bars: {
                                                ...project.Bars,
                                                border_radius: parseInt(
                                                    e.target.value
                                                ),
                                            },
                                        })
                                    );
                                } else if (project && e.target.value == "") {
                                    dispatch(
                                        update({
                                            ...project,
                                            Bars: {
                                                ...project.Bars,
                                                border_radius: 0,
                                            },
                                        })
                                    );
                                }
                            }
                        }}
                        max={10}
                        value={project?.Bars.border_radius}
                    />
                    <p id="icon_thickness">T</p>
                    <input
                        title="border thickness"
                        onChange={(e) => {
                            if (
                                parseInt(e.target.value) <= 24 ||
                                e.target.value == ""
                            ) {
                                if (project && e.target.value != "") {
                                    dispatch(
                                        update({
                                            ...project,
                                            Bars: {
                                                ...project.Bars,
                                                border_bld: parseInt(
                                                    e.target.value
                                                ),
                                            },
                                        })
                                    );
                                } else if (project && e.target.value == "") {
                                    dispatch(
                                        update({
                                            ...project,
                                            Bars: {
                                                ...project.Bars,
                                                border_bld: 0,
                                            },
                                        })
                                    );
                                }
                            }
                        }}
                        value={project?.Bars.border_bld}
                    />

                    <div className="clr_cntr">
                        <label htmlFor="inptclrgrph">
                            <IoMdColorFill />
                        </label>
                        <input
                            id="inptclrgrph"
                            value={project?.Bars.border_color}
                            type="color"
                            onChange={(e) => {
                                const color = e.target.value;
                                if (project) {
                                    dispatch(
                                        update({
                                            ...project,
                                            Bars: {
                                                ...project.Bars,
                                                border_color: color,
                                            },
                                        })
                                    );
                                }
                            }}
                        />
                    </div>
                </div>
                <label>Legend</label>
                <div className="cntredtprt">
                    <RiFontSize2 />
                    <input
                        title="legend size"
                        onChange={(e) => {
                            if (
                                parseInt(e.target.value) <= 24 ||
                                e.target.value == ""
                            ) {
                                if (project && e.target.value != "") {
                                    dispatch(
                                        update({
                                            ...project,
                                            Bars: {
                                                ...project.Bars,
                                                legend_size: parseInt(
                                                    e.target.value
                                                ),
                                            },
                                        })
                                    );
                                } else if (project && e.target.value == "") {
                                    dispatch(
                                        update({
                                            ...project,
                                            Bars: {
                                                ...project.Bars,
                                                legend_size: 0,
                                            },
                                        })
                                    );
                                }
                            }
                        }}
                        value={project?.Bars.legend_size}
                    />
                    <div
                        onClick={() => {
                            if (project) {
                                dispatch(
                                    update({
                                        ...project,
                                        Bars: {
                                            ...project.Bars,
                                            is_legend_italic:
                                                !project.Bars.is_legend_italic,
                                        },
                                    })
                                );
                            }
                        }}
                        style={{
                            color: project?.Bars.is_legend_italic
                                ? "white"
                                : "rgba(0,0,0,0.7)",
                            fontStyle: project?.Bars.is_legend_italic
                                ? "italic"
                                : "italic",
                            backgroundColor: project?.Bars.is_legend_italic
                                ? "#6991D1"
                                : "rgba(216, 216, 216, 0.16)",
                        }}
                        className="isItalic"
                    >
                        I
                    </div>
                    <div
                        onClick={() => {
                            if (project) {
                                dispatch(
                                    update({
                                        ...project,
                                        Bars: {
                                            ...project.Bars,
                                            is_legend_bold:
                                                !project.Bars.is_legend_bold,
                                        },
                                    })
                                );
                            }
                        }}
                        style={{
                            color: project?.Bars.is_legend_bold
                                ? "white"
                                : "rgba(0,0,0,0.7)",

                            fontWeight: project?.Bars.is_legend_bold
                                ? "bold"
                                : "bold",
                            backgroundColor: project?.Bars.is_legend_bold
                                ? "#6991D1"
                                : "rgba(216, 216, 216, 0.16)",
                        }}
                        className="isBold"
                    >
                        B
                    </div>

                    <div className="clr_cntr">
                        <label htmlFor="inptclrgrph">
                            <IoMdColorFill />
                        </label>
                        <input
                            id="inptclrgrph"
                            value={project?.Bars.legend_color}
                            type="color"
                            onChange={(e) => {
                                const color = e.target.value;
                                if (project) {
                                    dispatch(
                                        update({
                                            ...project,
                                            Bars: {
                                                ...project.Bars,
                                                legend_color: color,
                                            },
                                        })
                                    );
                                }
                            }}
                        />
                    </div>
                </div>
                <label>Axis</label>
                <div className="cntredtprt">
                    <RiFontSize2 />
                    <input
                        title="axis text size"
                        onChange={(e) => {
                            if (
                                parseInt(e.target.value) <= 32 ||
                                e.target.value == ""
                            ) {
                                if (project && e.target.value != "") {
                                    dispatch(
                                        update({
                                            ...project,
                                            Bars: {
                                                ...project.Bars,
                                                axis_txt_size: parseInt(
                                                    e.target.value
                                                ),
                                            },
                                        })
                                    );
                                } else if (project && e.target.value == "") {
                                    dispatch(
                                        update({
                                            ...project,
                                            Bars: {
                                                ...project.Bars,
                                                axis_txt_size: 0,
                                            },
                                        })
                                    );
                                }
                            }
                        }}
                        value={project?.Bars.axis_txt_size}
                    />
                    <div
                        onClick={() => {
                            if (project) {
                                dispatch(
                                    update({
                                        ...project,
                                        Bars: {
                                            ...project.Bars,
                                            is_axis_txt_italic:
                                                !project.Bars
                                                    .is_axis_txt_italic,
                                        },
                                    })
                                );
                            }
                        }}
                        style={{
                            color: project?.Bars.is_axis_txt_italic
                                ? "white"
                                : "rgba(0,0,0,0.7)",

                            fontStyle: project?.Bars.is_axis_txt_italic
                                ? "italic"
                                : "italic",
                            backgroundColor: project?.Bars.is_axis_txt_italic
                                ? "#6991D1"
                                : "rgba(216, 216, 216, 0.16)",
                        }}
                        className="isItalic"
                    >
                        I
                    </div>
                    <div
                        onClick={() => {
                            if (project) {
                                dispatch(
                                    update({
                                        ...project,
                                        Bars: {
                                            ...project.Bars,
                                            is_axis_txt_bold:
                                                !project.Bars.is_axis_txt_bold,
                                        },
                                    })
                                );
                            }
                        }}
                        style={{
                            color: project?.Bars.is_axis_txt_bold
                                ? "white"
                                : "rgba(0,0,0,0.7)",

                            fontWeight: project?.Bars.is_axis_txt_bold
                                ? "bold"
                                : "bold",
                            backgroundColor: project?.Bars.is_axis_txt_bold
                                ? "#6991D1"
                                : "rgba(216, 216, 216, 0.16)",
                        }}
                        className="isBold"
                    >
                        B
                    </div>

                    <div className="clr_cntr">
                        <label htmlFor="inptclrgrph">
                            <IoMdColorFill />
                        </label>
                        <input
                            id="inptclrgrph"
                            value={project?.Bars.axis_txt_color}
                            type="color"
                            onChange={(e) => {
                                const color = e.target.value;
                                if (project) {
                                    dispatch(
                                        update({
                                            ...project,
                                            Bars: {
                                                ...project.Bars,
                                                axis_txt_color: color,
                                            },
                                        })
                                    );
                                }
                            }}
                        />
                    </div>
                </div>
                <div className="aixs_text">
                    <div>
                        <label>Axis X</label>
                        <input
                            title="axis X text"
                            onChange={(e) => {
                                if (project) {
                                    console.log(e.target.value);
                                    dispatch(
                                        update({
                                            ...project,
                                            Column: {
                                                ...project.Column,
                                                axisX: e.target.value,
                                            },
                                        })
                                    );
                                }
                            }}
                            value={project?.Column.axisX}
                            type="text"
                            placeholder="Default"
                        />
                    </div>
                    <div>
                        <label>Axis Y</label>
                        <input
                            title="axis Y text"
                            onChange={(e) => {
                                if (project) {
                                    dispatch(
                                        update({
                                            ...project,
                                            Column: {
                                                ...project.Column,
                                                axisY: e.target.value,
                                            },
                                        })
                                    );
                                }
                            }}
                            value={project?.Column.axisY}
                            type="text"
                            placeholder="Default"
                        />
                    </div>
                </div>
            </div>
        );
    };

    const PiePart = () => {
        return (
            <div className="clmn_prt">
                <h1
                    style={{
                        fontFamily: "Lexend",
                        marginLeft: 0,
                        fontWeight: 550,
                        marginTop: "10px",
                    }}
                >
                    Pie
                </h1>

                <label>Legend</label>
                <div className="cntredtprt">
                    <RiFontSize2 />
                    <input
                        title="legend size"
                        onChange={(e) => {
                            if (
                                parseInt(e.target.value) <= 24 ||
                                e.target.value == ""
                            ) {
                                if (project && e.target.value != "") {
                                    dispatch(
                                        update({
                                            ...project,
                                            Pie: {
                                                ...project.Pie,
                                                legend_size: parseInt(
                                                    e.target.value
                                                ),
                                            },
                                        })
                                    );
                                } else if (project && e.target.value == "") {
                                    dispatch(
                                        update({
                                            ...project,
                                            Pie: {
                                                ...project.Pie,
                                                legend_size: 0,
                                            },
                                        })
                                    );
                                }
                            }
                        }}
                        value={project?.Pie.legend_size}
                    />
                    <div
                        onClick={() => {
                            if (project) {
                                dispatch(
                                    update({
                                        ...project,
                                        Pie: {
                                            ...project.Pie,
                                            is_legend_italic:
                                                !project.Pie.is_legend_italic,
                                        },
                                    })
                                );
                            }
                        }}
                        style={{
                            color: project?.Pie.is_legend_italic
                                ? "white"
                                : "rgba(0,0,0,0.7)",
                            fontStyle: project?.Pie.is_legend_italic
                                ? "italic"
                                : "italic",
                            backgroundColor: project?.Pie.is_legend_italic
                                ? "#6991D1"
                                : "rgba(216, 216, 216, 0.16)",
                        }}
                        className="isItalic"
                    >
                        I
                    </div>
                    <div
                        onClick={() => {
                            if (project) {
                                dispatch(
                                    update({
                                        ...project,
                                        Pie: {
                                            ...project.Pie,
                                            is_legend_bold:
                                                !project.Pie.is_legend_bold,
                                        },
                                    })
                                );
                            }
                        }}
                        style={{
                            color: project?.Pie.is_legend_bold
                                ? "white"
                                : "rgba(0,0,0,0.7)",

                            fontWeight: project?.Pie.is_legend_bold
                                ? "bold"
                                : "bold",
                            backgroundColor: project?.Pie.is_legend_bold
                                ? "#6991D1"
                                : "rgba(216, 216, 216, 0.16)",
                        }}
                        className="isBold"
                    >
                        B
                    </div>

                    <div className="clr_cntr">
                        <label htmlFor="inptclrgrph">
                            <IoMdColorFill />
                        </label>
                        <input
                            id="inptclrgrph"
                            value={project?.Pie.legend_color}
                            type="color"
                            onChange={(e) => {
                                const color = e.target.value;
                                if (project) {
                                    dispatch(
                                        update({
                                            ...project,
                                            Pie: {
                                                ...project.Pie,
                                                legend_color: color,
                                            },
                                        })
                                    );
                                }
                            }}
                        />
                    </div>
                </div>
                <label>Start Angle</label>
                <div className="inpt_rng_cntr">
                    <p>0</p>
                    <input
                        title={project?.Pie.start_angle.toString() || ""}
                        value={project?.Pie.start_angle}
                        onChange={(e) => {
                            if (project) {
                                dispatch(
                                    update({
                                        ...project,
                                        Pie: {
                                            ...project?.Pie,
                                            start_angle: parseInt(
                                                e.target.value
                                            ),
                                        },
                                    })
                                );
                            }
                        }}
                        type="range"
                        min={0}
                        max={360}
                    />
                    <p>360°</p>
                </div>
            </div>
        );
    };

    const DonutPart = () => {
        return (
            <div className="clmn_prt">
                <h1
                    style={{
                        fontFamily: "Lexend",
                        marginLeft: 0,
                        fontWeight: 550,
                        marginTop: "10px",
                    }}
                >
                    Pie
                </h1>

                <label>Legend</label>
                <div className="cntredtprt">
                    <RiFontSize2 />
                    <input
                        title="legend size"
                        onChange={(e) => {
                            if (
                                parseInt(e.target.value) <= 24 ||
                                e.target.value == ""
                            ) {
                                if (project && e.target.value != "") {
                                    dispatch(
                                        update({
                                            ...project,
                                            Donut: {
                                                ...project.Donut,
                                                legend_size: parseInt(
                                                    e.target.value
                                                ),
                                            },
                                        })
                                    );
                                } else if (project && e.target.value == "") {
                                    dispatch(
                                        update({
                                            ...project,
                                            Donut: {
                                                ...project.Donut,
                                                legend_size: 0,
                                            },
                                        })
                                    );
                                }
                            }
                        }}
                        value={project?.Donut.legend_size}
                    />
                    <div
                        onClick={() => {
                            if (project) {
                                dispatch(
                                    update({
                                        ...project,
                                        Donut: {
                                            ...project.Donut,
                                            is_legend_italic:
                                                !project.Donut.is_legend_italic,
                                        },
                                    })
                                );
                            }
                        }}
                        style={{
                            color: project?.Donut.is_legend_italic
                                ? "white"
                                : "rgba(0,0,0,0.7)",
                            fontStyle: project?.Donut.is_legend_italic
                                ? "italic"
                                : "italic",
                            backgroundColor: project?.Donut.is_legend_italic
                                ? "#6991D1"
                                : "rgba(216, 216, 216, 0.16)",
                        }}
                        className="isItalic"
                    >
                        I
                    </div>
                    <div
                        onClick={() => {
                            if (project) {
                                dispatch(
                                    update({
                                        ...project,
                                        Donut: {
                                            ...project.Donut,
                                            is_legend_bold:
                                                !project.Donut.is_legend_bold,
                                        },
                                    })
                                );
                            }
                        }}
                        style={{
                            color: project?.Donut.is_legend_bold
                                ? "white"
                                : "rgba(0,0,0,0.7)",

                            fontWeight: project?.Donut.is_legend_bold
                                ? "bold"
                                : "bold",
                            backgroundColor: project?.Donut.is_legend_bold
                                ? "#6991D1"
                                : "rgba(216, 216, 216, 0.16)",
                        }}
                        className="isBold"
                    >
                        B
                    </div>

                    <div className="clr_cntr">
                        <label htmlFor="inptclrgrph">
                            <IoMdColorFill />
                        </label>
                        <input
                            id="inptclrgrph"
                            value={project?.Donut.legend_color}
                            type="color"
                            onChange={(e) => {
                                const color = e.target.value;
                                if (project) {
                                    dispatch(
                                        update({
                                            ...project,
                                            Donut: {
                                                ...project.Donut,
                                                legend_color: color,
                                            },
                                        })
                                    );
                                }
                            }}
                        />
                    </div>
                </div>
                <label>Start Angle</label>
                <div className="inpt_rng_cntr">
                    <p>0</p>
                    <input
                        title={project?.Donut.start_angle.toString() || ""}
                        value={project?.Donut.start_angle}
                        onChange={(e) => {
                            if (project) {
                                dispatch(
                                    update({
                                        ...project,
                                        Donut: {
                                            ...project?.Donut,
                                            start_angle: parseInt(
                                                e.target.value
                                            ),
                                        },
                                    })
                                );
                            }
                        }}
                        type="range"
                        min={0}
                        max={360}
                    />
                    <p>360°</p>
                </div>
                <label>Inner Radius</label>
                <div className="inpt_rng_cntr">
                    <p>0</p>
                    <input
                        title={project?.Donut.inner_radius.toString() || ""}
                        value={project?.Donut.inner_radius}
                        onChange={(e) => {
                            if (project) {
                                dispatch(
                                    update({
                                        ...project,
                                        Donut: {
                                            ...project?.Donut,
                                            inner_radius: parseInt(
                                                e.target.value
                                            ),
                                        },
                                    })
                                );
                            }
                        }}
                        type="range"
                        min={0}
                        max={100}
                    />
                    <p>100%</p>
                </div>
            </div>
        );
    };

    const LinePart = () => {
        return (
            <div className="clmn_prt">
                <h1
                    style={{
                        fontFamily: "Lexend",
                        marginLeft: 0,
                        fontWeight: 550,
                        marginTop: "10px",
                    }}
                >
                    Line
                </h1>
                <div className="shw_pntrmrk">
                    <label>Show Pointer Marks</label>
                    <div
                        style={{
                            justifyContent: project?.Line.show_pointer_mark
                                ? "end"
                                : "start",
                            backgroundColor: project?.Line.show_pointer_mark
                                ? "#3D75CD"
                                : "",
                        }}
                        onClick={() => {
                            if (project) {
                                dispatch(
                                    update({
                                        ...project,
                                        Line: {
                                            ...project.Line,
                                            show_pointer_mark:
                                                !project.Line.show_pointer_mark,
                                        },
                                    })
                                );
                            }
                        }}
                        className="toogle"
                    >
                        <div className="tgl_crcl"></div>
                    </div>
                </div>
                <label>Line Thickness</label>
                <div className="inpt_rng_cntr">
                    <p>0</p>
                    <input
                        value={project?.Line.thickness}
                        onChange={(e) => {
                            if (project) {
                                dispatch(
                                    update({
                                        ...project,
                                        Line: {
                                            ...project?.Line,
                                            thickness: parseInt(e.target.value),
                                        },
                                    })
                                );
                            }
                        }}
                        type="range"
                        min={0}
                        max={5}
                    />
                    <p>5px</p>
                </div>
                <label>Legend</label>
                <div className="cntredtprt">
                    <RiFontSize2 />
                    <input
                        title="legend size"
                        onChange={(e) => {
                            if (
                                parseInt(e.target.value) <= 24 ||
                                e.target.value == ""
                            ) {
                                if (project && e.target.value != "") {
                                    dispatch(
                                        update({
                                            ...project,
                                            Line: {
                                                ...project.Line,
                                                legend_size: parseInt(
                                                    e.target.value
                                                ),
                                            },
                                        })
                                    );
                                } else if (project && e.target.value == "") {
                                    dispatch(
                                        update({
                                            ...project,
                                            Line: {
                                                ...project.Line,
                                                legend_size: 0,
                                            },
                                        })
                                    );
                                }
                            }
                        }}
                        value={project?.Line.legend_size}
                    />
                    <div
                        onClick={() => {
                            if (project) {
                                dispatch(
                                    update({
                                        ...project,
                                        Line: {
                                            ...project.Line,
                                            is_legend_italic:
                                                !project.Line.is_legend_italic,
                                        },
                                    })
                                );
                            }
                        }}
                        style={{
                            color: project?.Line.is_legend_italic
                                ? "white"
                                : "rgba(0,0,0,0.7)",
                            fontStyle: project?.Line.is_legend_italic
                                ? "italic"
                                : "italic",
                            backgroundColor: project?.Line.is_legend_italic
                                ? "#6991D1"
                                : "rgba(216, 216, 216, 0.16)",
                        }}
                        className="isItalic"
                    >
                        I
                    </div>
                    <div
                        onClick={() => {
                            if (project) {
                                dispatch(
                                    update({
                                        ...project,
                                        Line: {
                                            ...project.Line,
                                            is_legend_bold:
                                                !project.Line.is_legend_bold,
                                        },
                                    })
                                );
                            }
                        }}
                        style={{
                            color: project?.Line.is_legend_bold
                                ? "white"
                                : "rgba(0,0,0,0.7)",

                            fontWeight: project?.Line.is_legend_bold
                                ? "bold"
                                : "bold",
                            backgroundColor: project?.Line.is_legend_bold
                                ? "#6991D1"
                                : "rgba(216, 216, 216, 0.16)",
                        }}
                        className="isBold"
                    >
                        B
                    </div>

                    <div className="clr_cntr">
                        <label htmlFor="inptclrgrph">
                            <IoMdColorFill />
                        </label>
                        <input
                            id="inptclrgrph"
                            value={project?.Line.legend_color}
                            type="color"
                            onChange={(e) => {
                                const color = e.target.value;
                                if (project) {
                                    dispatch(
                                        update({
                                            ...project,
                                            Line: {
                                                ...project.Line,
                                                legend_color: color,
                                            },
                                        })
                                    );
                                }
                            }}
                        />
                    </div>
                </div>
                <label>Axis</label>
                <div className="cntredtprt">
                    <RiFontSize2 />
                    <input
                        title="axis text size"
                        onChange={(e) => {
                            if (
                                parseInt(e.target.value) <= 32 ||
                                e.target.value == ""
                            ) {
                                if (project && e.target.value != "") {
                                    dispatch(
                                        update({
                                            ...project,
                                            Line: {
                                                ...project.Line,
                                                axis_txt_size: parseInt(
                                                    e.target.value
                                                ),
                                            },
                                        })
                                    );
                                } else if (project && e.target.value == "") {
                                    dispatch(
                                        update({
                                            ...project,
                                            Line: {
                                                ...project.Line,
                                                axis_txt_size: 0,
                                            },
                                        })
                                    );
                                }
                            }
                        }}
                        value={project?.Line.axis_txt_size}
                    />
                    <div
                        onClick={() => {
                            if (project) {
                                dispatch(
                                    update({
                                        ...project,
                                        Line: {
                                            ...project.Line,
                                            is_axis_txt_italic:
                                                !project.Line
                                                    .is_axis_txt_italic,
                                        },
                                    })
                                );
                            }
                        }}
                        style={{
                            color: project?.Line.is_axis_txt_italic
                                ? "white"
                                : "rgba(0,0,0,0.7)",

                            fontStyle: project?.Line.is_axis_txt_italic
                                ? "italic"
                                : "italic",
                            backgroundColor: project?.Line.is_axis_txt_italic
                                ? "#6991D1"
                                : "rgba(216, 216, 216, 0.16)",
                        }}
                        className="isItalic"
                    >
                        I
                    </div>
                    <div
                        onClick={() => {
                            if (project) {
                                dispatch(
                                    update({
                                        ...project,
                                        Line: {
                                            ...project.Line,
                                            is_axis_txt_bold:
                                                !project.Line.is_axis_txt_bold,
                                        },
                                    })
                                );
                            }
                        }}
                        style={{
                            color: project?.Line.is_axis_txt_bold
                                ? "white"
                                : "rgba(0,0,0,0.7)",

                            fontWeight: project?.Line.is_axis_txt_bold
                                ? "bold"
                                : "bold",
                            backgroundColor: project?.Line.is_axis_txt_bold
                                ? "#6991D1"
                                : "rgba(216, 216, 216, 0.16)",
                        }}
                        className="isBold"
                    >
                        B
                    </div>

                    <div className="clr_cntr">
                        <label htmlFor="inptclrgrph">
                            <IoMdColorFill />
                        </label>
                        <input
                            id="inptclrgrph"
                            value={project?.Line.axis_txt_color}
                            type="color"
                            onChange={(e) => {
                                const color = e.target.value;
                                if (project) {
                                    dispatch(
                                        update({
                                            ...project,
                                            Line: {
                                                ...project.Line,
                                                axis_txt_color: color,
                                            },
                                        })
                                    );
                                }
                            }}
                        />
                    </div>
                </div>
                <label>Line</label>
                <div className="smt_cntr">
                    <div
                        style={{
                            backgroundColor: project?.Line.is_line_smoth
                                ? "#6991D1"
                                : "rgba(216, 216, 216, 0.16)",
                            color: project?.Line.is_line_smoth ? "" : "#717171",
                        }}
                        onClick={() => {
                            if (project) {
                                dispatch(
                                    update({
                                        ...project,
                                        Line: {
                                            ...project.Line,
                                            is_line_smoth: true,
                                        },
                                    })
                                );
                            }
                        }}
                        className="smtorstrt"
                    >
                        Smoth
                    </div>
                    <div
                        style={{
                            backgroundColor: !project?.Line.is_line_smoth
                                ? "#6991D1"
                                : "rgba(216, 216, 216, 0.16)",
                            color: !project?.Line.is_line_smoth
                                ? ""
                                : "#717171",
                        }}
                        onClick={() => {
                            if (project) {
                                dispatch(
                                    update({
                                        ...project,
                                        Line: {
                                            ...project.Line,
                                            is_line_smoth: false,
                                        },
                                    })
                                );
                            }
                        }}
                        className="smtorstrt"
                    >
                        Straight
                    </div>
                </div>
            </div>
        );
    };

    const AreaPart = () => {
        return (
            <div className="clmn_prt">
                <h1
                    style={{
                        fontFamily: "Lexend",
                        marginLeft: 0,
                        fontWeight: 550,
                        marginTop: "10px",
                    }}
                >
                    Area
                </h1>
                <div className="shw_pntrmrk">
                    <label>Show Pointer Marks</label>
                    <div
                        style={{
                            justifyContent: project?.Area.show_pointer_mark
                                ? "end"
                                : "start",
                            backgroundColor: project?.Area.show_pointer_mark
                                ? "#3D75CD"
                                : "",
                        }}
                        onClick={() => {
                            if (project) {
                                dispatch(
                                    update({
                                        ...project,
                                        Area: {
                                            ...project.Area,
                                            show_pointer_mark:
                                                !project.Area.show_pointer_mark,
                                        },
                                    })
                                );
                            }
                        }}
                        className="toogle"
                    >
                        <div className="tgl_crcl"></div>
                    </div>
                </div>
                <label>Area Thickness</label>
                <div className="inpt_rng_cntr">
                    <p>0</p>
                    <input
                        value={project?.Area.thickness}
                        onChange={(e) => {
                            if (project) {
                                dispatch(
                                    update({
                                        ...project,
                                        Area: {
                                            ...project?.Area,
                                            thickness: parseInt(e.target.value),
                                        },
                                    })
                                );
                            }
                        }}
                        type="range"
                        min={0}
                        max={5}
                    />
                    <p>5px</p>
                </div>
                <label>Legend</label>
                <div className="cntredtprt">
                    <RiFontSize2 />
                    <input
                        title="legend size"
                        onChange={(e) => {
                            if (
                                parseInt(e.target.value) <= 24 ||
                                e.target.value == ""
                            ) {
                                if (project && e.target.value != "") {
                                    dispatch(
                                        update({
                                            ...project,
                                            Area: {
                                                ...project.Area,
                                                legend_size: parseInt(
                                                    e.target.value
                                                ),
                                            },
                                        })
                                    );
                                } else if (project && e.target.value == "") {
                                    dispatch(
                                        update({
                                            ...project,
                                            Area: {
                                                ...project.Area,
                                                legend_size: 0,
                                            },
                                        })
                                    );
                                }
                            }
                        }}
                        value={project?.Area.legend_size}
                    />
                    <div
                        onClick={() => {
                            if (project) {
                                dispatch(
                                    update({
                                        ...project,
                                        Area: {
                                            ...project.Area,
                                            is_legend_italic:
                                                !project.Area.is_legend_italic,
                                        },
                                    })
                                );
                            }
                        }}
                        style={{
                            color: project?.Area.is_legend_italic
                                ? "white"
                                : "rgba(0,0,0,0.7)",
                            fontStyle: project?.Area.is_legend_italic
                                ? "italic"
                                : "italic",
                            backgroundColor: project?.Area.is_legend_italic
                                ? "#6991D1"
                                : "rgba(216, 216, 216, 0.16)",
                        }}
                        className="isItalic"
                    >
                        I
                    </div>
                    <div
                        onClick={() => {
                            if (project) {
                                dispatch(
                                    update({
                                        ...project,
                                        Area: {
                                            ...project.Area,
                                            is_legend_bold:
                                                !project.Area.is_legend_bold,
                                        },
                                    })
                                );
                            }
                        }}
                        style={{
                            color: project?.Area.is_legend_bold
                                ? "white"
                                : "rgba(0,0,0,0.7)",

                            fontWeight: project?.Area.is_legend_bold
                                ? "bold"
                                : "bold",
                            backgroundColor: project?.Area.is_legend_bold
                                ? "#6991D1"
                                : "rgba(216, 216, 216, 0.16)",
                        }}
                        className="isBold"
                    >
                        B
                    </div>

                    <div className="clr_cntr">
                        <label htmlFor="inptclrgrph">
                            <IoMdColorFill />
                        </label>
                        <input
                            id="inptclrgrph"
                            value={project?.Area.legend_color}
                            type="color"
                            onChange={(e) => {
                                const color = e.target.value;
                                if (project) {
                                    dispatch(
                                        update({
                                            ...project,
                                            Area: {
                                                ...project.Area,
                                                legend_color: color,
                                            },
                                        })
                                    );
                                }
                            }}
                        />
                    </div>
                </div>
                <label>Axis</label>
                <div className="cntredtprt">
                    <RiFontSize2 />
                    <input
                        title="axis text size"
                        onChange={(e) => {
                            if (
                                parseInt(e.target.value) <= 32 ||
                                e.target.value == ""
                            ) {
                                if (project && e.target.value != "") {
                                    dispatch(
                                        update({
                                            ...project,
                                            Area: {
                                                ...project.Area,
                                                axis_txt_size: parseInt(
                                                    e.target.value
                                                ),
                                            },
                                        })
                                    );
                                } else if (project && e.target.value == "") {
                                    dispatch(
                                        update({
                                            ...project,
                                            Area: {
                                                ...project.Area,
                                                axis_txt_size: 0,
                                            },
                                        })
                                    );
                                }
                            }
                        }}
                        value={project?.Area.axis_txt_size}
                    />
                    <div
                        onClick={() => {
                            if (project) {
                                dispatch(
                                    update({
                                        ...project,
                                        Area: {
                                            ...project.Area,
                                            is_axis_txt_italic:
                                                !project.Area
                                                    .is_axis_txt_italic,
                                        },
                                    })
                                );
                            }
                        }}
                        style={{
                            color: project?.Area.is_axis_txt_italic
                                ? "white"
                                : "rgba(0,0,0,0.7)",

                            fontStyle: project?.Area.is_axis_txt_italic
                                ? "italic"
                                : "italic",
                            backgroundColor: project?.Area.is_axis_txt_italic
                                ? "#6991D1"
                                : "rgba(216, 216, 216, 0.16)",
                        }}
                        className="isItalic"
                    >
                        I
                    </div>
                    <div
                        onClick={() => {
                            if (project) {
                                dispatch(
                                    update({
                                        ...project,
                                        Area: {
                                            ...project.Area,
                                            is_axis_txt_bold:
                                                !project.Area.is_axis_txt_bold,
                                        },
                                    })
                                );
                            }
                        }}
                        style={{
                            color: project?.Area.is_axis_txt_bold
                                ? "white"
                                : "rgba(0,0,0,0.7)",

                            fontWeight: project?.Area.is_axis_txt_bold
                                ? "bold"
                                : "bold",
                            backgroundColor: project?.Area.is_axis_txt_bold
                                ? "#6991D1"
                                : "rgba(216, 216, 216, 0.16)",
                        }}
                        className="isBold"
                    >
                        B
                    </div>

                    <div className="clr_cntr">
                        <label htmlFor="inptclrgrph">
                            <IoMdColorFill />
                        </label>
                        <input
                            id="inptclrgrph"
                            value={project?.Area.axis_txt_color}
                            type="color"
                            onChange={(e) => {
                                const color = e.target.value;
                                if (project) {
                                    dispatch(
                                        update({
                                            ...project,
                                            Area: {
                                                ...project.Area,
                                                axis_txt_color: color,
                                            },
                                        })
                                    );
                                }
                            }}
                        />
                    </div>
                </div>
                <label>Area</label>
                <div className="smt_cntr">
                    <div
                        style={{
                            backgroundColor: project?.Area.is_line_smoth
                                ? "#6991D1"
                                : "rgba(216, 216, 216, 0.16)",
                            color: project?.Area.is_line_smoth ? "" : "#717171",
                        }}
                        onClick={() => {
                            if (project) {
                                dispatch(
                                    update({
                                        ...project,
                                        Area: {
                                            ...project.Area,
                                            is_line_smoth: true,
                                        },
                                    })
                                );
                            }
                        }}
                        className="smtorstrt"
                    >
                        Smoth
                    </div>
                    <div
                        style={{
                            backgroundColor: !project?.Area.is_line_smoth
                                ? "#6991D1"
                                : "rgba(216, 216, 216, 0.16)",
                            color: !project?.Area.is_line_smoth
                                ? ""
                                : "#717171",
                        }}
                        onClick={() => {
                            if (project) {
                                dispatch(
                                    update({
                                        ...project,
                                        Area: {
                                            ...project.Area,
                                            is_line_smoth: false,
                                        },
                                    })
                                );
                            }
                        }}
                        className="smtorstrt"
                    >
                        Straight
                    </div>
                </div>
            </div>
        );
    };

    const ColumnLinePart = () => {
        return (
            <>
                <div className="clmn_prt">
                    <h1
                        style={{
                            fontFamily: "Lexend",
                            marginLeft: 0,
                            fontWeight: 550,
                            marginTop: "10px",
                        }}
                    >
                        Column
                    </h1>
                    <label>Bar Spacing</label>
                    <div className="cntredtprt">
                        <RxColumnSpacing />
                        <input
                            max={10}
                            onChange={(e) => {
                                if (
                                    parseInt(e.target.value) <= 24 ||
                                    e.target.value == ""
                                ) {
                                    if (
                                        e.target.value.at(
                                            e.target.value.length - 1
                                        ) == "." &&
                                        !`${project?.Column_Line.b_bar_spacing}`.includes(
                                            "."
                                        )
                                    ) {
                                        console.log("ha");
                                        setisPoint(true);
                                    } else if (
                                        project &&
                                        e.target.value != ""
                                    ) {
                                        const inputValue = isPoint
                                            ? e.target.value.slice(
                                                  0,
                                                  e.target.value.length - 1
                                              ) +
                                              "." +
                                              e.target.value.charAt(
                                                  e.target.value.length - 1
                                              )
                                            : e.target.value;
                                        console.log(isPoint, inputValue);
                                        setisPoint(false);
                                        dispatch(
                                            update({
                                                ...project,
                                                Column: {
                                                    ...project.Column_Line,
                                                    bar_spacing:
                                                        parseFloat(inputValue),
                                                },
                                            })
                                        );
                                    } else if (
                                        e.target.value == "" &&
                                        project
                                    ) {
                                        dispatch(
                                            update({
                                                ...project,
                                                Column: {
                                                    ...project.Column_Line,
                                                    bar_spacing: 0,
                                                },
                                            })
                                        );
                                    }
                                }
                            }}
                            value={project?.Column_Line.b_bar_spacing}
                        />
                    </div>
                    <label>Border</label>
                    <div className="cntredtprt">
                        <FaBorderTopLeft />
                        <input
                            title="border radius"
                            onChange={(e) => {
                                if (
                                    parseInt(e.target.value) <= 24 ||
                                    e.target.value == ""
                                ) {
                                    if (project && e.target.value != "") {
                                        dispatch(
                                            update({
                                                ...project,
                                                Column: {
                                                    ...project.Column_Line,
                                                    border_radius: parseInt(
                                                        e.target.value
                                                    ),
                                                },
                                            })
                                        );
                                    } else if (
                                        project &&
                                        e.target.value == ""
                                    ) {
                                        dispatch(
                                            update({
                                                ...project,
                                                Column: {
                                                    ...project.Column_Line,
                                                    border_radius: 0,
                                                },
                                            })
                                        );
                                    }
                                }
                            }}
                            max={10}
                            value={project?.Column_Line.b_border_radius}
                        />
                        <p id="icon_thickness">T</p>
                        <input
                            title="border thickness"
                            onChange={(e) => {
                                if (
                                    parseInt(e.target.value) <= 24 ||
                                    e.target.value == ""
                                ) {
                                    if (project && e.target.value != "") {
                                        dispatch(
                                            update({
                                                ...project,
                                                Column: {
                                                    ...project.Column_Line,
                                                    border_bld: parseInt(
                                                        e.target.value
                                                    ),
                                                },
                                            })
                                        );
                                    } else if (
                                        project &&
                                        e.target.value == ""
                                    ) {
                                        dispatch(
                                            update({
                                                ...project,
                                                Column: {
                                                    ...project.Column_Line,
                                                    border_bld: 0,
                                                },
                                            })
                                        );
                                    }
                                }
                            }}
                            value={project?.Column_Line.b_border_bld}
                        />

                        <div className="clr_cntr">
                            <label htmlFor="inptclrgrph">
                                <IoMdColorFill />
                            </label>
                            <input
                                id="inptclrgrph"
                                value={project?.Column_Line.b_border_color}
                                type="color"
                                onChange={(e) => {
                                    const color = e.target.value;
                                    if (project) {
                                        dispatch(
                                            update({
                                                ...project,
                                                Column: {
                                                    ...project.Column_Line,
                                                    border_color: color,
                                                },
                                            })
                                        );
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <label>Legend</label>
                    <div className="cntredtprt">
                        <RiFontSize2 />
                        <input
                            title="legend size"
                            onChange={(e) => {
                                if (
                                    parseInt(e.target.value) <= 24 ||
                                    e.target.value == ""
                                ) {
                                    if (project && e.target.value != "") {
                                        dispatch(
                                            update({
                                                ...project,
                                                Column: {
                                                    ...project.Column_Line,
                                                    legend_size: parseInt(
                                                        e.target.value
                                                    ),
                                                },
                                            })
                                        );
                                    } else if (
                                        project &&
                                        e.target.value == ""
                                    ) {
                                        dispatch(
                                            update({
                                                ...project,
                                                Column: {
                                                    ...project.Column_Line,
                                                    legend_size: 0,
                                                },
                                            })
                                        );
                                    }
                                }
                            }}
                            value={project?.Column_Line.b_legend_size}
                        />
                        <div
                            onClick={() => {
                                if (project) {
                                    dispatch(
                                        update({
                                            ...project,
                                            Column: {
                                                ...project.Column_Line,
                                                is_legend_italic:
                                                    !project.Column_Line
                                                        .b_is_legend_italic,
                                            },
                                        })
                                    );
                                }
                            }}
                            style={{
                                color: project?.Column_Line.b_is_legend_italic
                                    ? "white"
                                    : "rgba(0,0,0,0.7)",
                                fontStyle: project?.Column_Line
                                    .b_is_legend_italic
                                    ? "italic"
                                    : "italic",
                                backgroundColor: project?.Column_Line
                                    .b_is_legend_italic
                                    ? "#6991D1"
                                    : "rgba(216, 216, 216, 0.16)",
                            }}
                            className="isItalic"
                        >
                            I
                        </div>
                        <div
                            onClick={() => {
                                if (project) {
                                    dispatch(
                                        update({
                                            ...project,
                                            Column: {
                                                ...project.Column_Line,
                                                is_legend_bold:
                                                    !project.Column_Line
                                                        .b_is_legend_bold,
                                            },
                                        })
                                    );
                                }
                            }}
                            style={{
                                color: project?.Column_Line.b_is_legend_bold
                                    ? "white"
                                    : "rgba(0,0,0,0.7)",

                                fontWeight: project?.Column_Line
                                    .b_is_legend_bold
                                    ? "bold"
                                    : "bold",
                                backgroundColor: project?.Column_Line
                                    .b_is_legend_bold
                                    ? "#6991D1"
                                    : "rgba(216, 216, 216, 0.16)",
                            }}
                            className="isBold"
                        >
                            B
                        </div>

                        <div className="clr_cntr">
                            <label htmlFor="inptclrgrph">
                                <IoMdColorFill />
                            </label>
                            <input
                                id="inptclrgrph"
                                value={project?.Column_Line.b_legend_color}
                                type="color"
                                onChange={(e) => {
                                    const color = e.target.value;
                                    if (project) {
                                        dispatch(
                                            update({
                                                ...project,
                                                Column: {
                                                    ...project.Column_Line,
                                                    legend_color: color,
                                                },
                                            })
                                        );
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <label>Axis</label>
                    <div className="cntredtprt">
                        <RiFontSize2 />
                        <input
                            title="axis text size"
                            onChange={(e) => {
                                if (
                                    parseInt(e.target.value) <= 32 ||
                                    e.target.value == ""
                                ) {
                                    if (project && e.target.value != "") {
                                        dispatch(
                                            update({
                                                ...project,
                                                Column: {
                                                    ...project.Column_Line,
                                                    axis_txt_size: parseInt(
                                                        e.target.value
                                                    ),
                                                },
                                            })
                                        );
                                    } else if (
                                        project &&
                                        e.target.value == ""
                                    ) {
                                        dispatch(
                                            update({
                                                ...project,
                                                Column: {
                                                    ...project.Column_Line,
                                                    axis_txt_size: 0,
                                                },
                                            })
                                        );
                                    }
                                }
                            }}
                            value={project?.Column_Line.b_axis_txt_size}
                        />
                        <div
                            onClick={() => {
                                if (project) {
                                    dispatch(
                                        update({
                                            ...project,
                                            Column: {
                                                ...project.Column_Line,
                                                is_axis_txt_italic:
                                                    !project.Column_Line
                                                        .b_is_axis_txt_italic,
                                            },
                                        })
                                    );
                                }
                            }}
                            style={{
                                color: project?.Column_Line.b_is_axis_txt_italic
                                    ? "white"
                                    : "rgba(0,0,0,0.7)",

                                fontStyle: project?.Column_Line
                                    .b_is_axis_txt_italic
                                    ? "italic"
                                    : "italic",
                                backgroundColor: project?.Column_Line
                                    .b_is_axis_txt_italic
                                    ? "#6991D1"
                                    : "rgba(216, 216, 216, 0.16)",
                            }}
                            className="isItalic"
                        >
                            I
                        </div>
                        <div
                            onClick={() => {
                                if (project) {
                                    dispatch(
                                        update({
                                            ...project,
                                            Column: {
                                                ...project.Column_Line,
                                                is_axis_txt_bold:
                                                    !project.Column_Line
                                                        .b_is_axis_txt_bold,
                                            },
                                        })
                                    );
                                }
                            }}
                            style={{
                                color: project?.Column_Line.b_is_axis_txt_bold
                                    ? "white"
                                    : "rgba(0,0,0,0.7)",

                                fontWeight: project?.Column_Line
                                    .b_is_axis_txt_bold
                                    ? "bold"
                                    : "bold",
                                backgroundColor: project?.Column_Line
                                    .b_is_axis_txt_bold
                                    ? "#6991D1"
                                    : "rgba(216, 216, 216, 0.16)",
                            }}
                            className="isBold"
                        >
                            B
                        </div>

                        <div className="clr_cntr">
                            <label htmlFor="inptclrgrph">
                                <IoMdColorFill />
                            </label>
                            <input
                                id="inptclrgrph"
                                value={project?.Column_Line.b_axis_txt_color}
                                type="color"
                                onChange={(e) => {
                                    const color = e.target.value;
                                    if (project) {
                                        dispatch(
                                            update({
                                                ...project,
                                                Column: {
                                                    ...project.Column_Line,
                                                    axis_txt_color: color,
                                                },
                                            })
                                        );
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <div className="aixs_text">
                        <div>
                            <label>Axis X</label>
                            <input
                                title="axis X text"
                                onChange={(e) => {
                                    if (project) {
                                        console.log(e.target.value);
                                        dispatch(
                                            update({
                                                ...project,
                                                Column: {
                                                    ...project.Column_Line,
                                                    axisX: e.target.value,
                                                },
                                            })
                                        );
                                    }
                                }}
                                value={project?.Column_Line.b_axisX}
                                type="text"
                                placeholder="Default"
                            />
                        </div>
                        <div>
                            <label>Axis Y</label>
                            <input
                                title="axis Y text"
                                onChange={(e) => {
                                    if (project) {
                                        dispatch(
                                            update({
                                                ...project,
                                                Column: {
                                                    ...project.Column_Line,
                                                    axisY: e.target.value,
                                                },
                                            })
                                        );
                                    }
                                }}
                                value={project?.Column_Line.b_axisY}
                                type="text"
                                placeholder="Default"
                            />
                        </div>
                    </div>
                </div>

                <div className="clmn_prt">
                    <h1
                        style={{
                            fontFamily: "Lexend",
                            marginLeft: 0,
                            fontWeight: 550,
                            marginTop: "10px",
                        }}
                    >
                        Line
                    </h1>
                    <div className="shw_pntrmrk">
                        <label>Show Pointer Marks</label>
                        <div
                            style={{
                                justifyContent: project?.Column_Line
                                    .l_show_pointer_mark
                                    ? "end"
                                    : "start",
                                backgroundColor: project?.Column_Line
                                    .l_show_pointer_mark
                                    ? "#3D75CD"
                                    : "",
                            }}
                            onClick={() => {
                                if (project) {
                                    dispatch(
                                        update({
                                            ...project,
                                            Line: {
                                                ...project.Column_Line,
                                                show_pointer_mark:
                                                    !project.Column_Line
                                                        .l_show_pointer_mark,
                                            },
                                        })
                                    );
                                }
                            }}
                            className="toogle"
                        >
                            <div className="tgl_crcl"></div>
                        </div>
                    </div>
                    <label>Line Thickness</label>
                    <div className="inpt_rng_cntr">
                        <p>0</p>
                        <input
                            value={project?.Column_Line.l_thickness}
                            onChange={(e) => {
                                if (project) {
                                    dispatch(
                                        update({
                                            ...project,
                                            Line: {
                                                ...project?.Column_Line,
                                                thickness: parseInt(
                                                    e.target.value
                                                ),
                                            },
                                        })
                                    );
                                }
                            }}
                            type="range"
                            min={0}
                            max={5}
                        />
                        <p>5px</p>
                    </div>
                    <label>Legend</label>
                    <div className="cntredtprt">
                        <RiFontSize2 />
                        <input
                            title="legend size"
                            onChange={(e) => {
                                if (
                                    parseInt(e.target.value) <= 24 ||
                                    e.target.value == ""
                                ) {
                                    if (project && e.target.value != "") {
                                        dispatch(
                                            update({
                                                ...project,
                                                Line: {
                                                    ...project.Column_Line,
                                                    legend_size: parseInt(
                                                        e.target.value
                                                    ),
                                                },
                                            })
                                        );
                                    } else if (
                                        project &&
                                        e.target.value == ""
                                    ) {
                                        dispatch(
                                            update({
                                                ...project,
                                                Line: {
                                                    ...project.Column_Line,
                                                    legend_size: 0,
                                                },
                                            })
                                        );
                                    }
                                }
                            }}
                            value={project?.Column_Line.l_legend_size}
                        />
                        <div
                            onClick={() => {
                                if (project) {
                                    dispatch(
                                        update({
                                            ...project,
                                            Line: {
                                                ...project.Column_Line,
                                                is_legend_italic:
                                                    !project.Column_Line
                                                        .l_is_legend_italic,
                                            },
                                        })
                                    );
                                }
                            }}
                            style={{
                                color: project?.Column_Line.l_is_legend_italic
                                    ? "white"
                                    : "rgba(0,0,0,0.7)",
                                fontStyle: project?.Column_Line
                                    .l_is_legend_italic
                                    ? "italic"
                                    : "italic",
                                backgroundColor: project?.Column_Line
                                    .l_is_legend_italic
                                    ? "#6991D1"
                                    : "rgba(216, 216, 216, 0.16)",
                            }}
                            className="isItalic"
                        >
                            I
                        </div>
                        <div
                            onClick={() => {
                                if (project) {
                                    dispatch(
                                        update({
                                            ...project,
                                            Line: {
                                                ...project.Column_Line,
                                                is_legend_bold:
                                                    !project.Column_Line
                                                        .l_is_legend_bold,
                                            },
                                        })
                                    );
                                }
                            }}
                            style={{
                                color: project?.Column_Line.l_is_legend_bold
                                    ? "white"
                                    : "rgba(0,0,0,0.7)",

                                fontWeight: project?.Column_Line
                                    .l_is_legend_bold
                                    ? "bold"
                                    : "bold",
                                backgroundColor: project?.Column_Line
                                    .l_is_legend_bold
                                    ? "#6991D1"
                                    : "rgba(216, 216, 216, 0.16)",
                            }}
                            className="isBold"
                        >
                            B
                        </div>

                        <div className="clr_cntr">
                            <label htmlFor="inptclrgrph">
                                <IoMdColorFill />
                            </label>
                            <input
                                id="inptclrgrph"
                                value={project?.Column_Line.l_legend_color}
                                type="color"
                                onChange={(e) => {
                                    const color = e.target.value;
                                    if (project) {
                                        dispatch(
                                            update({
                                                ...project,
                                                Line: {
                                                    ...project.Column_Line,
                                                    legend_color: color,
                                                },
                                            })
                                        );
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <label>Axis</label>
                    <div className="cntredtprt">
                        <RiFontSize2 />
                        <input
                            title="axis text size"
                            onChange={(e) => {
                                if (
                                    parseInt(e.target.value) <= 32 ||
                                    e.target.value == ""
                                ) {
                                    if (project && e.target.value != "") {
                                        dispatch(
                                            update({
                                                ...project,
                                                Line: {
                                                    ...project.Column_Line,
                                                    l_axis_txt_size: parseInt(
                                                        e.target.value
                                                    ),
                                                },
                                            })
                                        );
                                    } else if (
                                        project &&
                                        e.target.value == ""
                                    ) {
                                        dispatch(
                                            update({
                                                ...project,
                                                Line: {
                                                    ...project.Column_Line,
                                                    l_axis_txt_size: 0,
                                                },
                                            })
                                        );
                                    }
                                }
                            }}
                            value={project?.Column_Line.l_axis_txt_size}
                        />
                        <div
                            onClick={() => {
                                if (project) {
                                    dispatch(
                                        update({
                                            ...project,
                                            Line: {
                                                ...project.Column_Line,
                                                is_axis_txt_italic:
                                                    !project.Column_Line
                                                        .l_is_axis_txt_italic,
                                            },
                                        })
                                    );
                                }
                            }}
                            style={{
                                color: project?.Column_Line.l_is_axis_txt_italic
                                    ? "white"
                                    : "rgba(0,0,0,0.7)",

                                fontStyle: project?.Column_Line
                                    .l_is_axis_txt_italic
                                    ? "italic"
                                    : "italic",
                                backgroundColor: project?.Column_Line
                                    .l_is_axis_txt_italic
                                    ? "#6991D1"
                                    : "rgba(216, 216, 216, 0.16)",
                            }}
                            className="isItalic"
                        >
                            I
                        </div>
                        <div
                            onClick={() => {
                                if (project) {
                                    dispatch(
                                        update({
                                            ...project,
                                            Line: {
                                                ...project.Column_Line,
                                                is_axis_txt_bold:
                                                    !project.Column_Line
                                                        .l_is_axis_txt_bold,
                                            },
                                        })
                                    );
                                }
                            }}
                            style={{
                                color: project?.Column_Line.l_is_axis_txt_bold
                                    ? "white"
                                    : "rgba(0,0,0,0.7)",

                                fontWeight: project?.Column_Line
                                    .l_is_axis_txt_bold
                                    ? "bold"
                                    : "bold",
                                backgroundColor: project?.Column_Line
                                    .l_is_axis_txt_bold
                                    ? "#6991D1"
                                    : "rgba(216, 216, 216, 0.16)",
                            }}
                            className="isBold"
                        >
                            B
                        </div>

                        <div className="clr_cntr">
                            <label htmlFor="inptclrgrph">
                                <IoMdColorFill />
                            </label>
                            <input
                                id="inptclrgrph"
                                value={project?.Column_Line.l_axis_txt_color}
                                type="color"
                                onChange={(e) => {
                                    const color = e.target.value;
                                    if (project) {
                                        dispatch(
                                            update({
                                                ...project,
                                                Line: {
                                                    ...project.Column_Line,
                                                    axis_txt_color: color,
                                                },
                                            })
                                        );
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <label>Line</label>
                    <div className="smt_cntr">
                        <div
                            style={{
                                backgroundColor: project?.Column_Line
                                    .l_is_line_smoth
                                    ? "#6991D1"
                                    : "rgba(216, 216, 216, 0.16)",
                                color: project?.Column_Line.l_is_line_smoth
                                    ? ""
                                    : "#717171",
                            }}
                            onClick={() => {
                                if (project) {
                                    dispatch(
                                        update({
                                            ...project,
                                            Line: {
                                                ...project.Column_Line,
                                                l_is_line_smoth: true,
                                            },
                                        })
                                    );
                                }
                            }}
                            className="smtorstrt"
                        >
                            Smoth
                        </div>
                        <div
                            style={{
                                backgroundColor: !project?.Column_Line
                                    .l_is_line_smoth
                                    ? "#6991D1"
                                    : "rgba(216, 216, 216, 0.16)",
                                color: !project?.Column_Line.l_is_line_smoth
                                    ? ""
                                    : "#717171",
                            }}
                            onClick={() => {
                                if (project) {
                                    dispatch(
                                        update({
                                            ...project,
                                            Line: {
                                                ...project.Column_Line,
                                                l_is_line_smoth: false,
                                            },
                                        })
                                    );
                                }
                            }}
                            className="smtorstrt"
                        >
                            Straight
                        </div>
                    </div>
                </div>
            </>
        );
    };

    const ColumnAreaPart = () => {
        return (
            <>
                <div className="clmn_prt">
                    <h1
                        style={{
                            fontFamily: "Lexend",
                            marginLeft: 0,
                            fontWeight: 550,
                            marginTop: "10px",
                        }}
                    >
                        Column
                    </h1>
                    <label>Bar Spacing</label>
                    <div className="cntredtprt">
                        <RxColumnSpacing />
                        <input
                            max={10}
                            onChange={(e) => {
                                if (
                                    parseInt(e.target.value) <= 24 ||
                                    e.target.value == ""
                                ) {
                                    if (
                                        e.target.value.at(
                                            e.target.value.length - 1
                                        ) == "." &&
                                        !`${project?.Column_Area.b_bar_spacing}`.includes(
                                            "."
                                        )
                                    ) {
                                        console.log("ha");
                                        setisPoint(true);
                                    } else if (
                                        project &&
                                        e.target.value != ""
                                    ) {
                                        const inputValue = isPoint
                                            ? e.target.value.slice(
                                                  0,
                                                  e.target.value.length - 1
                                              ) +
                                              "." +
                                              e.target.value.charAt(
                                                  e.target.value.length - 1
                                              )
                                            : e.target.value;
                                        console.log(isPoint, inputValue);
                                        setisPoint(false);
                                        dispatch(
                                            update({
                                                ...project,
                                                Column: {
                                                    ...project.Column_Area,
                                                    bar_spacing:
                                                        parseFloat(inputValue),
                                                },
                                            })
                                        );
                                    } else if (
                                        e.target.value == "" &&
                                        project
                                    ) {
                                        dispatch(
                                            update({
                                                ...project,
                                                Column: {
                                                    ...project.Column_Area,
                                                    bar_spacing: 0,
                                                },
                                            })
                                        );
                                    }
                                }
                            }}
                            value={project?.Column_Area.b_bar_spacing}
                        />
                    </div>
                    <label>Border</label>
                    <div className="cntredtprt">
                        <FaBorderTopLeft />
                        <input
                            title="border radius"
                            onChange={(e) => {
                                if (
                                    parseInt(e.target.value) <= 24 ||
                                    e.target.value == ""
                                ) {
                                    if (project && e.target.value != "") {
                                        dispatch(
                                            update({
                                                ...project,
                                                Column: {
                                                    ...project.Column_Area,
                                                    border_radius: parseInt(
                                                        e.target.value
                                                    ),
                                                },
                                            })
                                        );
                                    } else if (
                                        project &&
                                        e.target.value == ""
                                    ) {
                                        dispatch(
                                            update({
                                                ...project,
                                                Column: {
                                                    ...project.Column_Area,
                                                    border_radius: 0,
                                                },
                                            })
                                        );
                                    }
                                }
                            }}
                            max={10}
                            value={project?.Column_Area.b_border_radius}
                        />
                        <p id="icon_thickness">T</p>
                        <input
                            title="border thickness"
                            onChange={(e) => {
                                if (
                                    parseInt(e.target.value) <= 24 ||
                                    e.target.value == ""
                                ) {
                                    if (project && e.target.value != "") {
                                        dispatch(
                                            update({
                                                ...project,
                                                Column: {
                                                    ...project.Column_Area,
                                                    border_bld: parseInt(
                                                        e.target.value
                                                    ),
                                                },
                                            })
                                        );
                                    } else if (
                                        project &&
                                        e.target.value == ""
                                    ) {
                                        dispatch(
                                            update({
                                                ...project,
                                                Column: {
                                                    ...project.Column_Area,
                                                    border_bld: 0,
                                                },
                                            })
                                        );
                                    }
                                }
                            }}
                            value={project?.Column_Area.b_border_bld}
                        />

                        <div className="clr_cntr">
                            <label htmlFor="inptclrgrph">
                                <IoMdColorFill />
                            </label>
                            <input
                                id="inptclrgrph"
                                value={project?.Column_Area.b_border_color}
                                type="color"
                                onChange={(e) => {
                                    const color = e.target.value;
                                    if (project) {
                                        dispatch(
                                            update({
                                                ...project,
                                                Column: {
                                                    ...project.Column_Area,
                                                    border_color: color,
                                                },
                                            })
                                        );
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <label>Legend</label>
                    <div className="cntredtprt">
                        <RiFontSize2 />
                        <input
                            title="legend size"
                            onChange={(e) => {
                                if (
                                    parseInt(e.target.value) <= 24 ||
                                    e.target.value == ""
                                ) {
                                    if (project && e.target.value != "") {
                                        dispatch(
                                            update({
                                                ...project,
                                                Column: {
                                                    ...project.Column_Area,
                                                    legend_size: parseInt(
                                                        e.target.value
                                                    ),
                                                },
                                            })
                                        );
                                    } else if (
                                        project &&
                                        e.target.value == ""
                                    ) {
                                        dispatch(
                                            update({
                                                ...project,
                                                Column: {
                                                    ...project.Column_Area,
                                                    legend_size: 0,
                                                },
                                            })
                                        );
                                    }
                                }
                            }}
                            value={project?.Column_Area.b_legend_size}
                        />
                        <div
                            onClick={() => {
                                if (project) {
                                    dispatch(
                                        update({
                                            ...project,
                                            Column: {
                                                ...project.Column_Area,
                                                is_legend_italic:
                                                    !project.Column_Area
                                                        .b_is_legend_italic,
                                            },
                                        })
                                    );
                                }
                            }}
                            style={{
                                color: project?.Column_Area.b_is_legend_italic
                                    ? "white"
                                    : "rgba(0,0,0,0.7)",
                                fontStyle: project?.Column_Area
                                    .b_is_legend_italic
                                    ? "italic"
                                    : "italic",
                                backgroundColor: project?.Column_Area
                                    .b_is_legend_italic
                                    ? "#6991D1"
                                    : "rgba(216, 216, 216, 0.16)",
                            }}
                            className="isItalic"
                        >
                            I
                        </div>
                        <div
                            onClick={() => {
                                if (project) {
                                    dispatch(
                                        update({
                                            ...project,
                                            Column: {
                                                ...project.Column_Area,
                                                is_legend_bold:
                                                    !project.Column_Area
                                                        .b_is_legend_bold,
                                            },
                                        })
                                    );
                                }
                            }}
                            style={{
                                color: project?.Column_Area.b_is_legend_bold
                                    ? "white"
                                    : "rgba(0,0,0,0.7)",

                                fontWeight: project?.Column_Area
                                    .b_is_legend_bold
                                    ? "bold"
                                    : "bold",
                                backgroundColor: project?.Column_Area
                                    .b_is_legend_bold
                                    ? "#6991D1"
                                    : "rgba(216, 216, 216, 0.16)",
                            }}
                            className="isBold"
                        >
                            B
                        </div>

                        <div className="clr_cntr">
                            <label htmlFor="inptclrgrph">
                                <IoMdColorFill />
                            </label>
                            <input
                                id="inptclrgrph"
                                value={project?.Column_Area.b_legend_color}
                                type="color"
                                onChange={(e) => {
                                    const color = e.target.value;
                                    if (project) {
                                        dispatch(
                                            update({
                                                ...project,
                                                Column: {
                                                    ...project.Column_Area,
                                                    legend_color: color,
                                                },
                                            })
                                        );
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <label>Axis</label>
                    <div className="cntredtprt">
                        <RiFontSize2 />
                        <input
                            title="axis text size"
                            onChange={(e) => {
                                if (
                                    parseInt(e.target.value) <= 32 ||
                                    e.target.value == ""
                                ) {
                                    if (project && e.target.value != "") {
                                        dispatch(
                                            update({
                                                ...project,
                                                Column: {
                                                    ...project.Column_Area,
                                                    axis_txt_size: parseInt(
                                                        e.target.value
                                                    ),
                                                },
                                            })
                                        );
                                    } else if (
                                        project &&
                                        e.target.value == ""
                                    ) {
                                        dispatch(
                                            update({
                                                ...project,
                                                Column: {
                                                    ...project.Column_Area,
                                                    axis_txt_size: 0,
                                                },
                                            })
                                        );
                                    }
                                }
                            }}
                            value={project?.Column_Area.b_axis_txt_size}
                        />
                        <div
                            onClick={() => {
                                if (project) {
                                    dispatch(
                                        update({
                                            ...project,
                                            Column: {
                                                ...project.Column_Area,
                                                is_axis_txt_italic:
                                                    !project.Column_Area
                                                        .b_is_axis_txt_italic,
                                            },
                                        })
                                    );
                                }
                            }}
                            style={{
                                color: project?.Column_Area.b_is_axis_txt_italic
                                    ? "white"
                                    : "rgba(0,0,0,0.7)",

                                fontStyle: project?.Column_Area
                                    .b_is_axis_txt_italic
                                    ? "italic"
                                    : "italic",
                                backgroundColor: project?.Column_Area
                                    .b_is_axis_txt_italic
                                    ? "#6991D1"
                                    : "rgba(216, 216, 216, 0.16)",
                            }}
                            className="isItalic"
                        >
                            I
                        </div>
                        <div
                            onClick={() => {
                                if (project) {
                                    dispatch(
                                        update({
                                            ...project,
                                            Column: {
                                                ...project.Column_Area,
                                                is_axis_txt_bold:
                                                    !project.Column_Area
                                                        .b_is_axis_txt_bold,
                                            },
                                        })
                                    );
                                }
                            }}
                            style={{
                                color: project?.Column_Area.b_is_axis_txt_bold
                                    ? "white"
                                    : "rgba(0,0,0,0.7)",

                                fontWeight: project?.Column_Area
                                    .b_is_axis_txt_bold
                                    ? "bold"
                                    : "bold",
                                backgroundColor: project?.Column_Area
                                    .b_is_axis_txt_bold
                                    ? "#6991D1"
                                    : "rgba(216, 216, 216, 0.16)",
                            }}
                            className="isBold"
                        >
                            B
                        </div>

                        <div className="clr_cntr">
                            <label htmlFor="inptclrgrph">
                                <IoMdColorFill />
                            </label>
                            <input
                                id="inptclrgrph"
                                value={project?.Column_Area.b_axis_txt_color}
                                type="color"
                                onChange={(e) => {
                                    const color = e.target.value;
                                    if (project) {
                                        dispatch(
                                            update({
                                                ...project,
                                                Column: {
                                                    ...project.Column_Area,
                                                    axis_txt_color: color,
                                                },
                                            })
                                        );
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <div className="aixs_text">
                        <div>
                            <label>Axis X</label>
                            <input
                                title="axis X text"
                                onChange={(e) => {
                                    if (project) {
                                        console.log(e.target.value);
                                        dispatch(
                                            update({
                                                ...project,
                                                Column: {
                                                    ...project.Column_Area,
                                                    axisX: e.target.value,
                                                },
                                            })
                                        );
                                    }
                                }}
                                value={project?.Column_Area.b_axisX}
                                type="text"
                                placeholder="Default"
                            />
                        </div>
                        <div>
                            <label>Axis Y</label>
                            <input
                                title="axis Y text"
                                onChange={(e) => {
                                    if (project) {
                                        dispatch(
                                            update({
                                                ...project,
                                                Column: {
                                                    ...project.Column_Area,
                                                    axisY: e.target.value,
                                                },
                                            })
                                        );
                                    }
                                }}
                                value={project?.Column_Area.b_axisY}
                                type="text"
                                placeholder="Default"
                            />
                        </div>
                    </div>
                </div>

                <div className="clmn_prt">
                    <h1
                        style={{
                            fontFamily: "Lexend",
                            marginLeft: 0,
                            fontWeight: 550,
                            marginTop: "10px",
                        }}
                    >
                        Area
                    </h1>
                    <div className="shw_pntrmrk">
                        <label>Show Pointer Marks</label>
                        <div
                            style={{
                                justifyContent: project?.Column_Area
                                    .a_show_pointer_mark
                                    ? "end"
                                    : "start",
                                backgroundColor: project?.Column_Area
                                    .a_show_pointer_mark
                                    ? "#3D75CD"
                                    : "",
                            }}
                            onClick={() => {
                                if (project) {
                                    dispatch(
                                        update({
                                            ...project,
                                            Area: {
                                                ...project.Column_Area,
                                                show_pointer_mark:
                                                    !project.Column_Area
                                                        .a_show_pointer_mark,
                                            },
                                        })
                                    );
                                }
                            }}
                            className="toogle"
                        >
                            <div className="tgl_crcl"></div>
                        </div>
                    </div>
                    <label>Area Thickness</label>
                    <div className="inpt_rng_cntr">
                        <p>0</p>
                        <input
                            value={project?.Column_Area.a_thickness}
                            onChange={(e) => {
                                if (project) {
                                    dispatch(
                                        update({
                                            ...project,
                                            Area: {
                                                ...project?.Column_Area,
                                                thickness: parseInt(
                                                    e.target.value
                                                ),
                                            },
                                        })
                                    );
                                }
                            }}
                            type="range"
                            min={0}
                            max={5}
                        />
                        <p>5px</p>
                    </div>
                    <label>Legend</label>
                    <div className="cntredtprt">
                        <RiFontSize2 />
                        <input
                            title="legend size"
                            onChange={(e) => {
                                if (
                                    parseInt(e.target.value) <= 24 ||
                                    e.target.value == ""
                                ) {
                                    if (project && e.target.value != "") {
                                        dispatch(
                                            update({
                                                ...project,
                                                Area: {
                                                    ...project.Column_Area,
                                                    legend_size: parseInt(
                                                        e.target.value
                                                    ),
                                                },
                                            })
                                        );
                                    } else if (
                                        project &&
                                        e.target.value == ""
                                    ) {
                                        dispatch(
                                            update({
                                                ...project,
                                                Area: {
                                                    ...project.Column_Area,
                                                    legend_size: 0,
                                                },
                                            })
                                        );
                                    }
                                }
                            }}
                            value={project?.Column_Area.a_legend_size}
                        />
                        <div
                            onClick={() => {
                                if (project) {
                                    dispatch(
                                        update({
                                            ...project,
                                            Area: {
                                                ...project.Column_Area,
                                                is_legend_italic:
                                                    !project.Column_Area
                                                        .a_is_legend_italic,
                                            },
                                        })
                                    );
                                }
                            }}
                            style={{
                                color: project?.Column_Area.a_is_legend_italic
                                    ? "white"
                                    : "rgba(0,0,0,0.7)",
                                fontStyle: project?.Column_Area
                                    .a_is_legend_italic
                                    ? "italic"
                                    : "italic",
                                backgroundColor: project?.Column_Area
                                    .a_is_legend_italic
                                    ? "#6991D1"
                                    : "rgba(216, 216, 216, 0.16)",
                            }}
                            className="isItalic"
                        >
                            I
                        </div>
                        <div
                            onClick={() => {
                                if (project) {
                                    dispatch(
                                        update({
                                            ...project,
                                            Area: {
                                                ...project.Column_Area,
                                                is_legend_bold:
                                                    !project.Column_Area
                                                        .a_is_legend_bold,
                                            },
                                        })
                                    );
                                }
                            }}
                            style={{
                                color: project?.Column_Area.a_is_legend_bold
                                    ? "white"
                                    : "rgba(0,0,0,0.7)",

                                fontWeight: project?.Column_Area
                                    .a_is_legend_bold
                                    ? "bold"
                                    : "bold",
                                backgroundColor: project?.Column_Area
                                    .a_is_legend_bold
                                    ? "#6991D1"
                                    : "rgba(216, 216, 216, 0.16)",
                            }}
                            className="isBold"
                        >
                            B
                        </div>

                        <div className="clr_cntr">
                            <label htmlFor="inptclrgrph">
                                <IoMdColorFill />
                            </label>
                            <input
                                id="inptclrgrph"
                                value={project?.Column_Area.a_legend_color}
                                type="color"
                                onChange={(e) => {
                                    const color = e.target.value;
                                    if (project) {
                                        dispatch(
                                            update({
                                                ...project,
                                                Area: {
                                                    ...project.Column_Area,
                                                    legend_color: color,
                                                },
                                            })
                                        );
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <label>Axis</label>
                    <div className="cntredtprt">
                        <RiFontSize2 />
                        <input
                            title="axis text size"
                            onChange={(e) => {
                                if (
                                    parseInt(e.target.value) <= 32 ||
                                    e.target.value == ""
                                ) {
                                    if (project && e.target.value != "") {
                                        dispatch(
                                            update({
                                                ...project,
                                                Area: {
                                                    ...project.Column_Area,
                                                    axis_txt_size: parseInt(
                                                        e.target.value
                                                    ),
                                                },
                                            })
                                        );
                                    } else if (
                                        project &&
                                        e.target.value == ""
                                    ) {
                                        dispatch(
                                            update({
                                                ...project,
                                                Area: {
                                                    ...project.Column_Area,
                                                    axis_txt_size: 0,
                                                },
                                            })
                                        );
                                    }
                                }
                            }}
                            value={project?.Column_Area.a_axis_txt_size}
                        />
                        <div
                            onClick={() => {
                                if (project) {
                                    dispatch(
                                        update({
                                            ...project,
                                            Area: {
                                                ...project.Column_Area,
                                                is_axis_txt_italic:
                                                    !project.Column_Area
                                                        .a_is_axis_txt_italic,
                                            },
                                        })
                                    );
                                }
                            }}
                            style={{
                                color: project?.Column_Area.a_is_axis_txt_italic
                                    ? "white"
                                    : "rgba(0,0,0,0.7)",

                                fontStyle: project?.Column_Area
                                    .a_is_axis_txt_italic
                                    ? "italic"
                                    : "italic",
                                backgroundColor: project?.Column_Area
                                    .a_is_axis_txt_italic
                                    ? "#6991D1"
                                    : "rgba(216, 216, 216, 0.16)",
                            }}
                            className="isItalic"
                        >
                            I
                        </div>
                        <div
                            onClick={() => {
                                if (project) {
                                    dispatch(
                                        update({
                                            ...project,
                                            Area: {
                                                ...project.Column_Area,
                                                is_axis_txt_bold:
                                                    !project.Column_Area
                                                        .a_is_axis_txt_bold,
                                            },
                                        })
                                    );
                                }
                            }}
                            style={{
                                color: project?.Column_Area.a_is_axis_txt_bold
                                    ? "white"
                                    : "rgba(0,0,0,0.7)",

                                fontWeight: project?.Column_Area
                                    .a_is_axis_txt_bold
                                    ? "bold"
                                    : "bold",
                                backgroundColor: project?.Column_Area
                                    .a_is_axis_txt_bold
                                    ? "#6991D1"
                                    : "rgba(216, 216, 216, 0.16)",
                            }}
                            className="isBold"
                        >
                            B
                        </div>

                        <div className="clr_cntr">
                            <label htmlFor="inptclrgrph">
                                <IoMdColorFill />
                            </label>
                            <input
                                id="inptclrgrph"
                                value={project?.Column_Area.a_axis_txt_color}
                                type="color"
                                onChange={(e) => {
                                    const color = e.target.value;
                                    if (project) {
                                        dispatch(
                                            update({
                                                ...project,
                                                Area: {
                                                    ...project.Column_Area,
                                                    axis_txt_color: color,
                                                },
                                            })
                                        );
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <label>Area</label>
                    <div className="smt_cntr">
                        <div
                            style={{
                                backgroundColor: project?.Column_Area
                                    .a_is_line_smoth
                                    ? "#6991D1"
                                    : "rgba(216, 216, 216, 0.16)",
                                color: project?.Column_Area.a_is_line_smoth
                                    ? ""
                                    : "#717171",
                            }}
                            onClick={() => {
                                if (project) {
                                    dispatch(
                                        update({
                                            ...project,
                                            Area: {
                                                ...project.Column_Area,
                                                is_line_smoth: true,
                                            },
                                        })
                                    );
                                }
                            }}
                            className="smtorstrt"
                        >
                            Smoth
                        </div>
                        <div
                            style={{
                                backgroundColor: !project?.Column_Area
                                    .a_is_line_smoth
                                    ? "#6991D1"
                                    : "rgba(216, 216, 216, 0.16)",
                                color: !project?.Column_Area.a_is_line_smoth
                                    ? ""
                                    : "#717171",
                            }}
                            onClick={() => {
                                if (project) {
                                    dispatch(
                                        update({
                                            ...project,
                                            Area: {
                                                ...project.Column_Area,
                                                is_line_smoth: false,
                                            },
                                        })
                                    );
                                }
                            }}
                            className="smtorstrt"
                        >
                            Straight
                        </div>
                    </div>
                </div>
            </>
        );
    };

    if (params.show) {
        switch (project?.graph_selected) {
            case 0:
                return ColumnPart();
            case 1:
                return BarsPart();
            case 2:
                return PiePart();
            case 3:
                return DonutPart();
            case 4:
                return LinePart();
            case 5:
                return AreaPart();
            case 6:
                return ColumnLinePart();
            case 7:
                return ColumnAreaPart();
        }
    }
}

export default EditGraphsSection;
