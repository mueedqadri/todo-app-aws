import Login from "./components/LogIn";
import SignUp from "./components/SignUp";
import ToDo from "./components/Todo";
import FeedBack from "./components/FeedBack";
import SecuredRoute from "./components/SecuredRoute";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Fragment } from "react";
import Header from "./components/Header";

function App() {
  return (
    
    <Router>
      <Fragment>
        <div className="App">
          <Header></Header>
          <Routes>
            <Route path="/" element={<SecuredRoute />}>
              <Route path="/list" element={<ToDo />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/feedback" element={<FeedBack />} />
            <Route path="/" element={<SignUp />} />
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
