import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Staff from "./Staff/Staff";
import Dashboard from "./Dashboard/Dashboard";
import Navigation from "./Navigation/Navigation";
import StaffCss from "./css/staff.module.css";
import Login from "./Login/Login";

export default function App() {
  return (
    <Router>
      <div className={StaffCss.AppContainer}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          {/* Route to Program */}
        </Routes>
      </div>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
