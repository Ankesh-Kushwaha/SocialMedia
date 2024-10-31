import { useContext, useRef } from "react";
import  { PostList } from "../store/post-list-store";

/* eslint-disable react/no-unknown-property */
export const CreatePost = () => {
  
  const {addPost}=useContext(PostList);
  
  const userIdElement= useRef()
  const postTitlElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const userId = userIdElement.current.value;
    const postTitle = postTitlElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitlElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

   fetch("https://dummyjson.com/products/add", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify({
       id: Date.now(),
       title: postTitle,
       body: postBody,
       reactions: reactions,
       userId: userId,
       tags: tags,
     }),
   })
     .then((res) => res.json())
     .then(resObj=> addPost(resObj));
  }

  return (
    <>
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="User-Id" className="form-label">
            Enter your User Id
          </label>
          <input
            ref={userIdElement}
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your User Id"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            ref={postTitlElement}
            type="text"
            className="form-control"
            id="UserId"
            placeholder="how are you feeling Today!"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            ref={postBodyElement}
            type="text"
            rows="4"
            className="form-control"
            id="body"
            placeholder="Tell us more about it!"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            No of Reactions
          </label>
          <input
            ref={reactionsElement}
            type="text"
            className="form-control"
            id="reactions"
            placeholder="how many people reacted to this post!"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter hastags
          </label>
          <input
            ref={tagsElement}
            type="text"
            className="form-control"
            id="tags"
            placeholder="Please! Enter tags with the space!"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};

export default CreatePost;
