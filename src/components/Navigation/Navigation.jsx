import React from "react";
import "./Navigation.css";

const Navigation = () => {
  const tabNames = [
    "All",
    "Movies",
    "TV Shows",
    "Games & Apps",
    "Blog",
    "Other",
  ];

  return (
    <>
      <div className="parent">
        <h1 className="header"> Search Results </h1>
      </div>
      <div className="nav-container">
        {tabNames.map((tabName) => {
          return <span className="nav-bar"> {tabName} </span>;
        })}
      </div>
    </>
  );
};

export default Navigation;
