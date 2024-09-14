import React from "react";
import StaffCss from "../css/staff.module.css";

const Navigation = () => {
  return (
    <ul className={StaffCss.NavigationContainer}>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/staff">Staff List</a>
      </li>
      <li>
        <a href="/dashboard">Dashboard</a>
      </li>
      <li>
        <a href="/login">Login</a>
      </li>
      {/* <li>
        <a href="/dashboard">Dashboard</a>
      </li> */}
    </ul>
  );
};

export default Navigation;
