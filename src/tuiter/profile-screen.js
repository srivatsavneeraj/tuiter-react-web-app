import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  profileThunk,
  logoutThunk,
  updateUserThunk,
} from "./services/auth-thunks";
function ProfileScreen() {
  const { currentUser } = useSelector((state) => state.user);
  const [ profile, setProfile ] = useState(currentUser || {});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  console.log("Profile screen");
  console.log(currentUser);
  console.log(profile);

  const save = () => {
    dispatch(updateUserThunk(profile));
  };
  
  useEffect(() => {
    async function fetchProfile() {
      const { payload } = await dispatch(profileThunk());
      setProfile(payload);
    }
    fetchProfile();
  }, [dispatch]);

  return (
    <div>
      <h1>Profile Screen</h1>
      {profile && (
        <div>
          <div className="mt-2">
            <label>First Name</label>
            <input
              className="form-control"
              type="text"
              value={profile.firstName}
              onChange={(event) => {
                const newProfile = {
                  ...profile,
                  firstName: event.target.value,
                };
                setProfile(newProfile);
              }}
            />
          </div>

          <div className="mt-2">
            <label>Last Name</label>
            <input
              className="form-control"
              type="text"
              value={profile.lastName}
              onChange={(event) => {
                const newProfile = {
                  ...profile,
                  lastName: event.target.value,
                };
                setProfile(newProfile);
              }}
            />
          </div>
        </div>
      )}
      <button className="m-2 btn btn-primary"
        onClick={() => {
          dispatch(logoutThunk());
          // sessionStorage.removeItem(currentUser);
          navigate("/tuiter/login");
        }}
      >
        {" "}
        Logout
      </button>
      <button className="m-2 btn btn-primary" onClick={save}>Save </button>
    </div>
  );
}
export default ProfileScreen;
