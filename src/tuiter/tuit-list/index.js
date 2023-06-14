import React, {useEffect} from "react";
import TuitItem from "./tuit-item";
//import tuitsArray from './tuits.json';
import {useDispatch,useSelector} from "react-redux";
import {findTuitsThunk} from "../services/tuits-thunks";
const TuitsList = () => {
 const { tuits } = useSelector(state => state.tuits)
 const dispatch = useDispatch();
 useEffect(() => {
  dispatch(findTuitsThunk())
}, [dispatch])

 return(
   <ul className="list-group">
     {
       tuits.map(tuit =>
         <TuitItem
           key={tuit._id}
           tuit={tuit}
         />
       )
     }
   </ul>
 );
};
export default TuitsList;