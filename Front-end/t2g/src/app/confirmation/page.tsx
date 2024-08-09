"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { server_url } from "../page";
import { useRouter } from "next/navigation";
import OtpInput from "react18-input-otp";
import "./page.css";

const ConfirmationPage: React.FC = () => {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [iemail, setIemail] = useState("");
  const [isgt, setIsgt] = useState(false);
  const email = localStorage.getItem("email");

  const handleOtpChange = (event: any) => {
    setOtp(event);
  };

  useEffect(() => {
    if (otp.length == 5) {
      handlePush();
    }
  }, [otp]);

  const handlePush = () => {
    axios
      .post(`${server_url}/check_vc`, { email, otp })
      .then((r) => {
        if (r.status == 200) {
            toast('Confirmed successfully')
          router.push("/login");
        } else if (r.status == 205) {
          console.log("hello");
          toast.error("verification code is not valid");
          setOtp("");
        }
      })
      .catch((e) => {
        console.log("error in confirmation page", e);
      });
  };

  useEffect(() => {
    toast("verification code has been sent to your email", {
      autoClose: 10000,
    });
  }, []);

  return (
    <div className="prcnt">
      <div className="form">
        <h1>Confirm your email</h1>
        <p
          className="tvc"
          style={{
            marginTop: 0,
            letterSpacing: "6.2px",
          }}
        >
          type verification code
        </p>
        <OtpInput
          className="otpinput"
          value={otp}
          onChange={handleOtpChange}
          numInputs={5}
          separator={<span style={{ width: "35px" }}></span>}
        />
        <div className="pls"></div>
      </div>
      <div className="nvgt">
        <p
          onClick={() => {
            router.push("/signup");
          }}
          className="sgn"
        >
          Return To <p>Sign Up?</p>
        </p>
        <p
          onClick={() => {
            router.push("/login");
          }}
          className="lgn"
        >
          Return To <p>Login?</p>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ConfirmationPage;
