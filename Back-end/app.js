import bodyParser from "body-parser";
import multer from "multer";
import express from "express";
import { generateToken } from "./functions/generate_token.js";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import path from "path";
import cors from "cors";
import {
    AddBackgroundImage,
    AddFileData,
    changeUserData,
    checkEmailNotExists,
    CreateNewProject,
    createUser,
    deleteProject,
    getAllProject,
    GetImages,
    getProject,
    getUserData,
    UpdateData,
    updateProject,
    UpdateSetImage,
} from "./db.js";
import { v_code_generator } from "./functions/generate_v_code.js";
import { SendEmail } from "./functions/email_confirm.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3001;
export const appuri = "http://localhost:3001";

app.use(express.static(path.join(__dirname, "public")));

app.use(express.static("/public/ImageDb"));
app.use(cors());
app.use(bodyParser.json());

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, "public/ImageDb");
    },
    filename: function (req, file, cb) {
        if (file.mimetype.includes("image/")) {
            const typ = path.extname(file.originalname);
            const dt = req.body.date;
            const img_name =
                file.originalname.slice(0, -typ.length) + "_" + dt + typ;
            cb(null, img_name);
        } else {
            cb(new Error("Not a valid image"), "error.png");
        }
    },
});
const upload = multer({ storage: storage });

app.post("/signup", async (req, res) => {
    console.log(req.body);
    const isNotExist = await checkEmailNotExists(req.body.email);
    if (isNotExist) {
        const generated_code = v_code_generator();
        const hashed = await bcrypt.hash(req.body.password, 10);
        createUser(req.body.email, hashed, false, generated_code, "")
            .then(async () => {
                res.sendStatus(200);
                console.log("user created Successfully");
                SendEmail(req.body.email, generated_code);
            })
            .catch((e) => {
                console.log(`sign up error: ${e}`);
            });
    } else {
        res.sendStatus(201);
    }
});

app.post("/check_vc", async (req, res) => {
    getUserData(req.body.email).then((r) => {
        if (r.v_code == req.body.otp) {
            changeUserData(req.body.email, { isConfirmed: true });
            res.sendStatus(200);
        } else {
            res.sendStatus(205);
        }
    });
});

app.post("/login", async (req, res) => {
    console.log(req.body);
    const isNotExist = await checkEmailNotExists(req.body.email);
    if (!isNotExist) {
        getUserData(req.body.email)
            .then(async (r) => {
                const isPassSame = await bcrypt.compare(
                    req.body.password,
                    r.password
                );
                if (r.isConfirmed) {
                    if (isPassSame) {
                        const token = generateToken();
                        changeUserData(req.body.email, { token: token });
                        res.send(token);
                    } else {
                        res.sendStatus(202);
                    }
                } else {
                    res.sendStatus(203);
                }
            })
            .catch((e) => {
                console.log("error login back-end", e);
            });
    } else {
        res.sendStatus(202);
    }
});

app.post("/check_token", async (req, res) => {
    const checkUser = await checkingUser(req);
    if (checkUser.validity) {
        res.sendStatus(200);
    } else {
        res.sendStatus(211);
    }
});

app.post("/create_new_project", async (req, res) => {
    const checkUser = await checkingUser(req);
    if (checkUser.validity) {
        CreateNewProject(
            checkUser.id,
            req.body.projectName,
            req.body.data,
            req.body.headers,
            req.body.dataName
        )
            .then(() => {
                res.sendStatus(200);
            })
            .catch((e) => {
                console.log(e);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(211);
    }
});

app.post("/get_all_projects", async (req, res) => {
    const checkUser = await checkingUser(req);
    console.log(checkUser);

    if (checkUser.validity) {
        const projects = await getAllProject(checkUser.id);
        if (projects) {
            res.send(projects);
        }
    } else {
        res.sendStatus(211);
    }
});

app.post("/get_project", async (req, res) => {
    const checkUser = await checkingUser(req);
    if (checkUser.validity) {
        getProject(checkUser.id, parseInt(req.body.projectId))
            .then((r) => {
                if (r != undefined) {
                    res.send(r);
                } else {
                    res.sendStatus(215);
                }
            })
            .catch((e) => {
                console.log(e);
                res.sendStatus(215);
            });
    } else {
        res.sendStatus(211);
    }
});

app.post("/delete_projects", async (req, res) => {
    const checkUser = await checkingUser(req);
    if (checkUser.validity) {
        console.log(req.body.projectIds);
        deleteProject(checkUser.id, req.body.projectIds)
            .then(() => {
                res.sendStatus(200);
            })
            .catch((e) => {
                console.log(e);
                res.sendStatus(215);
            });
    } else {
        res.sendStatus(211);
    }
});

app.post("/update_data", async (req, res) => {
    const checkUser = await checkingUser(req);
    if (checkUser.validity) {
        const ndt = UpdateData(checkUser.id, req.body.dtId, req.body.newData);
        if (ndt) {
            res.sendStatus(200);
        }
    } else {
        res.sendStatus(211);
    }
});

app.post("/add_file_data", async (req, res) => {
    console.log(req.body);
    const checkUser = await checkingUser(req);
    if (checkUser.validity) {
        await AddFileData(
            checkUser.id,
            req.body.prjid,
            req.body.fileName,
            req.body.data,
            req.body.hdrs
        ).then((r) => {
            console.log(r.id);
            res.send({ id: r.id });
        });
    } else {
        res.sendStatus(211);
    }
});

app.post("/update_data", async (req, res) => {
    const checkUser = await checkingUser(req);
    if (checkUser.validity) {
        const ndt = UpdateData(checkUser.id, req.body.dtId, req.body.newData);
        if (ndt) {
            res.sendStatus(200);
        }
    } else {
        res.sendStatus(211);
    }
});

app.post("/update_project", async (req, res) => {
    const checkUser = await checkingUser(req);
    if (checkUser.validity) {
        const ugd = updateProject(
            checkUser.id,
            req.body.projectId,
            req.body.newData
        );
        if (ugd) {
            res.sendStatus(200);
        }
    } else {
        res.sendStatus(211);
    }
});

var cpupload = upload.fields([{ name: "image" }]);

app.post("/upload_image", cpupload, async (req, res) => {
    const checkUser = await checkingUser(req);
    if (checkUser.validity) {
        const abi = await AddBackgroundImage(
            checkUser.id,
            parseInt(req.body.projectId),
            req.body.image_name,
            req.body.date
        );
        if (abi) {
            res.send(abi);
        }
    } else {
        res.sendStatus(211);
    }
});

app.post("/get_images", async (req, res) => {
    console.log(req.body);
    const checkUser = await checkingUser(req);
    if (checkUser.validity) {
        const gis = await GetImages(checkUser.id, parseInt(req.body.projectId));
        if (gis) {
            res.send(gis);
        }
    } else {
        res.sendStatus(211);
    }
});

app.post("/update_set_image", async (req, res) => {
    const checkUser = await checkingUser(req);
    if (checkUser.validity) {
        const usi = await UpdateSetImage(
            checkUser.id,
            req.body.background_imgs
        );
        if (usi) {
            res.send("updated successfully");
        }
    } else {
        res.sendStatus(211);
    }
});

async function checkingUser(req) {
    const isUserExist = (await checkEmailNotExists(req.body.email))
        ? false
        : true;
    if (isUserExist) {
        const userData = await getUserData(req.body.email);
        if (userData.token != req.body.token) {
            return { validity: false, id: -1 };
        } else {
            return { validity: true, id: userData.id };
        }
    } else {
        return { validity: false, id: -1 };
    }
}

app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
