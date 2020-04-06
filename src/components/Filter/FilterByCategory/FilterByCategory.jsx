import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import "./FilterByCategory.css";

const FilterByCategory = () => {
  return (
    <div className="dropdown-tabs">
      <Dropdown> Release Year </Dropdown>
      <Dropdown> Genre </Dropdown>
      <Dropdown> Rating </Dropdown>
    </div>
  );
};

export default FilterByCategory;
