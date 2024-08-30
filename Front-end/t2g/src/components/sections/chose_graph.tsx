"use client";
import { RootState } from "@/store/reduxStore";
import { update } from "@/store/slices/projectManger";
import { svgIcons } from "@/svg_icons/svg_icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function ChoseGraphsSection(params: { show: boolean }) {
    const project = useSelector((state: RootState) => state.updater);
    const dispatch = useDispatch();

    const lst = [
        "Column",
        "Bars",
        "Pie",
        "Donut",
        "Line",
        "Area",
        "Column Line",
        "Column Area",
    ];
    return (
        <div
            style={{ display: !params.show ? "none" : "" }}
            className="chng_graph"
        >
            {lst.map((x, i) => {
                var svg_prt = <svg></svg>;
                svg_prt = svgIcons(i) || <svg></svg>;
                return (
                    <div
                        onClick={() => {
                            if (project) {
                                dispatch(
                                    update({
                                        ...project,
                                        graph_selected: i,
                                    })
                                );
                            }
                        }}
                        title={x}
                        key={i}
                    >
                        {svg_prt}
                    </div>
                );
            })}
        </div>
    );
}

export default ChoseGraphsSection;
