import React from "react";
import { IoMdRepeat } from "react-icons/io";
import { FiUpload } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";
import { FaThumbsDown, FaRegThumbsDown } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
const TuitStats = (
    {
        tuit =   {
         "_id": 234,
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
   
    //console.log(isLiked, likeCount)
    const dispatch = useDispatch();
    
    return(

      <div className="col-10"> 
        <div className="d-flex justify-content-between">
          <div ><FaRegComment size={25}/> {tuit.replies}</div>
          <div><IoMdRepeat size={25} /> {tuit.retuits}</div>
          
          <div >
                {/*JSX style is an object*/}
                <button style={{
                    background: 'transparent',
                    border: 'none',
                    padding: '0',
                    cursor: "pointer",
                }} onClick={() => tuit.liked ? dispatch(
                                                 updateTuitThunk({...tuit, liked: false, likes: tuit.likes - 1})) :
                                  dispatch(updateTuitThunk(
                                      {...tuit, liked: true, likes: tuit.likes + 1}))}>{tuit.liked ?
                                                                                        <FaHeart
                                                                                            style={{color: "#E0245E"}}/>
                                                                                                   :
                                                                                        <FiHeart/>}</button>
                &nbsp;&nbsp;{tuit.likes}
            </div>
            <div className={"col-2"}>
                {/*JSX style is an object*/}
                <button style={{
                    background: 'transparent',
                    border: 'none',
                    padding: '0',
                    cursor: "pointer",
                    // if the tuit was already disliked, then clicking thumbs down means remove
                    // a dislike
                }} onClick={() => tuit.disliked ? dispatch(
                    updateTuitThunk({...tuit, disliked: false, dislikes: tuit.dislikes - 1})) : dispatch(updateTuitThunk(
                                      {...tuit, disliked: true, dislikes: tuit.dislikes + 1}))}>{tuit.disliked ?
                                                                                        <FaThumbsDown style={{color: "#E0245E"}}/> : <FaRegThumbsDown/>}</button>
                &nbsp;&nbsp;{tuit.dislikes}
            </div>
          <div><FiUpload size={25}/></div>
      </div>
      </div>

 );
};
export default TuitStats;