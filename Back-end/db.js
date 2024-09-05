import { title } from "process";
import { PrismaClient } from "./prisma/generated/clientPg/index.js";
import path from "path";
import { appuri } from "./app.js";

const prisma = new PrismaClient();

export async function createUser(email, password, isConfirmed, v_code, token) {
    if (email) {
        try {
            const newUser = await prisma.user.create({
                data: {
                    email,
                    password,
                    isConfirmed,
                    v_code,
                    token,
                },
            });
            console.log("New user created:", newUser);
        } catch (error) {
            console.error("Error creating user:", error);
        }
    }
}

export async function checkEmailNotExists(email) {
    if (email) {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    email: email,
                },
            });
            return user == null;
        } catch (error) {
            console.error("Error checking email existence:", error);
            return false;
        }
    }
}

export async function getUserData(email) {
    if (email) {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    email: email,
                },
            });
            return user;
        } catch (error) {
            console.error("Error checking email existence:", error);
            return false;
        }
    }
}
export async function changeUserData(email, newData) {
    if (email) {
        try {
            const updatedUser = await prisma.user.update({
                where: {
                    email: email,
                },
                data: newData,
            });
            console.log("User data updated:", updatedUser);
            return updatedUser;
        } catch (error) {
            console.error("Error updating user data:", error);
            return null;
        }
    }
}

// create new project

export async function CreateNewProject(userId, name, data, headers, dataName) {
    const dtName = dataName.length > 0 ? dataName : "Sample Data 1";
    try {
        const project = await prisma.projects.create({
            data: {
                name,
                userId,
                data: {
                    create: [
                        {
                            name: dtName,
                            data: JSON.stringify(data),
                            headers: JSON.stringify(headers),
                        },
                    ],
                },
                Column: { create: {} },
                Area: { create: {} },
                Bars: { create: {} },
                Donut: { create: {} },
                Line: { create: {} },
                Pie: { create: {} },
                Column_Area: { create: {} },
                Column_Line: { create: {} },
            },
            include: { user: true },
        });
        console.log("new project created", project);
    } catch (e) {
        console.log(e);
    }
}

export async function getAllProject(userId) {
    try {
        var projects = [];
        await prisma.user
            .findUnique({ where: { id: userId }, include: { projects: true } })
            .then((r) => {
                var data = [];
                r.projects.map((x) => {
                    data.push({
                        id: x.id,
                        name: x.name,
                        createdDate: x.createdDate,
                    });
                });
                projects = data;
            });
        return projects;
    } catch (e) {
        console.log("error here", e);
    }
}

export async function getProject(userId, projectId) {
    try {
        const project = await prisma.projects.findUnique({
            where: {
                id: projectId,
                userId: userId,
            },
            include: {
                data: true,
                background_images: true,
                Column: true,
                Bars: true,
                Pie: true,
                Donut: true,
                Area: true,
                Line: true,
                Column_Area: true,
                Column_Line: true,
            },
        });
        if (project) {
            delete project?.userId;
            return project;
        }
    } catch (e) {
        console.log(e);
    }
}

export async function deleteProject(userId, projectsIds) {
    try {
        await prisma.column.deleteMany({
            where: {
                projectId: {
                    in: projectsIds,
                },
            },
        });
        await prisma.bars.deleteMany({
            where: {
                projectId: {
                    in: projectsIds,
                },
            },
        });
        await prisma.pie.deleteMany({
            where: {
                projectId: {
                    in: projectsIds,
                },
            },
        });
        await prisma.donut.deleteMany({
            where: {
                projectId: {
                    in: projectsIds,
                },
            },
        });
        await prisma.line.deleteMany({
            where: {
                projectId: {
                    in: projectsIds,
                },
            },
        });
        await prisma.area.deleteMany({
            where: {
                projectId: {
                    in: projectsIds,
                },
            },
        });
        await prisma.column_Line.deleteMany({
            where: {
                projectId: {
                    in: projectsIds,
                },
            },
        });
        await prisma.column_Area.deleteMany({
            where: {
                projectId: {
                    in: projectsIds,
                },
            },
        });
        await prisma.background_Image.deleteMany({
            where: {
                projectId: {
                    in: projectsIds,
                },
            },
        });

        await prisma.data.deleteMany({
            where: {
                projectId: {
                    in: projectsIds,
                },
                project: {
                    userId: userId,
                },
            },
        });

        await prisma.projects.deleteMany({
            where: {
                id: {
                    in: projectsIds,
                },
                userId: userId,
            },
        });
    } catch (e) {
        console.log(e);
    }
}

export async function AddFileData(userId, prjId, fileName, data, headers) {
    if (prjId) {
        console.log(prjId);
        try {
            console.log(userId, prjId, fileName, data, headers);
            const isTrueProject =
                prisma.projects.findUnique({
                    where: {
                        id: prjId,
                        userId: userId,
                    },
                }) != null;
            if (isTrueProject) {
                const fileData = await prisma.data.create({
                    data: {
                        data: JSON.stringify(data),
                        headers: JSON.stringify(headers),
                        name: fileName,
                        projectId: prjId,
                    },
                    include: {
                        project: true,
                    },
                });
                console.log("******", fileData.id);
                return { id: fileData.id };
            }
        } catch (e) {
            console.log("error while adding file", e);
        }
    } else {
        console.log("hds", projectId);
    }
}

export async function UpdateData(userId, dtId, newData) {
    console.log("----------------");
    if (dtId) {
        try {
            const ndt = await prisma.data.update({
                where: {
                    id: dtId,
                    project: {
                        userId: userId,
                    },
                },
                data: newData,
            });
            if (ndt) {
                console.log("update data successfully");
            }
        } catch (e) {
            console.log("error while change select data", e);
        }
    }
}

export async function updateProject(userId, projectId, newData) {
    console.log("----------------", newData);
    delete newData.Column.id;
    delete newData.Column.projectId;
    delete newData.Bars.id;
    delete newData.Bars.projectId;
    delete newData.Pie.id;
    delete newData.Pie.projectId;
    delete newData.Donut.id;
    delete newData.Donut.projectId;
    delete newData.Line.id;
    delete newData.Line.projectId;
    delete newData.Area.id;
    delete newData.Area.projectId;
    delete newData.Column_Line.id;
    delete newData.Column_Line.projectId;
    delete newData.Column_Area.id;
    delete newData.Column_Area.projectId;
    console.log("#%$", newData);
    if (projectId) {
        try {
            const ugs = await prisma.projects.update({
                where: {
                    id: projectId,
                    userId: userId,
                },
                data: {
                    name: newData.name,
                    title: newData.title,
                    background_color: newData.background_color,
                    graph_selected: newData.graph_selected,
                    data_selected: newData.data_selected,
                    Column: {
                        update: newData.Column,
                    },
                    Bars: {
                        update: newData.Bars,
                    },
                    Pie: {
                        update: newData.Pie,
                    },
                    Donut: {
                        update: newData.Donut,
                    },
                    Area: {
                        update: newData.Area,
                    },
                    Line: {
                        update: newData.Line,
                    },
                    Column_Area: {
                        update: newData.Column_Area,
                    },
                    Column_Line: {
                        update: newData.Column_Line,
                    },
                },
            });

            if (ugs) {
                console.log("update project's graphs successfully");
            }
        } catch (e) {
            console.log("error while change select data", e);
        }
    }
}

export async function AddBackgroundImage(userId, projectId, img_name, date) {
    console.log("----------------");
    if (projectId) {
        try {
            const isTrueProject = prisma.projects.findUnique({
                where: {
                    id: projectId,
                    userId: userId,
                },
            });
            console.log(isTrueProject);
            if (isTrueProject) {
                const abi = await prisma.background_Image.create({
                    data: {
                        image_name: img_name,
                        Date: date,
                        is_set: false,
                        projectId: projectId,
                    },
                });
                if (abi) {
                    console.log("add image to db successfully");
                    return { id: abi.id };
                }
            }
        } catch (e) {
            console.log("error while change select data", e);
        }
    }
}

export async function GetImages(userId, projectId) {
    console.log("----------------");
    if (projectId) {
        try {
            const isTrueProject =
                prisma.projects.findUnique({
                    where: {
                        id: projectId,
                        userId: userId,
                    },
                }) != null;
            if (isTrueProject) {
                const gis = await prisma.background_Image.findMany({
                    where: {
                        projectId: projectId,
                    },
                });
                if (gis) {
                    var lst = [];
                    gis.map((x, i) => {
                        const typ = path.extname(x.image_name);
                        const src_img =
                            appuri +
                            "/ImageDb/" +
                            x.image_name.slice(0, -typ.length) +
                            "_" +
                            x.Date +
                            typ;
                        lst.push(src_img);
                    });
                    console.log(lst);
                    return lst;
                }
            }
        } catch (e) {
            console.log("error while change select data", e);
        }
    }
}

export async function UpdateSetImage(userId, BackgroundImages) {
    console.log("----------------");
    if (userId) {
        try {
            BackgroundImages.map(async (x, i) => {
                console.log(x);
                await prisma.background_Image.update({
                    where: {
                        id: x.id,
                        project: {
                            userId: userId,
                        },
                    },
                    data: x,
                });
            });
            return "3";
        } catch (e) {
            console.log("error while change select data", e);
        }
    }
}
