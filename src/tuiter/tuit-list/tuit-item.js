import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import { BiX } from "react-icons/bi";
import {deleteTuitThunk} from "../services/tuits-thunks";
const TuitItem = (
 {
   tuit =   {
    "_id": 2,
    "topic": "Space",
    "userName": "SpaceX",
    "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
    "time": "2h",
    "image": "spacex.png",
    "liked": true,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
    "handle": "@spacex",
    "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
  }
 }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
      dispatch(deleteTuitThunk(id));
    }
    
 return(
  <li className="list-group-item">
   <div className="row">
    
    <div className="col-1">
      <img width={50} className="rounded-circle rounded-3 shadow" src={require(`../images/${tuit.image}`)} alt="User" />
    </div>

    <div className="col-11">  
    <BiX className="float-end" style={{ color: "gray", fontSize: "24px"}} onClick={() => deleteTuitHandler(tuit._id)} />

   
      <div> <span className="fw-bolder"> {tuit.userName} </span>  <img src={require(`../images/verified_badge.png`)} height={20} width = {20} alt="Twitter Verified Badge" /> {tuit.handle} . {tuit.time}</div>
      <div className="mb-3">{tuit.tuit}</div>
      <TuitStats 
      key={tuit._id}
      tuit = {tuit}
      />
    </div>  
   </div>
  </li>
 );
};
export default TuitItem;