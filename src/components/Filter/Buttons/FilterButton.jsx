import React from "react";
import "./FilterButton.css";

const FilterButton = ({ children }) => {
  return <button className="filter-button">{children}</button>;
};

export default FilterButton;
