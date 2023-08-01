import React, { useState } from "react";
import { registration } from "../APIRequest/APIRequest";
import {
  isEmpty,
  validateEmail,
  validateMobile,
  validatePassword,
} from "../helper/formValidation";
import { errorToast } from "../utils/TostMessage";

function RegisterModal({ closeModal }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    if (isEmpty(firstName)) {
      errorToast("First Name is required");
    } else if (isEmpty(lastName)) {
      errorToast("Last Name is required");
    } else if (!validateEmail(email)) {
      errorToast("Invalid Email");
    } else if (!validateMobile(phoneNo)) {
      errorToast("Invalid Phone No");
    } else if (!validatePassword(password)) {
      errorToast("Invalid Password");
    } else {
      const result = registration({
        firstName,
        lastName,
        email,
        phoneNo,
        password,
      });
      if (result) {
        closeModal(false);
      }
    }
  };
  return (
    <div className="container-fluid custom-modal">
      <div className="card features-login-form p-5">
        <div
          className="close-btn position-absolute right-0"
          onClick={() => closeModal(false)}
        >
          {" "}
          X{" "}
        </div>
        <form className="mb-2" onSubmit={handleRegistrationSubmit}>
          <h5 className="text-center mb-4">Register Form</h5>

          <div className="mb-4">
            <input
              type="text"
              className="form-control"
              value={firstName}
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              className="form-control"
              value={lastName}
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              className="form-control"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              className="form-control"
              value={phoneNo}
              placeholder="Enter your phone"
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              className="form-control"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-success w-100 h-40 mt-0">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterModal;
