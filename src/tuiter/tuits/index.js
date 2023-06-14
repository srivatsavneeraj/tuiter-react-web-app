import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findTuitsThunk } from "../services/tuits-thunks";
import TuitItem from "./tuit-item";

const TuitsList = () => {
  const { tuits } = useSelector((state) => state.tuits);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk());
  }, []);
  return (
    <ul className="list-group">
      {tuits.map((tuit) => (
        <div key={tuit._id}>
          <TuitItem tuit={tuit} tuits={tuits} />
        </div>
      ))}
    </ul>
  );
};
export default TuitsList;
