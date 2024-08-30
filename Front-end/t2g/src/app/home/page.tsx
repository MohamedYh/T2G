"use client";
import axios from "axios";
import * as d3 from "d3";
import React, { useState, useEffect, useRef, Component } from "react";
import { server_url } from "../page";
import { useRouter } from "next/navigation";
import "./page.css";
import { cookies } from "next/headers";
import { BiSearch } from "react-icons/bi";
import { MdDelete, MdLogout, MdOutlineUploadFile } from "react-icons/md";
import { IoCheckmark, IoCreate } from "react-icons/io5";
import { FaCheck, FaFilter } from "react-icons/fa";
import Papa from "papaparse";
import { toast, ToastContainer } from "react-toastify";

interface Project {
    id: number;
    name: string;
    createdDate: Date;
}

interface DataObject {
    [key: string]: { [key: string]: string };
}

function Home() {
    const router = useRouter();

    const [loading, setLoading] = useState(true);
    const [openCreateNewProject, setOpenCreateNewProject] = useState(false);
    const [labelCsvWidth, setLabelCsvWidth] = useState(10);
    const [projectName, setProjectName] = useState("");
    const [selectList, setSelectList] = useState<boolean[]>([]);
    const [projects, setProjects] = useState<Project[]>([]);
    const [openSelectDelete, setOpenSelectDelete] = useState(false);
    const [pw, setPw] = useState(
        Math.floor((Math.min(window.innerWidth, 2200) - 15) / 377.5) * 377.5
    );

    const d3Container = useRef(null);
    const dvUploadCsvRef = useRef<HTMLDivElement>(null);
    const projectRef = useRef<HTMLDivElement | null>(null);

    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");
    const isLogged = localStorage.getItem("isLogged") == "true" ? true : false;

    const [data, setData] = useState<DataObject[]>([]);
    const [headers, setHeaders] = useState<string[]>([]);
    const [file, setFile] = useState<File>();

    useEffect(() => {
        if (!email || !token || !isLogged) {
            localStorage.clear();
            router.push("/login");
        } else {
            getProjects();
        }
    }, []);

    const getProjects = () => {
        axios
            .post(`${server_url}/get_all_projects`, {
                email,
                token,
            })
            .then((r) => {
                if (r.status == 200) {
                    const dt: Project[] = r.data;
                    console.log(dt);
                    setProjects(dt);
                } else if (r.status == 211) {
                    router.push("/login");
                    localStorage.clear();
                }
            })
            .catch((e) => {
                console.log("error when getting projects", e);
            });
    };

    useEffect(() => {
        console.log(data);
    }, [data]);

    useEffect(() => {
        if (dvUploadCsvRef.current) {
            setLabelCsvWidth(dvUploadCsvRef.current.clientWidth);
        }
    }, [dvUploadCsvRef.current, loading]);

    useEffect(() => {
        if (projectRef.current && window !== undefined) {
            const pwidth =
                projectRef.current.getBoundingClientRect().width + 30;
            const nop = Math.floor(
                (Math.min(window.innerWidth, 2200) - 15) / pwidth
            );
            console.log(Math.ceil(nop * pwidth));

            if (projects.length >= nop) {
                setPw(
                    Math.ceil(
                        Math.floor(
                            (Math.min(window.innerWidth, 2200) - 15) / pwidth
                        ) * pwidth
                    )
                );
            } else {
                setPw(window.innerWidth - 15);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [projectRef.current, loading, window]);

    useEffect(() => {
        console.log(pw);
    }, [pw]);

    useEffect(() => {
        console.log(projectName);
    }, [projectName]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (openSelectDelete) {
            for (let i = 0; i < projects.length; i++) {
                document.getElementsByClassName("bxprj")[i].className = "bxprj";
            }
            setSelectList(new Array(projects.length).fill(false));
        } else {
            for (let i = 0; i < projects.length; i++) {
                document.getElementsByClassName("bxprj")[i].className =
                    "bxprj sdx";
            }
        }
    }, [openSelectDelete]);

    if (loading) {
        return <div>Loading...</div>;
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            if (e.target.files.length) {
                const inputFile = e.target.files[0];
                const fileExtension = inputFile?.type.split("/")[1];
                if (fileExtension != "csv") {
                    toast.error("Please input a csv file");
                    return;
                }
                handleParse(inputFile);
                setProjectName(inputFile.name);
                setFile(inputFile);
            }
        }
    };

    const handleParse = (fil: File) => {
        console.log("parsing");

        if (!fil) return alert("Enter a valid file");
        const reader = new FileReader();

        reader.onload = async ({ target }) => {
            if (target) {
                const csv = Papa.parse(target.result as string, {
                    header: true,
                });
                const parsedData: object[] = csv?.data as object[];
                var res: DataObject[] = [];
                const keys = Object.keys(parsedData[0]);
                setHeaders(keys);
                parsedData.map((x) => {
                    const values: any[] = Object.values(x);
                    var obj: DataObject = {
                        [values[0]]: {},
                    };
                    for (let val = 1; val < values.length; val++) {
                        obj[values[0]][keys[val]] = values[val];
                    }
                    console.log(obj, values, keys);

                    res.push(obj);
                });
                HandleCreateNewProject(fil.name || "", res, keys);
                console.log(res);
                setData(res);
            }
        };
        reader.readAsText(fil);
    };

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

    function HandleDeleteProjects() {
        var prjids: number[] = [];
        selectList.map((x, i) => {
            if (x) {
                prjids.push(projects[i].id);
            }
        });

        axios
            .post(`${server_url}/delete_projects`, {
                email,
                token,
                projectIds: prjids,
            })
            .then((r) => {
                if (r.status == 200) {
                    setOpenSelectDelete(false);
                    getProjects();
                } else if (r.status == 211) {
                    router.push("/login");
                    localStorage.clear();
                } else if (r.status == 215) {
                    setOpenSelectDelete(false);
                }
            })
            .catch((e) => {
                console.log("error in deleting projects", e);
            });
    }

    function HandleCreateNewProject(
        projectName: string,
        data: DataObject[],
        headers: string[]
    ) {
        const prjnm = projectName.length == 0 ? "Untitled" : projectName;
        const dataName =
            data != undefined && data != null && data.length > 0 ? prjnm : "";
        console.log(projectName, prjnm, data, headers);

        axios
            .post(`${server_url}/create_new_project`, {
                email,
                token,
                projectName: prjnm,
                data,
                headers,
                dataName,
            })
            .then((r) => {
                if (r.status == 200) {
                    setOpenCreateNewProject(false);
                    getProjects();
                } else if (r.status == 211) {
                    router.push("/login");
                    localStorage.clear();
                }
            })
            .catch((e) => {
                console.log("error in creating new project", e);
            });
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
                <div
                    onClick={() => {
                        setOpenCreateNewProject(true);
                    }}
                    className="fnct1"
                >
                    <IoCreate />
                    <p>Create New Project</p>
                </div>
                <div ref={dvUploadCsvRef} className="fnct2">
                    <MdOutlineUploadFile />
                    <input
                        type="file"
                        name="csvFile"
                        id="csvFile"
                        onChange={handleFileChange}
                        accept=".csv"
                    />
                    <label
                        style={{ width: labelCsvWidth }}
                        htmlFor="csvFile"
                    ></label>
                    <p>Upload CSV File</p>
                </div>
                <div className="fnct3">
                    <FaFilter />
                    <p>Filter</p>
                </div>
                <div
                    onClick={() => {
                        const func = () => {
                            setSelectList(
                                new Array(projects.length).fill(false)
                            );
                            setOpenSelectDelete(false);
                        };
                        openSelectDelete ? func() : setOpenSelectDelete(true);
                    }}
                    className="fnct4"
                >
                    <MdDelete />
                    <p>Delete Projects</p>
                </div>
            </div>
            <h1>Projects</h1>
            <div className="cntrer">
                <div
                    className="projects"
                    style={{
                        width: pw,
                    }}
                >
                    {projects != null &&
                    projects != undefined &&
                    projects.length > 0
                        ? projects.map((x, i) => {
                              var mxlntvr = mxlnt(x.name.split(" "));
                              return (
                                  <>
                                      <div
                                          onClick={() => {
                                              if (openSelectDelete) {
                                                  document.getElementsByClassName(
                                                      "bxprj"
                                                  )[i].className =
                                                      "bxprj selecting_delete";
                                                  const lst = [...selectList];
                                                  lst[i] = !lst[i];
                                                  console.log(lst);
                                                  setTimeout(() => {
                                                      document.getElementsByClassName(
                                                          "bxprj"
                                                      )[i].className = "bxprj";
                                                  }, 1100);
                                                  setSelectList(lst);
                                              } else {
                                                  router.push(
                                                      `/project/${x.id}/`
                                                  );
                                              }
                                          }}
                                          className="bxprj sdx"
                                          ref={i == 0 ? projectRef : null}
                                      >
                                          {openSelectDelete ? (
                                              <div
                                                  style={{
                                                      backgroundColor:
                                                          selectList[i]
                                                              ? "#eb4848"
                                                              : "transparent",
                                                  }}
                                                  className="select_to_delete"
                                              >
                                                  {selectList[i] ? (
                                                      <FaCheck />
                                                  ) : null}
                                              </div>
                                          ) : null}
                                          <div className="shw"></div>
                                          <p
                                              title={x.name}
                                              className="prjtitle"
                                          >
                                              {x.name.length > 46
                                                  ? mxlntvr.mx == false
                                                      ? x.name.slice(0, 44) +
                                                        "..."
                                                      : x.name.slice(0, 19) +
                                                        "..."
                                                  : mxlntvr.mx == false
                                                  ? x.name
                                                  : x.name.slice(
                                                        0,
                                                        mxlntvr.lt
                                                    ) + "..."}
                                          </p>
                                      </div>
                                  </>
                              );
                          })
                        : null}
                </div>
            </div>
            <table>
                <thead>
                    {headers.map((x, index) => {
                        return <th key={index}>{x}</th>;
                    })}
                </thead>
                <tbody>
                    {data.map((x, index) => {
                        const lst = [
                            Object.keys(x)[0],
                            ...Object.values(x[Object.keys(x)[0]]),
                        ];
                        console.log(Object.values(x));

                        return (
                            <tr key={index}>
                                {lst.map((y, index) => {
                                    return <td key={index}>{y}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {openCreateNewProject ? (
                <>
                    <div className="cnp">
                        <h1>Create New Project</h1>
                        <input
                            onChange={(e) => {
                                setProjectName(e.target.value);
                            }}
                            value={projectName}
                            type="text"
                            maxLength={100}
                            placeholder="Untitled"
                        />
                        <div className="btnscrt">
                            <button
                                onClick={() => {
                                    setProjectName("");
                                    setOpenCreateNewProject(false);
                                }}
                                className="crnp1"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    console.log("hfdsjhf");
                                    HandleCreateNewProject(
                                        projectName,
                                        [{ "": { "": "" } }],
                                        [""]
                                    );
                                }}
                                className="crnp2"
                            >
                                Create
                            </button>
                        </div>
                    </div>
                </>
            ) : null}
            {openSelectDelete ? (
                <div onClick={HandleDeleteProjects} className="delete_btn">
                    <MdDelete />
                    <p>Delete Selected</p>
                </div>
            ) : null}
            <ToastContainer />
        </div>
    );
}

export default Home;
