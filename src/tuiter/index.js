import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen/index";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";
import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
import WhoToFollowList from "./who-to-follow-list";
import "bootstrap/dist/css/bootstrap.min.css"; 


function Tuiter() {
  return (
    <div>
      <Nav />
      <div className="row">
        {/* Left Column XL, XXL */}
        {/* <div class="col-2 d-none d-xl-block"> */}
        <div class="col-2">
          <NavigationSidebar />
        </div>

        {/* Left Column S, M, L
        <div class="col-1 d-block d-xl-none">
          <NavigationSidebar />
        </div> */}

        {/* Middle Column L, XL, XXL */}
        <div class="d-block col-10 col-sm-10 col-lg-6 col-xl-6 wd-float-left mt-2 wd px-2">
          <Routes>
            <Route path="/home" element={<h1>Home</h1>} />
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
          {/*<WhoToFollowListItem
            who={{
              userName: "Tesla",
              handle: "tesla",
              avatarIcon: "C.png",
            }}
          />
          <WhoToFollowListItem
            who={{
              userName: "SpaceX",
              handle: "spacex",
              avatarIcon: "ProfilePic.jpeg",
            }}
          /> */}
        </div>
      </div>
    </div>
  );
}
export default Tuiter;
