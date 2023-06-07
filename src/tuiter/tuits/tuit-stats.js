import {
    faArrowUpFromBracket,
    faCommenting,
    faHeart,
    faRetweet,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { toggleLikes } from "../reducers/tuits-reducer";

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
                icon={faHeart}
                style={{ color: "red" }}
                onClick={() => toggleLikeHandler(tuit._id)}
            />
        ) : (
             <FontAwesomeIcon
                 icon={faHeart}
                 onClick={() => toggleLikeHandler(tuit._id)}
             />
         )}
          &nbsp; {tuit.likes}
      </span>
      <span>
        <FontAwesomeIcon icon={faArrowUpFromBracket} />
      </span>
    </span>
    );
};
export default TuitsStats;