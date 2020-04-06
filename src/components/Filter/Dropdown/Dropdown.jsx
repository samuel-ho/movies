import React from "react";
import "./Dropdown.css";

const Dropdown = ({ children }) => {
  return (
    <select className="dropdown-title">
      <option> {children} </option>
    </select>
  );
};

export default Dropdown;
