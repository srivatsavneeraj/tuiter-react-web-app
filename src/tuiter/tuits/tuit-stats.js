import {
  faArrowUpFromBracket,
  faCommenting,
  faHeart,
  faRetweet,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { toggleLikes } from "../reducers/tuits-reducer";
import { updateTuitThunk } from "../services/tuits-thunks";

const TuitsStats = ({ tuit }) => {
  const dispatch = useDispatch();
  const toggleLikeHandler = (id) => {
    dispatch(toggleLikes(id));
  };
  return (
    <span class="d-flex justify-content-around">
      <span>
        <FontAwesomeIcon icon={faCommenting} /> &nbsp; {tuit.replies}
      </span>
      <span>
        <FontAwesomeIcon icon={faRetweet} /> &nbsp; {tuit.retuits}
      </span>
      <span>
        {" "}
        <FontAwesomeIcon
          style={{ color: "red" }}
          icon={faHeart}
          onClick={() =>
            dispatch(
              updateTuitThunk({ ...tuit, likes: tuit.likes + 1, liked: true })
            )
          }
        />
        &nbsp;{tuit.likes}
      </span>
      <span>
        {" "}
        <FontAwesomeIcon
          icon={faThumbsDown}
          onClick={() =>
            dispatch(
              updateTuitThunk({ ...tuit, dislikes: tuit.dislikes + 1})
            )
          }
        />
        &nbsp;{tuit.dislikes}
      </span>
      <span>
        <FontAwesomeIcon icon={faArrowUpFromBracket} />
      </span>
    </span>
  );
};
export default TuitsStats;
