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
        {tuit.liked ? (
          <FontAwesomeIcon
            style={{ color: "red" }}
            icon={faHeart}
            onClick={() =>
              dispatch(
                updateTuitThunk({
                  ...tuit,
                  likes: tuit.likes - 1,
                  liked: !tuit.liked,
                })
              )
            }
          />
        ) : (
          <FontAwesomeIcon
            icon={faHeart}
            onClick={() =>
              dispatch(
                updateTuitThunk({
                  ...tuit,
                  likes: tuit.likes + 1,
                  liked: !tuit.liked,
                })
              )
            }
          />
        )}
        &nbsp;{tuit.likes}
      </span>
      <span>
        {tuit.disliked ? (
          <FontAwesomeIcon
            style={{ color: "blue" }}
            icon={faThumbsDown}
            onClick={() =>
              dispatch(
                updateTuitThunk({
                  ...tuit,
                  dislikes: tuit.dislikes - 1,
                  disliked: !tuit.disliked,
                })
              )
            }
          />
        ) : (
          <FontAwesomeIcon
            icon={faThumbsDown}
            onClick={() =>
              dispatch(
                updateTuitThunk({
                  ...tuit,
                  dislikes: tuit.dislikes + 1,
                  disliked: !tuit.disliked,
                })
              )
            }
          />
        )}
        &nbsp;{tuit.dislikes}
      </span>
      <span>
        <FontAwesomeIcon icon={faArrowUpFromBracket} />
      </span>
    </span>
  );
};
export default TuitsStats;
