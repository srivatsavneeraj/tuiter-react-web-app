import { Routes, Route } from "react-router";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen";
import WhoToFollowList from "./who-to-follow-list";
import ProfileScreen from "./user/profile";
import LoginScreen from "./user/login";
import RegisterScreen from "./user/register";
import authReducer from "./reducers/auth-reducer";
import BookmarksScreen from "./bookmarks";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
const store = configureStore({
  reducer: { who: whoReducer, tuits: tuitsReducer, user: authReducer },
});

function Tuiter() {
  return (
    <Provider store={store}>
      <div className="row">
        <div className="col-4 col-xs-4 col-sm-4 col-md-2 col-lg-2">
          <NavigationSidebar />
        </div>
        <div className="col-8 col-xs-8 col-sm-8 col-md-7 col-lg-7">
          <Routes>
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/" element={<HomeScreen />} />
            <Route path="/explore" element={<ExploreScreen />} />
            <Route path="/bookmarks" element={<BookmarksScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        </div>
        <div className="col-3 d-none d-md-block">
          <WhoToFollowList />
        </div>
        
      </div>
    </Provider>
  );
}

export default Tuiter;
