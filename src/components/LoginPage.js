import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registration } from "../redux/actions";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const dispatch = useDispatch();
  let body = {};
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const addingUser = () => {
    body = {
      email: email,
      name: name,
      password: password,
      confirmPassword: confirmPassword,
    };
    dispatch(registration(body));
  };
  return (
    <form className="">
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <Link to="/home">
        <button onClick={addingUser} className="btn btn-primary">
          Submit
        </button>
      </Link>
    </form>
  );
};

export default LoginPage;
