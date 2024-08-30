"use client";
import { server_url } from "@/app/page";
import { RootState } from "@/store/reduxStore";
import { update } from "@/store/slices/projectManger";
import { useRouter } from "next/navigation";
import { svgIcons } from "@/svg_icons/svg_icons";
import axios from "axios";
import { extname } from "path";
import React from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

function BackgroundImagesSection(params: { show: boolean }) {
    const router = useRouter();

    const project = useSelector((state: RootState) => state.updater);
    const dispatch = useDispatch();

    const email = localStorage.getItem("email") || "";
    const token = localStorage.getItem("token") || "";
    const projectId = project.id;

    function handleImageChange(file: File) {
        const dtn = Date.now().toString();
        const formdata = new FormData();
        formdata.append("email", email);
        formdata.append("token", token);
        formdata.append("projectId", projectId.toString());
        formdata.append("date", dtn);
        formdata.append("image_name", file.name);
        formdata.append("image", file);

        console.log(formdata, file);
        axios.post(`${server_url}/upload_image`, formdata).then((r) => {
            if (r.status == 200) {
                if (project) {
                    dispatch(
                        update({
                            ...project,
                            background_images: [
                                ...project?.background_images,
                                {
                                    id: r.data.id,
                                    Date: dtn,
                                    image_name: file.name,
                                    is_set: false,
                                    projectId: projectId,
                                },
                            ],
                        })
                    );
                }
            } else if (r.status == 211) {
            }
        });
    }

    return (
        <div style={{ display: !params.show ? "none" : "" }}>
            <div className="imprtcsv">
                <IoCloudUploadOutline />
                <input
                    id="Add_Image"
                    name="Add_Image"
                    className="inptfladd"
                    onChange={(e) => {
                        e.target.files
                            ? handleImageChange(e.target.files[0])
                            : null;
                    }}
                    type="file"
                    accept=".jpeg, .png"
                />
                <label htmlFor="Add_Image" />
                <p className="imprt_txtcsv">Import</p>
                <p className="csvtxt">.png/ .jpeg</p>
            </div>
            <div className="bck_clr">
                <label>Background Color</label>
                <input
                    id="inptclrgrph"
                    style={{ width: "30px", height: "30px" }}
                    type="color"
                    value={project?.background_color}
                    onChange={(e) => {
                        const color = e.target.value;
                        if (project) {
                            dispatch(
                                update({
                                    ...project,
                                    background_color: color,
                                })
                            );
                        }
                    }}
                />
            </div>
            <label className="bckrimglbl">Background Images</label>
            <div className="imgs_bck_cntr">
                {project?.background_images.map((x, i) => {
                    const typ = extname(x.image_name);
                    const img_src = `${server_url}/ImageDb/${x.image_name.slice(
                        0,
                        -typ.length
                    )}_${x.Date}${typ}`;
                    return (
                        <div
                            key={i}
                            className="img_bx"
                            title={x.image_name}
                            onClick={() => {
                                var lst = [...project.background_images];
                                for (
                                    let r = 0;
                                    r < project.background_images.length;
                                    r++
                                ) {
                                    lst[r] =
                                        i == r
                                            ? {
                                                  ...lst[r],
                                                  is_set: !lst[r].is_set,
                                              }
                                            : { ...lst[r], is_set: false };
                                }
                                axios
                                    .post(`${server_url}/update_set_image`, {
                                        email,
                                        token,
                                        background_imgs: lst,
                                    })
                                    .then((r) => {
                                        if (r.status == 200) {
                                        } else if (r.status == 211) {
                                            localStorage.clear();
                                            router.push("/login");
                                        }
                                    });
                                dispatch(
                                    update({
                                        ...project,
                                        background_images: lst,
                                    })
                                );
                            }}
                        >
                            <Image
                                loader={() => img_src}
                                src={img_src}
                                height={0}
                                width={0}
                                alt=""
                                key={i}
                                style={{ width: "auto", height: "100%" }}
                            />
                            {project.background_images[i].is_set ? (
                                <div className="slctd_img">
                                    <p>Selected Imaage</p>
                                </div>
                            ) : null}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default BackgroundImagesSection;
