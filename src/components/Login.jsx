import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";

function Login({ closeModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
    if(!error && !isLoading) closeModal(false)
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
        <form className="mb-2" onSubmit={handleSubmit}>
          <h5 className="text-center mb-4">Login Form</h5>
          <div className="mb-4">
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          <button
            disabled={isLoading}
            type="submit"
            className="btn btn-success w-100 h-40 mt-0"
          >
            Login
          </button>
        </form>
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
}

export default Login;
