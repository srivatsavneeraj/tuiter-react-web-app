import React from "react";
const WhoToFollowListItem = ({
  who = { userName: "NASA", handle: "NASA", avatarIcon: "nasa.png" },
}) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-md-4 col-lg-3">
          <img
            className="rounded-circle"
            height={48}
            src={`/images/${who.avatarIcon}`}
          />
        </div>
        <div className="col-7 d-none d-lg-block">
          <div className="fw-bold">{who.userName}</div> <div>@{who.handle}</div>
        </div>
        <div className="col-md-8 col-lg-2">
          <button className="btn btn-primary rounded-pill float-end">
            Follow
          </button>
        </div>
      </div>
    </li>
  );
};
export default WhoToFollowListItem;
