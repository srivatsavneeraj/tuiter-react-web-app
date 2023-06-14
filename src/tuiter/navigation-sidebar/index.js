import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const active = pathname.replace("/tuiter/", "");
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="list-group">
      <Link
        to="/tuiter/home"
        className={`list-group-item ${active === "home" ? "active" : ""} d-flex align-items-center`}
      >
        Home
      </Link>
      <Link
        to="/tuiter/explore"
        className={`list-group-item ${active === "explore" ? "active" : ""} d-flex align-items-center`}
      >
        Explore
      </Link>
      <Link
        to="/tuiter/notifications"
        className={`list-group-item ${active === "notifications" ? "active" : ""} d-flex align-items-center`}
      >
        Notifications
      </Link>
      <Link
        to="/tuiter/messages"
        className={`list-group-item ${active === "messages" ? "active" : ""} d-flex align-items-center`}
      >
        Messages
      </Link>
      <Link
        to="/tuiter/bookmarks"
        className={`list-group-item ${active === "bookmarks" ? "active" : ""} d-flex align-items-center`}
      >
        Bookmarks
      </Link>
      <Link
        to="/tuiter/lists"
        className={`list-group-item ${active === "lists" ? "active" : ""}d-flex align-items-center`}
      >
        Lists
      </Link>
      <Link
        to="/tuiter/more"
        className={`list-group-item ${active === "more" ? "active" : ""} d-flex align-items-center`}
      >
        More
      </Link>
      {!currentUser && <Link className={`list-group-item ${active === "login" ? "active" : ""} d-flex align-items-center`} to="/tuiter/login">   Login   </Link>}
     {!currentUser && <Link className={`list-group-item ${active === "register" ? "active" : ""} d-flex align-items-center`} to="/tuiter/register">Register</Link>}
     { currentUser && <Link className={`list-group-item ${active === "profile" ? "active" : ""} d-flex align-items-center`} to="/tuiter/profile"> Profile </Link>}
    </div>
  );
};

export default NavigationSidebar;
