import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import getDataAction from '../../modules/profile/actions/get';
import updateDataAction from '../../modules/profile/actions/update';
import profileAction from '../../modules/profile/actions/profile';
import ProfileComponent from './components';
// import logoutUserAction from '../../../modules/auth/actions/logout';

class ProfileContainer extends React.Component {
  
  render() {
    return (
      <ProfileComponent
        profile={this.props.profile}
        getData={this.props.getData}
        updateData={this.props.updateData}
        auth={this.props.auth}

      />
    );
  }
}

const select = (state, props) => ({
  profile: state.profile,
  auth: state.auth,
  // images: state.images,
  // error: state.error,
});


const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      myProfile: profileAction,
      getData: getDataAction,
      updateData: updateDataAction,
    },
    dispatch,
  );

export default connect(
  select,
  mapDispatchToProps,
)(ProfileContainer);
