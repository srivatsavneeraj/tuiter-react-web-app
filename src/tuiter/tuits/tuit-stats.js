import React from "react";
import { useDispatch } from "react-redux";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { updateTuitThunk } from "../services/tuits-thunks";
// import { removeLike, addLike } from "../reducers/tuits-reducer";

const TuitStats = ({ tuit, tuits }) => {
  const dispatch = useDispatch();
  return (
    <div className="font-14px">
      <div className="row align-items-center">
        <div className="col-1"></div>
        <div className="col-2 me-4">
          <i className="far fa-comment me-2"></i>
          <span>{tuit.replies}</span>
        </div>
        <div className="col-2 me-4">
          <i className="fas fa-retweet me-2"></i>
          <span>{tuit.retuits}</span>
        </div>

        {!tuit.liked && (
          <div className="col-2 me-4">
            <button
              onClick={() => {
                dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1, liked: true }))
              }}
              className="btn"
            >
              <i className="fa-regular fa-heart me-2"></i>
            </button>
            <span>{tuit.likes}</span>
          </div>
        )}

        {tuit.liked && (
          <div className="col-2 me-4">
            <button
              onClick={() => {
                dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes - 1, liked: false }))
              }}
              className="btn"
            >
              <i className="fa-solid fa-heart me-2" style={{color: '#dc143c'}}></i>
            </button>
            <span>{tuit.likes}</span>
          </div>
        )}

        <div className="col-2">
          <i className="fas fa-upload"></i>
        </div>
      </div>
    </div>
  );
};
export default TuitStats;
