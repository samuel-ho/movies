import React from "react";
import "./NavTabs.css";

const NavTabs = () => {
  const tabNames = [
    "All",
    "Movies",
    "TV Shows",
    "Games & Apps",
    "Blog",
    "Other",
  ];

  // Refactor: Would add redirects for the nav-tabs using React Router when onclick events occur.

  return (
    <div className="nav-container">
      {tabNames.map((tabName, index) => {
        return (
          <span key={index} className="nav-tabs">
            {" "}
            {tabName}{" "}
          </span>
        );
      })}
      <i className="material-icons"> view_module </i>
      <i className="material-icons"> view_list </i>
    </div>
  );
};

export default NavTabs;
