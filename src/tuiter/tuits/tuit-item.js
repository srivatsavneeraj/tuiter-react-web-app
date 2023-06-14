import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import { deleteTuit } from "../reducers/tuits-reducer";
import TuitsStats from "./tuit-stats";
import {deleteTuitThunk} from "../services/tuits-thunks";


const TuitItem = ({
  tuit = {
    _id: 345,
    topic: "Space",
    userName: "SpaceX",
    title:
      "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
    time: "2h",
    image: "spacex.png",
    liked: true,
    replies: 321,
    retuits: 543,
    likes: 22345,
    dislikes: 123,
    handle: "@spacex",
    tuit: "100s offffffff SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
  },
}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    // dispatch(deleteTuit(id));
    dispatch(deleteTuitThunk(id));
  };
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-2">
          <img
            width={70}
            className="float-end rounded-circle"
            src={`/images/${tuit.image}`}
          />
        </div>
        <div className="col-10">
          <div>
            <FontAwesomeIcon
              className="bi bi-x-lg float-end"
              onClick={() => deleteTuitHandler(tuit._id)}
              icon={faClose}
            />
            <span className="fw-bolder">{tuit.userName}</span> {tuit.handle} .{" "}
            {tuit.time}
          </div>
          <div class="wd-padding-bottom-10">{tuit.tuit}</div>
          <div>
            <TuitsStats tuit={tuit}/>
          </div>
        </div>
      </div>
    </li>
  );
};
export default TuitItem;
