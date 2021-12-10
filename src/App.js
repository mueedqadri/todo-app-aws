import Login from "./components/LogIn";
import SignUp from "./components/SignUp";
import ToDo from "./components/Todo";
import SecuredRoute from "./components/SecuredRoute";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Fragment } from "react";

function App() {
  return (
    <Router>
      <Fragment>
        <div className="App">
          <Routes>
            <Route path="/" element={<SecuredRoute />}>
              <Route path="/list" element={<ToDo />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<SignUp />} />
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
