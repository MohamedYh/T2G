import nodemailer from 'nodemailer';
import {appuri} from '../app.js'
// gc = generated_code
export const SendEmail = async(email,gc) =>  {
    const trnsprt = nodemailer.createTransport({
        host: "smtp.gmail.com",
        auth: {
          user: "sft.devams@gmail.com",
          pass: "wenuendzdpasioef",
        },
      });
      const infos = await trnsprt.sendMail({
        from: "sft.devams@gmail.com",
        to: email,
        subject: "Confirm your email",
        html: `<h2>Hello</h2><p>confirm your account on: ${appuri}/confirmation<br></br>your verification code is: ${gc}</p>`,
      });
      console.log(infos.response)
}