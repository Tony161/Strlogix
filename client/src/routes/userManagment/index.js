import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import getAllDataAction from '../../modules/userManagment/actions/getAll';
import updateDataAction from '../../modules/userManagment/actions/update';
import UserManagmentComponent from './components';

class UserManagmentContainer extends React.Component {
  inviteUsers = () => this.props.history.push('/inviteUsers');
  render() {
    return (
      <UserManagmentComponent
        inviteUsers={this.inviteUsers}
        updateData={this.props.updateData}
        getData={this.props.getData}
        userManagment={this.props.userManagment}
      />
    );
  }
}

const select = (state, props) => ({
  auth: state.auth,
  userManagment: state.userManagment,
  profile: state.profile
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getData: getAllDataAction,
      updateData: updateDataAction,
    },
    dispatch,
  );

export default connect(
  select,
  mapDispatchToProps,
)(UserManagmentContainer);
