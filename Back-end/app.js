import bodyParser from "body-parser";
import express from "express";
import { generateToken } from "./functions/generate_token.js";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import cors from "cors";
import {
    changeUserData,
    checkEmailNotExists,
    createUser,
    getUserData,
} from "./db.js";
import { v_code_generator } from "./functions/generate_v_code.js";
import { SendEmail } from "./functions/email_confirm.js";

const app = express();
const port = 3001;
export const appuri = "http://localhost:3001";

app.use(cors());
app.use(bodyParser.json());

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
            res.send(200);
        } else {
            res.send(205);
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
    const isNotExist = await checkEmailNotExists(req.body.email);
    if (!isNotExist) {
        getUserData(req.body.email).then((r) => {
            if (r.token == req.body.token) {
                res.sendStatus(200);
            } else {
                res.sendStatus(201);
            }
        });
    } else {
        res.sendStatus(201);
    }
});

app.get("/", (req, res) => {
    res.send('Hello')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
