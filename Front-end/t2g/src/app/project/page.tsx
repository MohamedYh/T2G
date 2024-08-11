"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

function ProjectIntro() {
    const router = useRouter();

    useEffect(() => {
        router.push("/home");
    });
    return <div>Please Select Project</div>;
}

export default ProjectIntro;
