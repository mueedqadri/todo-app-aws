import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

const apiUrlLogin = "https://tutorial4-api.herokuapp.com/api/users/login";

export default function LogIn() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  const handleChange = (event) => {
    let user;
    user[event.target.name] = event.target.value;
    setUser(user);
  };

  const onSubmit = () => {
    const { email, password } = user;
    let err = {};
    if (!email) {
      err.email = "Please enter your Email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      err.email = "Enter a valid email id";
    }
    if (Object.getOwnPropertyNames(err).length === 0) {
      let data = {
        email: email,
        password: password,
      };
      let isValidCred = true;
      fetch(apiUrlLogin, {
        method: "post",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => {
          isValidCred = res.ok;
          return res.json();
        })
        .then((result) => {
          if (!isValidCred) {
            err.invalidCredentials = result.message;
            setError(err);
          } else {
            window.window.location.href = "/users";
          }
        });
    }
    setError(err);
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm"></div>
          <div className="col-sm mt-5">
            <h3>Login</h3>
            {error.invalidCredentials && (
              <p style={{ color: "red" }}>{error.invalidCredentials}</p>
            )}
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
            <div className="col-md-12">
              <button
                type="submit"
                className="btn btn-primary mt-3"
                onClick={onSubmit}
              >
                Login
              </button>
              <br></br>
              <br></br>
              <div>
                Need an account?&nbsp;
                <Link to="/">Sign Up</Link>
              </div>
            </div>
          </div>
          <div className="col-sm"></div>
        </div>
      </div>
    </div>
  );
}
