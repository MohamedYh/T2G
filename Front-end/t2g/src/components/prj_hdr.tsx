"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/reduxStore";
import { update } from "@/store/slices/projectManger";
import { FaChevronDown } from "react-icons/fa";
import { updateAction } from "@/store/slices/actionUpdater";

function ProjectHeader() {
    const router = useRouter();

    const [projectName, setProjectName] = useState("");

    const project = useSelector((state: RootState) => state.updater);
    const dispatch = useDispatch();

    const [delayName, setDelayName] = useState<string>(project.name);

    function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (project) {
            dispatch(update({ ...project, name: e.target.value }));
        }
    }

    useEffect(() => {
        if (project.name != delayName) {
            console.log(project);
            setDelayName(project.name);
        }
    }, [project, project.name]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (project && project.name != delayName) {
                console.log(project.name, delayName);
                dispatch(update({ ...project, name: delayName }));
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [delayName, project]);

    return (
        <div className="hdrnv">
            <div className="txthdr">
                <h1
                    onClick={() => {
                        router.push("/home");
                    }}
                >
                    Project/
                </h1>
                <input
                    onChange={(e) => {
                        setDelayName(e.target.value);
                    }}
                    value={delayName}
                />
            </div>
            <div
                onClick={() => {
                    dispatch(updateAction());
                }}
                className="exprt"
            >
                <p>Export</p>
            </div>
        </div>
    );
}

export default ProjectHeader;
