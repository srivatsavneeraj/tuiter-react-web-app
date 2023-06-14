import React from "react";
import { useDispatch } from "react-redux";
import { deleteTuitThunk } from "../services/tuits-thunks";
import TuitStats from "./tuit-stats";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const TuitItem = ({ tuit, tuits }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-1">
          <img
            width={60}
            className="rounded-circle"
            src={`/images/${tuit.image}`}
          />
        </div>
        <div className="col-11">
          <div>
            <i
              className="fas fa-times float-end"
              onClick={() => deleteTuitHandler(tuit._id)}
            ></i>
            <span className="bold-font me-2">{tuit.username}</span>
            <i className="fas fa-check-circle text-primary me-2"></i>
            <span className="me-2">{tuit.handle}</span>
            <i className="fas fa-circle smaller-font me-2"></i>
            <span>{tuit.time}</span>
          </div>
          <div>
            <span>{tuit.tuit}</span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <TuitStats tuit={tuit} tuits={tuits} />
      </div>
    </li>
  );
};
export default TuitItem;
