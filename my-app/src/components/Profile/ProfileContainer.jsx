import React from 'react';
import Profile from './Profile';
import { getUserProfile, savePhoto, getStatus, updateStatus, saveProfile } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import { useMatch } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.match ? this.props.match.params.userId : this.props.authorizedUserId;
    
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps) {
    if((this.props.match && this.props.match.params.userId) != (prevProps.match && prevProps.match.params.userId)){
      this.refreshProfile();
    }
  }

  render() {

    return (
      <Profile  {...this.props}
      isOwner={!this.props.match} 
      profile={this.props.profile} 
      status={this.props.status} 
      updateStatus={this.props.updateStatus}
      savePhoto={this.props.savePhoto} />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = (props) => {
  const match = useMatch('/profile/:userId/');
  return <ProfileContainer {...props} match={match} />;
}

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
  withAuthRedirect
)(WithUrlDataContainerComponent);