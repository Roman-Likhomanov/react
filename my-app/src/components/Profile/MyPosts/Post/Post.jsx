import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
      <img src='https://a.d-cd.net/bd88a1s-1920.jpg'/>
        {props.message}
        <div>
          <span>like</span> {props.likesCount}
        </div>
    </div>
  )
}
export default Post;