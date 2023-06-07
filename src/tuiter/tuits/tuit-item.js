import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import { deleteTuit } from "../reducers/tuits-reducer";
import TuitsStats from "./tuit-stats";

const TuitItem = ({
                      tuit = {
                          _id: 345,
                          topic: "Space",
                          userName: "SpaceX",
                          title:
                              "The Space Exploration Technologies Corporation, commonly referred to as SpaceX is an American spacecraft manufacturer, launcher, and satellite communications company headquartered in Hawthorne, California.",
                          time: "2h",
                          image: "spacex.png",
                          liked: true,
                          replies: 321,
                          retuits: 543,
                          likes: 22345,
                          handle: "@spacex",
                          tuit: "The Space Exploration Technologies Corporation, commonly referred to as SpaceX is an American spacecraft manufacturer, launcher, and satellite communications company headquartered in Hawthorne, California.",
                      },
                  }) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
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