import React from "react";
import styles from './Profile.module.css';
import MyPosts from "./Posts/MyPosts.jsx";

const Profile = () => {
  return (
    <div>
      <div>
        <img width="100%" src='https://wallbox.ru/wallpapers/main/201519/758c9392fd75a9a.jpg' alt =''/>
      </div>
      <div>
        ava + descrition
      </div>
      <MyPosts />
    </div>
  );
}

export default Profile;
