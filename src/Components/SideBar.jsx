// SideBar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.css";

export default function SideBar() {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/session"
              activeClassName="active"
              className="sidebar-item"
            >
              <img
                src="/createVideoIcon.png"
                alt="Create Video"
                className="sidebar-icon"
              />
              Create Video
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/session"
              activeClassName="active"
              className="sidebar-item"
            >
              <img
                src="/uploadIcon.png"
                alt="UploadVideo"
                className="sidebar-icon"
              />
              Upload Video
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              activeClassName="active"
              className="sidebar-item"
            >
              <img
                src="/dashboardIcon.png"
                alt="Dashboard"
                className="sidebar-icon"
              />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              activeClassName="active"
              className="sidebar-item"
            >
              <img
                src="/profileIcon.png"
                alt="Profile"
                className="sidebar-icon"
              />
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
