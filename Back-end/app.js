import bodyParser from "body-parser";
import express from "express";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import cors from "cors";
import {
  changeUserData,
  checkEmailNotExists,
  createUser,
  getUserData,
} from "./functions/db.js";
import { v_code_generator } from "./functions/generate_v_code.js";
import { info } from "console";
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
    createUser(req.body.email, hashed, false, generated_code)
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
    getUserData(req.body.email).then(async(r) => {
      const isPassSame = await bcrypt.compare(req.body.password, r.password);
      if (r.isConfirmed) {
        if (isPassSame) {
          res.sendStatus(200);
        } else {
          res.sendStatus(202);
        }
      } else {
        res.sendStatus(203)
      }
    }).catch((e) => {
      console.log('error login back-end',e)
    });
  } else {
    res.sendStatus(202);
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
