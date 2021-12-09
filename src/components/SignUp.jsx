import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({});

  const handleChange = (event) => {
    let user;
    user[event.target.name] = event.target.value;
    setUser(user);
  };

  const onSubmit = () => {
    const { firstName, lastName, confirmPassword, email, password } = user;
    let err = {};
    if (!firstName) {
      err.firstName = "Please enter your First Name";
    } else if (!/^[A-Za-z0-9]+$/.test(firstName)) {
      err.firstName = "Enter a valid First Name";
    }
    if (!lastName) {
      err.lastName = "Please enter your Last Name";
    } else if (!/^[A-Za-z0-9]+$/.test(lastName)) {
      err.lastName = "Enter a valid Last Name";
    }
    if (!email) {
      err.email = "Please enter your Email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      err.email = "Enter a valid email id";
    }
    if (!password.length) {
      err.password = "Please enter your password";
    } else if (password.length < 8) {
      err.password = "Password must be at least 8 characters long";
    }
    if (!confirmPassword.length) {
      err.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      err.confirmPassword = "Password does not match";
    }
    if (Object.getOwnPropertyNames(err).length === 0) {
      window.location.href = "/dummypage.html";
    } else {
      setError(err);
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm"></div>
          <div className="col-sm mt-5">
            <h3>User Registration</h3>
            <div className="col-md-12 ">
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  style={error.firstName && { border: "solid 1px red" }}
                />
                {error.firstName && <p>{error.firstName}</p>}
              </div>
            </div>
            <div className="col-md-12 ">
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  style={error.lastName && { border: "solid 1px red" }}
                />
                {error.lastName && <p>{error.lastName}</p>}
              </div>
            </div>
            <div className="col-md-12 ">
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  className="form-control"
                  style={error.email && { border: "solid 1px red" }}
                />
                {error.email && <p>{error.email}</p>}
              </div>
            </div>
            <div className="col-md-12 inline-form">
              <div>
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  className="form-control"
                  style={error.password && { border: "solid 1px red" }}
                />
                {error.password && <p>{error.password}</p>}
              </div>
            </div>
            <div className="col-md-12 inline-form">
              <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  onChange={handleChange}
                  className="form-control"
                  style={error.confirmPassword && { border: "solid 1px red" }}
                />
                {error.confirmPassword && <p>{error.confirmPassword}</p>}
              </div>
            </div>
            <div className="col-md-12">
              <button
                type="submit"
                className="btn btn-primary mt-3"
                onClick={onSubmit}
              >
                Submit
              </button>
              <br></br>
              <br></br>
              <div>
                Already have an account?&nbsp;
                <Link to="login">Log In</Link>
              </div>
            </div>
          </div>
          <div className="col-sm"></div>
        </div>
      </div>
    </div>
  );
}
