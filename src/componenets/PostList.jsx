import { useState, useEffect, useContext } from "react";
import Post from "./post";
import { PostList as postListData } from "../store/post-list-store";
import WelcomeMessage from "./welcomeMessage";
import LoadingSpinner from "./loadingSpinnner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(postListData);
  
  const [fetching,setFetchingdata] = useState(false); 
     
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setFetchingdata(true);
    fetch("https://dummyjson.com/posts",{signal})
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetchingdata(false);
      });
      
    return () => {
      controller.abort();
    }
  },[]);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
