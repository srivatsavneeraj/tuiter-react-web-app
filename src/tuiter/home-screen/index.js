import React from "react";
import TuitsList from "../tuits/index";
import WhatsHappening from "../whats-happening";
import { useSelector } from "react-redux";

function HomeScreen() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div>
      <h4>Home</h4>
      <WhatsHappening />
      <TuitsList />
    </div>
  );
}

export default HomeScreen;
