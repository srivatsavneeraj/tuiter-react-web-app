import { current } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
const NavigationSidebar = () => {
  const { currentUser } = useSelector((state) => state.user);

  const { pathname } = useLocation();
  let [ignore, tuiter, active] = pathname.split("/");

  if (!active) {
    active = "home";
  }

  const links = [
    "home",
    "explore",
    "notifications",
    "messages",
    "bookmarks",
    "lists",
    "more",
  ];
  return (
    <div className="list-group">
      {links.map((link) => (
        <Link
          key={link}
          to={`/tuiter/${link}`}
          className={`list-group-item text-capitalize ${
            active === link ? "active" : ""
          }`}
        >
          {link}
        </Link>
      ))}
      {!currentUser && (
        <Link className="list-group-item text-capitalize" to="/tuiter/login">
          Login
        </Link>
      )}
      {!currentUser && (
        <Link className="list-group-item text-capitalize" to="/tuiter/register">
          Register
        </Link>
      )}
      {currentUser && (
        <Link className="list-group-item text-capitalize" to="/tuiter/profile">
          Profile
        </Link>
      )}
    </div>
  );
};
export default NavigationSidebar;
