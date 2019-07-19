import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import getDataAction from '../../modules/profile/actions/get';
import updateDataAction from '../../modules/profile/actions/update';
import profileAction from '../../modules/profile/actions/profile';
import ProfileComponent from './components';
import ImageAction from '../../modules/profile/actions/image';

class ProfileContainer extends React.Component {
  gotoUserManagment = () => this.props.history.push('/userManagment');
  render() {
    return (
      <ProfileComponent
        updateData={this.props.updateData}
        auth={this.props.auth}
        profile={this.props.profile}
        getData={this.props.getData}
        image={this.props.image}
        gotoUserManagment={this.gotoUserManagment}
        user={this.props.user}
      />
    );
  }
}

const select = (state, props) => ({
  profile: state.profile,
  auth: state.auth,
  user: state.user,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      myProfile: profileAction,
      getData: getDataAction,
      updateData: updateDataAction,
      image: ImageAction,
    },
    dispatch,
  );

export default connect(
  select,
  mapDispatchToProps,
)(ProfileContainer);
