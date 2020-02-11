import React from "react";
import styles from './MyPosts.module.css';
import Post from "../Post/Post.jsx";

const MyPosts = () => {
  return (
      <div>
        My Posts
        <div>
          <textarea></textarea>
          <button>New Post</button>
        </div>
        <div className={styles.Posts}>
          <Post message='Привет, как ты' like="15"/>
          <Post message='Привет, отлично' like="20"/>
          <Post message='Давненько мы не виделись' like="7"/>
        </div>
      </div>
  );
}

export default MyPosts;
