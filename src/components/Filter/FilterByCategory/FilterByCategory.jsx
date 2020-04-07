import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import "./FilterByCategory.css";

const FilterByCategory = () => {
  const dropdownTitles = ["Release Year", "Genre", "Rating"];
  return (
    <div className="dropdown-tabs">
      {dropdownTitles.map((title, index) => {
        return <Dropdown key={index}> {title} </Dropdown>;
      })}
    </div>
  );
};

export default FilterByCategory;
