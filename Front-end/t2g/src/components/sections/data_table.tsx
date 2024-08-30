"use client";
import { server_url } from "@/app/page";
import { Data, DataObject } from "@/interfaces/project";
import { RootState } from "@/store/reduxStore";
import axios from "axios";
import Papa from "papaparse";
import ReplaceIcondr from "../../../public/change-record-type-svgrepo-com.svg";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { update } from "@/store/slices/projectManger";
import { GrDocumentCsv } from "react-icons/gr";
import { MdErrorOutline, MdOutlineChangeCircle } from "react-icons/md";
import { IoCloudUploadOutline } from "react-icons/io5";

function DataSection(params: { show: boolean }) {
    const router = useRouter();

    const [tableDataMap, setTableDataMap] = useState<string[][]>([]);
    const [dataTable, setDataTable] = useState<Data | undefined>(undefined);
    const [typeInfo, setTypeInfo] = useState(false);
    const [headers, setHeaders] = useState<string[]>([]);
    const [table, setTable] = useState<DataObject[]>([]);
    const uppercaseAlphabets = Array.from({ length: 26 }, (_, index) =>
        String.fromCharCode(65 + index)
    );
    const [typeError, setTypeError] = useState(false);

    const [projectcp, setProjectcp] = useState();

    const dispatch = useDispatch();
    const project = useSelector((state: RootState) => state.updater);
    const projectId = project.id;

    const email = localStorage.getItem("email") || "";
    const token = localStorage.getItem("token") || "";

    useEffect(() => {
        if (project) {
            setTableDataMap([]);
            setDataTable(project.data[project.data_selected]);
            try {
                // -----------------------------------------------
                const headersArr: string[] = JSON.parse(
                    project.data[project.data_selected].headers || "[]"
                );
                console.log(headersArr);
                headersArr.push(...Array(26 - headersArr.length).fill(""));
                setHeaders(headersArr);
                // ---------------------------------------
                const dtsarr = project.data[project.data_selected].data;
                const tableArr: DataObject[] = JSON.parse(dtsarr || "[]");
                console.log("tableArr", project.data[project.data_selected]);
                setTableDataMap((tdm) => [...tdm, headersArr]);

                // ---------------------------------------
                tableArr.push(
                    ...Array(11 - tableArr.length).fill({ "": { "": "" } })
                );
                tableArr.map((x) => {
                    console.log();
                    const lst = [
                        Object.keys(x)[0],
                        ...Object.values(x[Object.keys(x)[0]]),
                    ];
                    lst.push(...Array(26 - lst.length).fill(""));
                    setTableDataMap((tdm) => [...tdm, lst]);
                });
                console.log(tableArr);
                setTable(tableArr);
            } catch (error) {
                console.error("Error parsing JSON data:", error);
            }
        }
    }, [project]);

    function HandleTableMapChange() {
        var limitY = 12;
        var limitX = 26;
        for (let i = 0; i < 12; i++) {
            if (tableDataMap[i][0].length == 0) {
                limitY = i;
                break;
            }
        }
        for (let y = 0; y < 26; y++) {
            if (tableDataMap[0][y].length == 0) {
                limitX = y;
                break;
            }
        }

        const map_lst = [];

        for (let m = 1; m < limitY; m++) {
            const arr = [];
            for (let n = 1; n < limitX; n++) {
                arr.push(tableDataMap[m][n]);
            }
            map_lst.push(arr);
        }

        console.log(map_lst);
    }

    useEffect(() => {
        if (tableDataMap.length == 12) {
            HandleTableMapChange();
        }
    }, [tableDataMap]);

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
                    if (x[Object.keys(x)[0] as keyof object] != "") {
                        const values: any[] = Object.values(x);
                        var obj: DataObject = {
                            [values[0]]: {},
                        };
                        for (let val = 1; val < values.length; val++) {
                            obj[values[0]][keys[val]] = values[val];
                        }
                        console.log(obj, values, keys);

                        res.push(obj);
                    }
                });
                console.log(res);
                HandleAddFile(fil.name || "", res, keys);
                console.log(res);
            }
        };
        reader.readAsText(fil);
    };

    function HandleAddFile(
        fileName: string,
        data: DataObject[],
        hdrs: string[]
    ) {
        axios
            .post(`${server_url}/add_file_data`, {
                email,
                token,
                prjid: projectId,
                fileName,
                data,
                hdrs,
            })
            .then((r) => {
                if (r.status == 200) {
                    if (project) {
                        const idp: number = r.data.id;
                        console.log(r.data);
                        dispatch(
                            update({
                                ...project,
                                data: [
                                    ...project.data,
                                    {
                                        data: JSON.stringify(data),
                                        headers: JSON.stringify(hdrs),
                                        id: idp,
                                        name: fileName,
                                        projectId,
                                    },
                                ],
                            })
                        );
                        console.log({
                            ...project,
                            data: [
                                ...project.data,
                                {
                                    data: JSON.stringify(data),
                                    headers: JSON.stringify(hdrs),
                                    id: idp,
                                    name: fileName,
                                    projectId,
                                },
                            ],
                        });
                    }
                } else if (r.status == 211) {
                    localStorage.clear();
                    router.push("/login");
                }
            });
    }

    const changeRoles = () => {
        if (project.data[project.data_selected]) {
            const robj: DataObject[] = JSON.parse(
                project.data[project.data_selected].data
            );

            const newDt: DataObject[] = [];

            const internal_keys = Object.keys(
                robj[0][Object.keys(robj[0])[0] as keyof object] as keyof object
            );
            const external_keys = robj.map((m, r) => Object.keys(m)[0]);

            internal_keys.map((v, i) => {
                var obj: DataObject = {};
                obj[v] = {};
                external_keys.map((x, j) => {
                    obj[v][x] = robj[j][x][v];
                });
                console.log(obj);
                newDt.push(obj);
            });

            console.log(newDt);
            let newDtStr = JSON.stringify(newDt);
            console.log(newDtStr);
            var dtslc = [...project.data];
            dtslc[project.data_selected] = {
                ...dtslc[project.data_selected],
                data: newDtStr,
                headers: JSON.stringify(["", ...external_keys]),
            };
            dispatch(update({ ...project, data: dtslc }));
        }
    };

    function HandleChangeTableValues(inputVl: string, m: number, n: number) {
        console.log("fjd");
        var dts = [...tableDataMap];
        dts[m][n] = inputVl;

        if (project) {
            const new_dt = inputVl;
            console.log(new_dt);
            const data_list: Data[] = [...project.data];
            var raw_data = { ...data_list[project.data_selected] };
            var cdt: DataObject[] = JSON.parse(raw_data.data);
            for (let i = 0; i < cdt.length; i++) {
                if (Object.keys(cdt[i])[0] == dts[m][0]) {
                    console.log(dts[m][0]);
                    cdt[i][dts[m][0]][dts[0][n]] = new_dt + "";
                }
            }
            console.log(cdt);
            raw_data.data = JSON.stringify(cdt);
            data_list[project.data_selected] = raw_data;
            console.log(data_list);
            // ----------------------------------------------------------------------
            dispatch(update({ ...project, data: data_list }));
            setTableDataMap(dts);
        }
    }

    function HandleChangeTableKeys(
        inputVl: string,
        m: number,
        n: number,
        isHeaders: boolean
    ) {
        console.log(m, n);

        var dts = [...tableDataMap];
        dts[0][n] = inputVl;
        console.log(dts);
        if (project) {
            if (isHeaders) {
                if (tableDataMap[0][n - 1] != "" || n == 1) {
                    const data_list: Data[] = [...project.data];
                    var raw_data = { ...data_list[project.data_selected] };
                    var cdt: DataObject[] = JSON.parse(raw_data.data);
                    var lst_hdrs = [...tableDataMap[0]];

                    var lrs = 26;
                    for (let r = 1; r < 26; r++) {
                        if (r != 25) {
                            if (lst_hdrs[r] == "" && lst_hdrs[r + 1] == "") {
                                lrs = r + 0;
                                break;
                            }
                        } else {
                            if (lst_hdrs[r] == "") {
                                lrs = r + 0;
                                break;
                            }
                        }
                    }
                    lst_hdrs = lst_hdrs.slice(0, lrs);
                    console.log("lst_hdrs", lst_hdrs, n, inputVl);
                    for (let i = 0; i < cdt.length; i++) {
                        const fthr = Object.keys(cdt[i])[0];
                        if (
                            Object.values(
                                cdt[i][Object.keys(cdt[i])[0] as keyof object]
                            ).length >= n
                        ) {
                            console.log(i);
                            var obj: DataObject = {};
                            obj[fthr] = {};
                            const vls = Object.keys(
                                cdt[i][Object.keys(cdt[i])[0]]
                            );
                            console.log(vls, fthr, cdt[i]);
                            for (let y = 0; y < vls.length; y++) {
                                const r = y + 0;
                                console.log(cdt[i][fthr], vls[y], cdt[i], fthr);

                                if (r != n - 1) {
                                    obj[fthr][vls[y]] =
                                        cdt[i][fthr][vls[y]] + "";
                                    console.log(obj, r);
                                } else {
                                    obj[fthr][inputVl] =
                                        cdt[i][fthr][vls[y]] + "";
                                    console.log(obj, r);
                                }
                            }

                            console.log("fds");
                            console.log(obj);
                            cdt[i] = obj;
                        } else {
                            cdt[i][fthr][inputVl] = "";
                            console.log(cdt[i][fthr], inputVl);
                        }
                    }
                    console.log(
                        Object.keys(
                            cdt[0][Object.keys(cdt[0])[0] as keyof object]
                        ),
                        n,
                        tableDataMap[m][n]
                    );
                    console.log(cdt);
                    raw_data.data = JSON.stringify(cdt);
                    raw_data.headers = JSON.stringify(lst_hdrs);
                    console.log(raw_data);
                    data_list[project.data_selected] = raw_data;
                    console.log(data_list);
                    // -----------------------------------------------
                    dispatch(update({ ...project, data: data_list }));
                    setTableDataMap(dts);
                }
            } else {
                const data_list: Data[] = [...project.data];
                var raw_data = { ...data_list[project.data_selected] };
                var cdt: DataObject[] = JSON.parse(raw_data.data);
                console.log("ds", m - 1, cdt.length);
                if (m - 1 < cdt.length) {
                    const obj: DataObject = {};
                    obj[inputVl as keyof object] =
                        cdt[m - 1][Object.keys(cdt[m - 1])[0]];
                    cdt.splice(m - 1, 1, obj);
                } else if (m - 1 == cdt.length) {
                    const kys = Object.keys(cdt[0][Object.keys(cdt[0])[0]]);
                    var obj: DataObject = {};
                    obj[inputVl] = {};
                    kys.map((x) => {
                        obj[inputVl][x] = "";
                    });
                    cdt.push(obj);
                    console.log(kys, obj);
                }
                raw_data.data = JSON.stringify(cdt);
                data_list[project.data_selected] = raw_data;
                console.log(cdt);
                // --------------------------------------------
                dispatch(update({ ...project, data: data_list }));
                setTableDataMap(dts);
            }
        }
    }

    function checkData() {
        setTypeInfo(false);
        if (project.data) {
            var objcp: DataObject[] = JSON.parse(
                project.data[project.data_selected].data
            );
            for (let index = 0; index < objcp.length; index++) {
                if (Object.keys(objcp[index])[0] == "") {
                    objcp.splice(index, 1);
                    break;
                }
            }

            objcp.map((v, i) => {
                delete objcp[i][Object.keys(objcp[i])[0]][""];
            });
            console.log(objcp);
            const hdrs = Object.keys(objcp[0][Object.keys(objcp[0])[0]]);
            let newDtStr = JSON.stringify(objcp);
            var dtslc = [...project.data];
            dtslc[project.data_selected] = {
                ...dtslc[project.data_selected],
                data: newDtStr,
                headers: JSON.stringify(["", ...hdrs]),
            };
            dispatch(update({ ...project, data: dtslc }));
        }
    }

    if (table && headers) {
        return (
            <>
                <div style={{ display: !params.show ? "none" : "" }}>
                    <div className="imprtcsv">
                        <IoCloudUploadOutline />
                        <input
                            id="Add_File_Data"
                            name="Add_File_Data"
                            className="inptfladd"
                            onChange={handleFileChange}
                            type="file"
                            accept=".csv"
                        />
                        <label htmlFor="Add_File_Data" />
                        <p className="imprt_txtcsv">Import</p>
                        <p className="csvtxt">.csv</p>
                    </div>
                    {typeError ? (
                        <div className="errcntr">
                            <MdErrorOutline />
                            <p style={{ fontSize: "13px", marginLeft: "10px" }}>
                                You Can&apos;t Type In Cell Without Identifiers
                            </p>
                        </div>
                    ) : null}
                    {typeInfo ? (
                        <div
                            style={{ backgroundColor: "#ff8c08" }}
                            className="errcntr"
                        >
                            <MdErrorOutline />
                            <p style={{ fontSize: "13px", marginLeft: "5px" }}>
                                All Values associated with this column will be
                                erased
                            </p>
                        </div>
                    ) : null}
                    <div
                        style={{
                            marginTop: "17px",
                            height: "350px",
                            overflow: "auto",
                        }}
                    >
                        <table>
                            <tr>
                                <td
                                    onClick={() => {
                                        changeRoles();
                                    }}
                                    style={{ cursor: "pointer" }}
                                >
                                    <svg
                                        fill="#707070"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15px"
                                        height="15px"
                                        viewBox="0 0 52 52"
                                        enable-background="new 0 0 52 52"
                                    >
                                        <path
                                            d="M20,37.5c0-0.8-0.7-1.5-1.5-1.5h-15C2.7,36,2,36.7,2,37.5v11C2,49.3,2.7,50,3.5,50h15c0.8,0,1.5-0.7,1.5-1.5
	V37.5z"
                                        />
                                        <path
                                            d="M8.1,22H3.2c-1,0-1.5,0.9-0.9,1.4l8,8.3c0.4,0.3,1,0.3,1.4,0l8-8.3c0.6-0.6,0.1-1.4-0.9-1.4h-4.7
	c0-5,4.9-10,9.9-10V6C15,6,8.1,13,8.1,22z"
                                        />
                                        <path
                                            d="M41.8,20.3c-0.4-0.3-1-0.3-1.4,0l-8,8.3c-0.6,0.6-0.1,1.4,0.9,1.4h4.8c0,6-4.1,10-10.1,10v6
	c9,0,16.1-7,16.1-16H49c1,0,1.5-0.9,0.9-1.4L41.8,20.3z"
                                        />
                                        <path
                                            d="M50,3.5C50,2.7,49.3,2,48.5,2h-15C32.7,2,32,2.7,32,3.5v11c0,0.8,0.7,1.5,1.5,1.5h15c0.8,0,1.5-0.7,1.5-1.5
	V3.5z"
                                        />
                                    </svg>
                                </td>
                                {uppercaseAlphabets.map((x) => {
                                    return (
                                        <>
                                            <td>{x}</td>
                                        </>
                                    );
                                })}
                            </tr>
                            <tr>
                                <th>0</th>
                                {tableDataMap.length == 12
                                    ? tableDataMap[0].map((x, index) => {
                                          return (
                                              <th key={index}>
                                                  <input
                                                      onBlur={() => {
                                                          checkData();
                                                      }}
                                                      onChange={(e) => {
                                                          if (
                                                              project &&
                                                              project.data
                                                          ) {
                                                              const dt: DataObject[] =
                                                                  JSON.parse(
                                                                      project
                                                                          .data[
                                                                          project
                                                                              .data_selected
                                                                      ].data
                                                                  );
                                                              if (
                                                                  e.target
                                                                      .value ==
                                                                  ""
                                                              ) {
                                                                  setTypeInfo(
                                                                      true
                                                                  );
                                                              } else {
                                                                  setTypeInfo(
                                                                      false
                                                                  );
                                                              }
                                                              console.log(
                                                                  Object.keys(
                                                                      dt[0][
                                                                          Object.keys(
                                                                              dt[0]
                                                                          )[0]
                                                                      ]
                                                                  )
                                                              );
                                                              const isOnlyDigits =
                                                                  /^\d+$/.test(
                                                                      e.target
                                                                          .value
                                                                  );

                                                              if (
                                                                  !Object.keys(
                                                                      dt[0][
                                                                          Object.keys(
                                                                              dt[0]
                                                                          )[0]
                                                                      ]
                                                                  ).includes(
                                                                      e.target
                                                                          .value
                                                                  ) &&
                                                                  !isOnlyDigits
                                                              ) {
                                                                  HandleChangeTableKeys(
                                                                      e.target
                                                                          .value,
                                                                      0,
                                                                      index,
                                                                      true
                                                                  );
                                                              } else if (
                                                                  isOnlyDigits
                                                              ) {
                                                                  toast.error(
                                                                      "header can't be a number"
                                                                  );
                                                              }
                                                          }
                                                      }}
                                                      value={
                                                          index == 0 ? "" : x
                                                      }
                                                      disabled={index == 0}
                                                  />
                                              </th>
                                          );
                                      })
                                    : null}
                            </tr>
                            {tableDataMap.length == 12
                                ? tableDataMap
                                      .slice(1, tableDataMap.length)
                                      .map((x, ixy) => {
                                          console.log(ixy);
                                          const indexY = ixy + 1;
                                          return (
                                              <tr key={indexY}>
                                                  <td>{indexY}</td>
                                                  {x.map((y, indexX) => {
                                                      return (
                                                          <td key={indexX}>
                                                              <input
                                                                  style={{
                                                                      fontWeight:
                                                                          indexX ==
                                                                          0
                                                                              ? "bold"
                                                                              : "",
                                                                  }}
                                                                  className="inptsvl"
                                                                  title={y}
                                                                  type="text"
                                                                  value={
                                                                      indexX !=
                                                                          0 &&
                                                                      y != ""
                                                                          ? parseInt(
                                                                                y
                                                                            )
                                                                          : y
                                                                  }
                                                                  onFocus={(
                                                                      e
                                                                  ) => {
                                                                      if (
                                                                          (tableDataMap[0][
                                                                              indexX
                                                                          ] ==
                                                                              "" ||
                                                                              tableDataMap[
                                                                                  indexY
                                                                              ][0] ==
                                                                                  "") &&
                                                                          indexX !=
                                                                              0
                                                                      ) {
                                                                          console.log(
                                                                              indexY,
                                                                              indexX
                                                                          );
                                                                          setTypeError(
                                                                              true
                                                                          );
                                                                      } else {
                                                                          console.log(
                                                                              indexY,
                                                                              indexX,
                                                                              tableDataMap[0][
                                                                                  indexX
                                                                              ]
                                                                          );
                                                                      }
                                                                  }}
                                                                  onBlur={() => {
                                                                      checkData();
                                                                      setTypeError(
                                                                          false
                                                                      );
                                                                      setTypeInfo(
                                                                          false
                                                                      );
                                                                  }}
                                                                  onChange={(
                                                                      e
                                                                  ) => {
                                                                      console.log(
                                                                          indexX
                                                                      );
                                                                      if (
                                                                          e
                                                                              .target
                                                                              .value ==
                                                                          ""
                                                                      ) {
                                                                          setTypeInfo(
                                                                              true
                                                                          );
                                                                      } else {
                                                                          setTypeInfo(
                                                                              false
                                                                          );
                                                                      }
                                                                      const isOnlyDigits =
                                                                          /^\d+$/.test(
                                                                              e
                                                                                  .target
                                                                                  .value
                                                                          );
                                                                      console.log(
                                                                          isOnlyDigits,
                                                                          e
                                                                              .target
                                                                              .value
                                                                      );
                                                                      if (
                                                                          (isOnlyDigits ||
                                                                              e
                                                                                  .target
                                                                                  .value
                                                                                  .length ==
                                                                                  0) &&
                                                                          indexX !=
                                                                              0
                                                                      ) {
                                                                          if (
                                                                              tableDataMap[0][
                                                                                  indexX
                                                                              ] !=
                                                                                  "" &&
                                                                              tableDataMap[
                                                                                  indexY
                                                                              ][0] !=
                                                                                  ""
                                                                          ) {
                                                                              HandleChangeTableValues(
                                                                                  e
                                                                                      .target
                                                                                      .value,
                                                                                  indexY,
                                                                                  indexX
                                                                              );
                                                                          } else {
                                                                              console.log(
                                                                                  tableDataMap,
                                                                                  indexY,
                                                                                  indexX,
                                                                                  tableDataMap[0][
                                                                                      indexY
                                                                                  ],
                                                                                  tableDataMap[
                                                                                      indexY
                                                                                  ][0]
                                                                              );
                                                                              toast.error(
                                                                                  "you can't type in a cell without identifiers"
                                                                              );
                                                                          }
                                                                      } else if (
                                                                          indexX ==
                                                                          0
                                                                      ) {
                                                                          HandleChangeTableKeys(
                                                                              e
                                                                                  .target
                                                                                  .value,
                                                                              indexY,
                                                                              indexX,
                                                                              false
                                                                          );
                                                                      }
                                                                  }}
                                                              />
                                                          </td>
                                                      );
                                                  })}
                                              </tr>
                                          );
                                      })
                                : null}
                        </table>
                    </div>
                    <div className="files_data">
                        {project?.data.map((x, i) => {
                            return (
                                <>
                                    <div
                                        onClick={() => {
                                            dispatch(
                                                update({
                                                    ...project,
                                                    data_selected: i,
                                                })
                                            );
                                        }}
                                        id={
                                            project.data_selected == i
                                                ? "data_is_selected"
                                                : ""
                                        }
                                        className="data_selected"
                                    >
                                        <GrDocumentCsv />
                                        <p>{x.name}</p>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </>
        );
    }
}

export default DataSection;
