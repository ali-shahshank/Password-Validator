import React from "react";
import { useState } from "react";
import validator from "validator";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
  const [message, setMessage] = useState("");

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minSymbols: 1,
      })
    ) {
      setMessage("Strong Password");
    } else {
      setMessage("Not a strong password");
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div
          className="row d-flex justify-content-center align-items-center "
          id="validator"
        >
          <div
            className="col-sm-12 col-md-6 p-4 p-md-5 bg-white rounded-2"
            id="validator-inner"
          >
            <h4 className="fs-2 text-primary">Password Validator</h4>
            <p className="fs-4">Validate your password strength.</p>
            <div className="cotainer py-4 ">
              <input
                type="text"
                placeholder="Input password"
                className="form-control form-control-lg"
                onChange={(e) => validate(e.target.value)}
              />
              <p className="fs-5 py-4 text-success">{message}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
