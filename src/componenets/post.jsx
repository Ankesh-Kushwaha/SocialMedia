import { useContext } from "react";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card">
      <button
        type="button"
        className="btn-close close-button"
        aria-label="Close"
        onClick={() => deletePost(post.id)}
      ></button>

      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>

        {/* Display Likes and Dislikes Individually */}
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {post.reactions.likes} 
          <span className="visually-hidden">unread messages</span>
        </span>

        <p className="card-text">{post.body}</p>

        {/* Render tags with unique keys */}
        {post.tags &&
          post.tags.map((tag, index) => (
            <span
              key={tag + index}
              className="badge rounded-pill text-bg-info hashtag"
            >
              {tag}
            </span>
          ))}
      </div>
    </div>
  );
};

export default Post;
