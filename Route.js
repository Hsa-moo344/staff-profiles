import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Staff from "../Staff/Staff";
import StaffCss from "../css/staff.module.css";

export default function MyRoute() {
  return (
    <div className={StaffCss.RouteContainer}>
      <Router>
        <Routes>
          <Route element={<Home />} path="/" home />
          <Route element={<About />} path="/about" />
          <Route element={<Staff />} path="/staff" />
          <Route element={<Dashboard />} path="/dashboard" />
          <Route element={<Login />} path="/login" />
        </Routes>
      </Router>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyRoute />);
