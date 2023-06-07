import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen/index";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";
// import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
import WhoToFollowList from "./who-to-follow-list";
import "bootstrap/dist/css/bootstrap.min.css";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
const store = configureStore({ reducer: { who: whoReducer, tuits: tuitsReducer } });

function Tuiter() {
  return (
      <Provider store={store}>
        <div>
          <Nav />
          <div className="row">
            <div class="col-2">
              <NavigationSidebar />
            </div>

            {}

            <div class="d-block col-10 col-sm-10 col-lg-6 col-xl-6 wd-float-left mt-2 wd px-2">
              <Routes>
                {/* <Route path="/home" element={<h1>Home</h1>} /> */}
                <Route path="/explore" element={<ExploreScreen />} />
                <Route path="/notifications" element={<h1>Notifications</h1>} />
                <Route path="/home" element={<HomeScreen />} />
                {/* <Route path="/explore" element={<ExploreScreen />} /> */}
                <Route path="/bookmarks" element={<BookmarksScreen />} />
                <Route path="/profile" element={<ProfileScreen />} />
              </Routes>
            </div>

            {/* Right Column XL, XXL */}
            <div class="col-sm-0 col-md-0 col-lg-4 col-xl-3 col-xxl-3 d-xxl block d-xl-block d-lg-block d-md-block d-md-none d-sm-none d-none">
              {/* <WhoToFollowListItem /> */}
              <WhoToFollowList />
              {}
            </div>
          </div>
        </div>
      </Provider>
  );
}
export default Tuiter;