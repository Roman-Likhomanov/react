import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div>
      {/* <div>
        <img src='https://travelfree.info/wp-content/uploads/2019/04/Palma_Mallorca_3746989_xxl-800x300.jpg' />
      </div> */}
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large}/>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      </div>
    </div>
  )
}

export default ProfileInfo;