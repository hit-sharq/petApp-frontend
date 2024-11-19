import React from "react";
import { NavLink } from "react-router-dom";

import "../Navbar.css";

export function Navbar() {
  return (
    <div className="navbar">
      {/* <NavLink to={"/overview"} className="text-wrapper-35">
          Overview
        </NavLink> */}
<NavLink
  to="/health"
  className={({ isActive, isPending }) => {
    let className = "text-wrapper-36"; 
    if (isActive) {
      className += " active"; 
    } else if (isPending) {
      className += " pending"; 
    }
    return className;
  }}
  style={({ isActive, isPending }) => {
    return {
      color: isActive ? "green" : "white", 
    };
  }}
>
  Health
</NavLink>

      {/* <NavLink to={"/health"} className={{"text-wrapper-36"}}>
        Health
      </NavLink> */}

<NavLink
  to="/appointment"
  className={({ isActive, isPending }) => {
    let className = "text-wrapper-36"; 
    if (isActive) {
      className += " active"; 
    } else if (isPending) {
      className += " pending"; 
    }
    return className;
  }}
  style={({ isActive, isPending }) => {
    return {
      color: isActive ? "green" : "white", 
    };
  }}
>
  Appointments
</NavLink>

      {/* <NavLink to={"/appointment"} className="text-wrapper-36">
        Appointments
      </NavLink> */}

<NavLink
  to="/community"
  className={({ isActive, isPending }) => {
    let className = "text-wrapper-36"; 
    if (isActive) {
      className += " active"; 
    } else if (isPending) {
      className += "text-wrapper-36"; 
    }
    return className;
  }}
  style={({ isActive, isPending }) => {
    return {
      color: isActive ? "green" : "white", 
    };
  }}
>
  Community
</NavLink>

      {/* <NavLink to={"/community"} className="text-wrapper-36">
        Community
      </NavLink> */}

    </div>
  );
}
