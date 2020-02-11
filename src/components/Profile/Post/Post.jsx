import React from "react";
import styles from './Post.module.css';

const Post = (props) => {
  return (
          <div className={styles.item}>
            <img className={styles.ava} src="https://image.flaticon.com/icons/svg/2491/2491008.svg" alt=""/>
            {props.message}
            <div className={styles.popular} >
              <span> {props.like} </span>
              <img className={styles.like} src="https://image.flaticon.com/icons/svg/1216/1216649.svg" alt=""/>
            </div>
          </div>
  );
}

export default Post;
