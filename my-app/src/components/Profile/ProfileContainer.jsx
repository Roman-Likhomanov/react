import React from 'react';
import Profile from './Profile';
import { getUserProfile } from '../../redux/profile-reducer';
import {getStatus} from '../../redux/profile-reducer';
import {updateStatus} from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import {useMatch} from 'react-router-dom';

class ProfileContainer extends React.Component{

  componentDidMount () {
    let userId = this.props.match ? this.props.match.params.userId : this.props.authoraizedUserId;
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    
    return (
      <Profile  {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    )  
  }
}

let mapStateToProps = (state) => ({
profile: state.profilePage.profile,
status: state.profilePage.status,
authoraizedUserId: state.auth.userId,
isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = (props) => {
  const match = useMatch('/profile/:userId/');
  return <ProfileContainer {...props} match={match} />;
}

export default connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}) (WithUrlDataContainerComponent);