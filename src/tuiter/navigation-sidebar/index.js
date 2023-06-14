import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faHashtag,
  faBell,
  faEnvelope,
  faBookmark,
  faList,
  faEllipsis,
  faUser,
  faRegistered,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
// import "./index.css";

const NavigationSidebar = () => {
  
  const { pathname } = useLocation();
  const [ignore, tuiter, active] = pathname.split("/");
  const links = [
    { name: "home", icon: faHouse },
    { name: "explore", icon: faHashtag },
    { name: "notifications", icon: faBell },
    { name: "messages", icon: faEnvelope },
    { name: "bookmarks", icon: faBookmark },
    { name: "lists", icon: faList },
    { name: "more", icon: faEllipsis },
  ];

  const {currentUser} = useSelector((state) => state.user);
  console.log("Nav Bar");
  console.log(currentUser);

  return (
    <div class="container">
      <div className="d-none d-xl-block list-group">
        {links.map((link) => (
          <Link
            to={`/tuiter/${link.name}`}
            className={`list-group-item text-capitalize ${
              active === link.name ? "active" : ""
            }`}
          >
            <FontAwesomeIcon icon={link.icon} /> &nbsp;
            {link.name}
          </Link>
        ))}
        {!currentUser && (
          <Link
            to={`/tuiter/login`}
            className={`list-group-item text-capitalize ${
              active === "login" ? "active" : ""
            }`}
          >
            <FontAwesomeIcon
              icon={faHashtag}
              style={{ paddingRight: "10px" }}
            />
            Login
          </Link>
        )}
        {!currentUser && (
          <Link
            to={`/tuiter/register`}
            className={`list-group-item text-capitalize ${
              active === "register" ? "active" : ""
            }`}
          >
            <FontAwesomeIcon
              icon={faNewspaper}
              style={{ paddingRight: "10px" }}
            />
            Register
          </Link>
        )}
        {currentUser && (
          <Link
            to={`/tuiter/profile`}
            className={`list-group-item text-capitalize ${
              active === "profile" ? "active" : ""
            }`}
          >
            <FontAwesomeIcon icon={faUser} style={{ paddingRight: "10px" }} />
            Profile
          </Link>
        )}
      </div>

      <div className="d-block d-xl-none list-group">
        {links.map((link) => (
          <Link
            to={`/tuiter/${link.name}`}
            className={`list-group-item text-capitalize ${
              active === link.name ? "active" : ""
            }`}
          >
            <FontAwesomeIcon icon={link.icon} />
            {/* {link.name} */}
          </Link>
        ))}
        {!currentUser && (
          <Link
            to={`/tuiter/login`}
            className={`list-group-item text-capitalize ${
              active === "login" ? "active" : ""
            }`}
          >
            <FontAwesomeIcon
              icon={faHashtag}
              style={{ paddingRight: "10px" }}
            />
          </Link>
        )}
        {!currentUser && (
          <Link
            to={`/tuiter/register`}
            className={`list-group-item text-capitalize ${
              active === "register" ? "active" : ""
            }`}
          >
            <FontAwesomeIcon
              icon={faNewspaper}
              style={{ paddingRight: "10px" }}
            />
          </Link>
        )}
        {currentUser && (
          <Link
            to={`/tuiter/profile`}
            className={`list-group-item text-capitalize ${
              active === "profile" ? "active" : ""
            }`}
          >
            <FontAwesomeIcon icon={faUser} />
          </Link>
        )}
      </div>
    </div>
  );
};
export default NavigationSidebar;
