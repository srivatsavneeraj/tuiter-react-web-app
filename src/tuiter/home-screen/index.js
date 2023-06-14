import React from "react";
import TuitsList from "../tuit-list";
import "./index.css";
import WhatsHappening from "../whats-happening";

function HomeScreen() {
 return(
   <>
    <h1>Home</h1>
    <WhatsHappening/>
     <TuitsList/>
   </>
 );
};
export default HomeScreen;