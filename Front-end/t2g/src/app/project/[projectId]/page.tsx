"use client";
import React from "react";
import "./page.css";

function Project({ params }: { params: { projectId: string } }) {
    return <div>{"Project" + " " + params.projectId}</div>;
}

export default Project;
