import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../componenets/header";
import Footer from "../componenets/footer";
import SideBar from "../componenets/sideBar";
import CreatePost from "../componenets/CreatePost";
import PostList from "../componenets/PostList";
import { useState } from "react";
import PostListProvider from "../store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="AppContainer">
        <SideBar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></SideBar>
        <div className="content">
          <Header />
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
