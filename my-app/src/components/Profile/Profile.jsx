import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {

  return <div>
    <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
    <MyPostsContainer />
  </div>
}

export default Profile;