import React, { useState } from "react";
//import { sendMail } from "./helper/Mail.js";
import { Link } from "react-router-dom";

const Mail = () => {
  const [values, setValues] = useState({
    email: "",
  });
  const { email } = values;
  const handleChange = (name) => (event) => {
    setValues({
      ...values,
      [name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });
    const store = await res.json();
    if (res.status === 400 || !store) {
      window.alert("invalid");
    } else {
      window.alert("Check Your Mail");
    }
  };
  return (
    <div
      style={{
        marginTop: "200px",
        marginBottom: "248px",
      }}
    >
      <div className="login-page">
        <form method="POST">
          <h2> Confirm Your Email </h2>
          <input
            id="email"
            type="text"
            name="email"
            required
            placeholder="Email"
            value={email}
            onChange={handleChange("email")}
          />
          <div className="row">
            <button type="submit" onClick={handleSubmit}>
              Send OTP
            </button>
          </div>
        </form>
        <div className="row">
          <Link to="/otpverify">OTP VERIFICATION</Link>
        </div>
      </div>
    </div>
  );
};

export default Mail;
